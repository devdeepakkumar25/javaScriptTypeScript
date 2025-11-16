// file: generics_and_types_explained.ts
// Run: tsc generics_and_types_explained.ts && node generics_and_types_explained.js

/**
 * GOAL:
 * - Explain generics (classes/functions)
 * - Generic constraints (extends)
 * - Multiple type parameters (K, V)
 * - Generic utility functions and static generic methods
 * - Interfaces with generics
 * - keyof operator and using it to write typed find()
 * - Extending generic classes
 * - Mapped types (ReadOnly, Optional, Nullable)
 *
 * All examples are small and annotated so you remember the idea.
 */

/* ===========================================================
   1) Simple non-generic KeyValuePair examples (why generics help)
   =========================================================== */

// Before generics you might create separate classes for each key type:
class KeyValuePair_NumberKey {
  constructor(public key: number, public value: string) {}
}
class KeyValuePair_StringKey {
  constructor(public key: string, public value: string) {}
}

const pairNum = new KeyValuePair_NumberKey(1, 'Apple');
const pairStr = new KeyValuePair_StringKey('1', 'Apple');

console.log('pairNum.key:', pairNum.key);
console.log('pairStr.key:', pairStr.key);

// Problem: repetition — we can generalize using generics (next).

/* ===========================================================
   2) Generic class: KeyValuePair<T>
   =========================================================== */

/**
 * <T> means: KeyValuePair is generic in type T (the key's type here).
 * You use it like: new KeyValuePair<string>('id', 'Apple');
 */
class KeyValuePair_T<K> {
  constructor(public key: K, public value: string) {}
}

const pairGeneric = new KeyValuePair_T<string>('1', 'Apple');
console.log('pairGeneric.key (string):', pairGeneric.key);

/* ===========================================================
   3) Two type parameters: KeyValuePair<K, V>
   =========================================================== */

/**
 * Often a key and value have different types. Use two type parameters:
 *   KeyValuePair<K, V>
 */
class KeyValuePair_KV<K, V> {
  constructor(public key: K, public value: V) {}
}

const pairKV = new KeyValuePair_KV<number, string>(1, 'Apple');
console.log('pairKV:', pairKV);

/* ===========================================================
   4) Generic function: wrapInArray<T>
   =========================================================== */

/**
 * Generic functions allow reusable, type-safe behavior.
 * wrapInArray<T> returns an array containing the value with the same type.
 */
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numbersArray = wrapInArray(1);      // inferred T = number
const stringArray = wrapInArray('a');    // inferred T = string
console.log('numbersArray:', numbersArray);
console.log('stringArray:', stringArray);

/* ===========================================================
   5) Generic static method on a class (utility class)
   =========================================================== */

class ArrayUtils {
  // static generic method
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

const nums = ArrayUtils.wrapInArray(1);   // T inferred as number
const stNums = ArrayUtils.wrapInArray('a');
console.log('ArrayUtils.wrapInArray:', nums, stNums);

/* ===========================================================
   6) Generic interfaces and a mock fetch function
   =========================================================== */

/**
 * Interface Result<T> describes a response that either has data of type T
 * or an error. This pattern is common in typed APIs.
 */
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  username: string;
}
interface Product {
  title: string;
}

function fetchMock<T>(url: string): Result<T> {
  // Mock implementation: we can't actually fetch; return empty result.
  return { data: null, error: null };
}

let resultUser = fetchMock<User>('http://api/users/1');
// TypeScript knows resultUser.data (if non-null) would be User
console.log('resultUser.data?.username:', resultUser.data?.username);

/* ===========================================================
   7) Generic constraints: `extends`
   =========================================================== */

/**
 * Sometimes we need to restrict the type parameter to a subset of types.
 * Example: T extends number | string
 */
function echoNumberOrString<T extends number | string>(value: T): T {
  return value;
}
echoNumberOrString(1);
// echoNumberOrString(true); // Error: boolean not allowed

/**
 * More useful: require that the generic type has a specific shape:
 * T extends { name: string }
 */
function echoWithName<T extends { name: string }>(value: T): T {
  return value;
}
echoWithName({ name: 'a' }); // OK
// echoWithName({ age: 1 }); // Error: missing name

/* ===========================================================
   8) Constraining generics to classes (constructor types)
   =========================================================== */

class PersonClass {
  constructor(public name: string) {}
}
class Customer extends PersonClass {}

