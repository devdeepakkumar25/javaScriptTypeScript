// /*
// =====================================================
// 💡 ADVANCED TYPESCRIPT CONCEPTS — In One File
// =====================================================

// Concepts Covered:
// 1️⃣ Type Aliases
// 2️⃣ Union Types
// 3️⃣ Intersection Types
// 4️⃣ Literal Types
// 5️⃣ Type Narrowing
// 6️⃣ Nullable Types
// 7️⃣ Optional Chaining
// 8️⃣ Nullish Coalescing
// 9️⃣ Type Assertions
// 🔟 Unknown Type
// 1️⃣1️⃣ Never Type
// =====================================================
// */

// // ---------------------------------------------------
// // 1️⃣ TYPE ALIASES
// // ---------------------------------------------------
// // Type aliases let you define a custom type name for reuse.
// // Example: Instead of repeating {id, name, retire} everywhere, we define a single alias.

// type Employee = {
//     readonly id: number;                 // 'readonly' means cannot be reassigned
//     name: string;
//     retire: (date: Date) => void;
// };

// let employee: Employee = {
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) => {
//         console.log("Employee retired on:", date);
//     }
// };

// // ---------------------------------------------------
// // 2️⃣ UNION TYPES
// // ---------------------------------------------------
// // Union allows a variable to take more than one type.
// // Example: number | string means it can accept either type.

// function kgToLbs(weight: number | string): number {
//     // Type Narrowing: using typeof to check actual type at runtime
//     if (typeof weight === 'number')
//         return weight * 2.2;
//     else
//         return parseInt(weight) * 2.2; // convert string to number
// }

// console.log(kgToLbs(10));     // 22
// console.log(kgToLbs('10kg')); // 22


// // ---------------------------------------------------
// // 3️⃣ INTERSECTION TYPES
// // ---------------------------------------------------
// // Intersection combines multiple types into one (AND relationship).

// type Draggable = {
//     drag: () => void;
// };

// type Resizable = {
//     resize: () => void;
// };

// // UIWidget must have both drag() and resize()
// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => { console.log("Dragging..."); },
//     resize: () => { console.log("Resizing..."); }
// };


// // ---------------------------------------------------
// // 4️⃣ LITERAL TYPES
// // ---------------------------------------------------
// // Literal types are exact, specific values — not just any number or string.

// let quantity: 50 | 100 = 100; // can only be 50 or 100

// // We can reuse it using a Type Alias
// type Quantity = 50 | 100;
// let qty: Quantity = 50;

// // Literal string union
// type Metric = 'inch' | 'cm';
// let unit: Metric = 'inch';


// // ---------------------------------------------------
// // 5️⃣ NULLABLE TYPES
// // ---------------------------------------------------
// // A function can accept null or undefined if we explicitly allow them.

// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase()); // safe when not null
//     else
//         console.log('Hola!'); // default message
// }

// greet(null);


// // ---------------------------------------------------
// // 6️⃣ OPTIONAL CHAINING
// // ---------------------------------------------------
// // Used to safely access nested properties without errors
// // If a property is null/undefined, it simply returns undefined instead of throwing.

// type Customer = {
//     birthday?: Date; // optional property
// };

// // This function may return null or undefined (e.g., invalid customer)
// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(0);

// // Traditional null checks
// if (customer !== null && customer !== undefined)
//     console.log(customer.birthday);

// // Optional chaining — simpler way
// console.log(customer?.birthday?.getFullYear()); // returns undefined safely

// // Optional element access example:
// // customers?.[0]
// // Optional call example:
// let log: any = null;
// log?.('a'); // Won’t throw error if log is null


// // ---------------------------------------------------
// // 7️⃣ NULLISH COALESCING OPERATOR
// // ---------------------------------------------------
// // Provides a fallback value ONLY if the variable is null or undefined (not for 0 or false).

// let speed: number | null = null;

// let ride = {
//     speed1: speed || 30,             // || returns 30 if falsy (0, null, undefined)
//     speed2: speed !== null ? speed : 30, // Manual null check
//     speed3: speed ?? 30              // ?? returns 30 only if null/undefined
// };

// console.log(ride);


// // ---------------------------------------------------
// // 8️⃣ TYPE ASSERTIONS
// // ---------------------------------------------------
// // Used when you (the developer) know more about a type than TypeScript can infer.
// // Example: When accessing HTML elements.

// let phone = document.getElementById('phone') as HTMLInputElement; // Method 1
// console.log(phone.value);

// let phone2 = <HTMLInputElement>document.getElementById('phone');  // Method 2
// console.log(phone2.value);

// // HTMLElement = base type for all HTML elements
// // HTMLInputElement = specific input element type


// // ---------------------------------------------------
// // 9️⃣ UNKNOWN TYPE
// // ---------------------------------------------------
// // 'unknown' is a safer alternative to 'any' — you must narrow it before using.

// function render(document: unknown) {
//     // Type narrowing — check before use
//     if (typeof document === 'string') {
//         console.log(document.toUpperCase());
//     }
//     // if (document instanceof WordDocument) { ... }
// }


// // ---------------------------------------------------
// // 🔟 NEVER TYPE
// // ---------------------------------------------------
// // The 'never' type is used for functions that never return (they either throw or loop forever).

// // Example 1: A function that always throws an error
// function reject(message: string): never {
//     throw new Error(message);
// }

// // reject("Something went wrong!");
// // console.log('This line will never run'); // unreachable

// // Example 2: Function that runs forever (infinite loop)
// function processEvents(): never {
//     while (true) {
//         // waiting for events indefinitely
//     }
// }

// // processEvents(); // Warning: will block execution forever

// console.log('hello worlds'); // Won’t execute if processEvents() is called
// /*
// =====================================================
// 🧾 SUMMARY
// =====================================================
// ✅ Type Alias — Custom reusable types.
// ✅ Union — Either/or type combinations.
// ✅ Intersection — Merge multiple types into one.
// ✅ Literal — Restrict variable to specific values.
// ✅ Nullable — Allow null/undefined.
// ✅ Optional Chaining — Safe property access.
// ✅ Nullish Coalescing — Default for null/undefined.
// ✅ Type Assertion — Tell TS the exact type.
// ✅ Unknown — Safer than any; requires narrowing.
// ✅ Never — For unreachable or infinite code.
// =====================================================
// 💪 These features make TypeScript expressive, safe, and flexible for real-world apps.
// */
