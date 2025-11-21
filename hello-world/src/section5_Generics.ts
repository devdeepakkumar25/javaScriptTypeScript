// Lc1
// Generic classes
// class KeyValuePair<T> {
//   constructor(public key: T, public value: string) {}
// }

// let pair = new KeyValuePair<string>("1", "a");
// let pair1 = new KeyValuePair<number>(1, "b");
// let pair2 = new KeyValuePair<boolean>(false, "c");

// pair.key

// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair<string, string>("1", "a");
// let pair1 = new KeyValuePair<number, number>(1, 3);
// let pair2 = new KeyValuePair<boolean, string>(false, "c");
// let pair3 = new KeyValuePair("1", "a");

// pair.key;

// LC2  Generic functions
// function wrapInArray<T>(value: T) {
//   return [value];
// }

// let numbers = wrapInArray(1);
// let nums = wrapInArray<string>("a");

// nums.push("b");
// console.log(numbers);
// console.log(nums);


// class ArrayUtils {
//   wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let utils = new ArrayUtils();
// let numbers = utils.wrapInArray(1);

// console.log(numbers);


// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//     username: string;
// }


// interface Product {
//     title: string;
// }


// let result = fetch<User>('url');

// result.data?.username


// function echo<T>(value: T): T {
//   return value;
// }
// function echo1<T extends number | string>(value: T): T {
//   return value;
// }

// // echo1(true);

// function echo2<T extends { name: string }>(value: T): T {
//   return value;
// }

// echo2({ name: "a" });

// interface IPerson {
//   name: string;
// }

// function echo4<T extends IPerson>(value: T): T {
//   return value;
// }

// class Person {
//   constructor(public name: string) {}
// }

// class Customer extends Person {}

// function echo5<T extends Person>(value: T): T {
//   return value;
// }

// echo5(new Person("a"));
// echo5(new Customer("b"));


// Extending Generic classes
// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   //   private _objects: T[] = [];
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }
// }

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// // Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }
// // let store = new Store<Product>();
// let store = new CompressibleStore<Product>();

// store.compress();

// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }


// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   //   T is Product
//   // keyof T => 'name' | 'price'
//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 1 });
// store.find("name", "a");


interface Product {
  name: string;
  price: number;
}

// // interface ReadOnlyProduct {
// //   readonly name: string;
// //   readonly price: number;
// // }

// type ReadOnlyProduct = {
//   // Index signature
//   // Key of
//   // [Property in Keyof Product]:Product[Property]
//   //   type mapping
//   readonly [K in keyof Product]: Product[K];
// };

// let product: ReadOnlyProduct = {
//   name: "a",
//   price: 1,
// };

// product.name = "a";

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  //   [K in keyof T]?: T[K];
  [K in keyof T]: T[K] | null;
};
let product: ReadOnly<Product> = {
  name: "a",
  price: 1,
};