// T extends PersonClass means T must be a subclass or PersonClass itself
function echoPersonClass<T extends PersonClass>(value: T): T {
  return value;
}

echoPersonClass(new Customer('C'));      // OK
echoPersonClass(new PersonClass('P'));   // OK

/* ===========================================================
   9) Generic Store example — keyed find using `keyof T`
   =========================================================== */

/**
 * Store<T> holds objects of type T and provides find() by a property.
 *
 * - `keyof T` produces the union of property names (as string literal types).
 *   e.g., if T = Product { name: string; price: number }
 *         then keyof T === 'name' | 'price'
 *
 * - Using `obj[property]` is allowed but TypeScript needs a type assertion
 *   because `obj[property]` evaluates to T[K], which may not be directly comparable
 *   to value (we use `unknown` for value and compare via `===`).
 */

interface ProductExample {
  name: string;
  price: number;
}

class Store<T extends object> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // property: must be one of the keys of T
  // value: unknown (caller can supply appropriate type)
  find(property: keyof T, value: unknown): T | undefined {
    // We need a type-safe access; TypeScript treats obj[property] as T[keyof T].
    // For runtime equality we simply compare with ===. This is a runtime check,
    // so TypeScript can't type-narrow the value variable further here.
    return this._objects.find(obj => obj[property] === value as any);
  }
}

let store1 = new Store<ProductExample>();
store1.add({ name: 'a', price: 1 });
store1.add({ name: 'b', price: 2 });

console.log('find by name:', store1.find('name', 'a'));
console.log('find by price:', store1.find('price', 2));

// If you call store1.find() without args, TypeScript will error — that's correct:
// store1.find(); // Error: Expected 2 arguments

/* ===========================================================
  10) Extending generic classes and restricting generic params
  =========================================================== */

// A subclass that adds compress() — the generic parameter passes through
class CompressibleStore<T> extends Store<T> {
  compress(): void {
    console.log('compressing store objects...');
  }
}

const store2 = new CompressibleStore<ProductExample>();
store2.add({ name: 'x', price: 9 });
store2.compress();

// Restricting the generic parameter so T must have `name: string`
class SearchableStore<T extends { name: string }> extends Store<T> {
  findByName(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name);
  }
}

class ProductStore extends Store<ProductExample> {
  filterByCategory(category: string): ProductExample[] {
    // hypothetical: our ProductExample has no category, so keep simple
    return [];
  }
}

/* ===========================================================
  11) Mapped types: ReadOnly, Optional, Nullable
  =========================================================== */

/**
 * Mapped types allow you to create new types by transforming properties of another type.
 * - `keyof T` iterates the keys of T
 * - `[K in keyof T]: ...` maps each property K to some other type
 */

// Original Product type (redefine for clarity)
type Product = {
  name: string;
  price: number;
};

// Readonly<T> — make every property readonly
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// Optional<T> — make every property optional (?)
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Nullable<T> — make every property T[K] | null
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Example usage:
type ReadOnlyProduct = ReadOnly<Product>;
const productReadonly: ReadOnlyProduct = {
  name: 'a',
  price: 1
};
// productReadonly.name = 'b'; // Error: cannot assign to readonly property

type OptionalProduct = Optional<Product>;
const maybeProduct: OptionalProduct = { name: 'maybe' }; // price optional

type NullableProduct = Nullable<Product>;
const maybeNullProduct: NullableProduct = { name: null, price: null };

/* ===========================================================
  12) Using mapped generic types with variables (correct assignment)
  =========================================================== */

// If you want to create a typed variable using the generic type helper:
let product2: ReadOnly<Product> = {
  name: 'a',
  price: 1
};
// product2.name = 'b'; // Error: cannot reassign readonly property

console.log('product2 (readonly):', product2);

/* ===========================================================
  13) Summary notes (keep these in mind)
  ===========================================================
  - Generics let you write types/functions/classes that work with many types,
    while keeping type safety.
  - Use `extends` to restrict the permitted types for a generic parameter.
  - `keyof T` yields a union of the property names of T (useful for typed access).
  - Mapped types allow you to transform all properties of a type (readonly, optional, nullable).
  - Prefer inference (let TypeScript infer generic parameters) unless you need to be explicit.
*/

console.log('\n--- End of generics_and_types_explained.ts demo ---');
