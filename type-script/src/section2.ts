// // let sales: number = 123_456_789;
// // console.log(sales)

// // let course: string = "Type script";
// // console.log(course)

// // let is_published: boolean = true;
// // console.log(is_published)
// // let level;

// // console.log(level);

// // // let numbers = [1,2,'3'];


// // let  numbers: number[] = [1,2,3];
// // console.log(numbers)

// // let nums = []; //'nums' is declared but if you do not initialize or declare it type the by default it will consider any type  let nums: any[] if 
// // nums = ['a']
// // console.log(nums)

// // let num: number[] = [];

// // console.log(num);

// // // tuple 

// // let user: [number,string] = [1,'Deepak'];


// // user[0]


// // // Enum 


// // const small = 1;
// // const mediaum = 2;
// // const large = 3;

// // console.log(small,mediaum,large);

// // // Use Pascal Case
// // // enum Size {Small = 0,Mediaum ,Large};
// // // enum Size {Small ='s',Mediaum='m',Large='l'};

// // const enum Size {Small = 1,Mediaum,Lage };


// // let mySize: Size = Size.Mediaum;

// // console.log(mySize);


// // // function calculateTax(income:number,taxYear?:number):number{  

// // function calculateTax(income:number,taxYear=2022):number{  
// //     let x:number = 20;

// //     console.log(x);

// //     // if (income <50_000)
// //     if ((taxYear || 2022) < 2022)
// //         return  income*1.2;
// //     return income*1.3;
// // }

// // calculateTax(10)
// // // calculateTax(10,2023)



// // // Obect 

// // let employee :{
// //     readonly id: number,
// //     name: string,
// //     retire: (date: Date)=> void
// // } = {id:1,name:'deepak', retire: (date: Date)=>{
// //     console.log(date);
// // }};

// // // employee.id = 0; // we can not modify it since this property  is readonly 

// // employee.name = 'deepak kumar dev';


// // console.log(employee);

// // // const date = Date.now();
// // // console.log(employee.retire(new Date(now)));

// // console.log(employee);

// // const now = Date.now();
// // employee.retire(new Date(now));   


// /*
// =====================================================
// 💡 TypeScript Deep Explanation — In One File
// =====================================================

// 👉 TypeScript is a superset of JavaScript.
// It means everything in JavaScript is valid in TypeScript, 
// but TypeScript adds **type checking**, **interfaces**, **classes**, 
// and **compile-time error detection** to make code safer and cleaner.

// To run this file:
// 1️⃣ Install TypeScript:   npm install -g typescript
// 2️⃣ Compile:              tsc typescript_explained.ts
// 3️⃣ Run:                  node typescript_explained.js
// */

// // ---------------------------------------------------
// // 1️⃣ BASIC OUTPUT
// // ---------------------------------------------------
// console.log("Hello World");
// // Prints "Hello World" — this shows our TypeScript is running.


// // ---------------------------------------------------
// // 2️⃣ BASIC TYPES
// // ---------------------------------------------------
// // We explicitly assign data types to variables.

// let age: number = 20;     // 'number' type variable
// if (age < 50)
//     age += 10;            // Condition adds 10 if age < 50

// console.log(age);         // Output: 30


// // ---------------------------------------------------
// // 3️⃣ TYPE ANNOTATIONS AND INFERENCE
// // ---------------------------------------------------
// let sales: number = 123_456_789;   // underscores for readability
// let course: string = 'TypeScript'; // string type
// let is_published: boolean = true;  // boolean type

// let level; // Type not assigned, so it's 'any'
// level = 1; // OK
// // level = 'a';  // Also allowed (since it's 'any')

// // ---------------------------------------------------
// // 4️⃣ ANY TYPE
// // ---------------------------------------------------
// function render(document: any) {
//     // The 'any' type disables type checking
//     console.log(document);
// }
// render("This is a document");


// // ---------------------------------------------------
// // 5️⃣ ARRAYS
// // ---------------------------------------------------
// let numbers: number[] = [1, 2, 3];
// // 'number[]' means this array can only contain numbers.
// // numbers.push('a'); // ❌ Error if uncommented


// // ---------------------------------------------------
// // 6️⃣ TUPLES
// // ---------------------------------------------------
// // Tuple = Fixed-length array with specific types in specific order.
// let user: [number, string] = [1, 'Mosh'];
// console.log(user[0]); // 1
// console.log(user[1]); // "Mosh"


// // ---------------------------------------------------
// // 7️⃣ ENUMS
// // ---------------------------------------------------
// // Enums define a set of named constants — useful for grouping related values.

// // Option 1: Default values (0,1,2)
// enum Size { Small, Medium, Large };

// // Option 2: Start from a number (1,2,3)
// enum Size0 { Small = 1, Medium, Large };

// // Option 3: Custom numeric values (1,2,4)
// enum Size2 { Small = 1, Medium = 2, Large = 4 };

// // Option 4: String values
// enum Size3 { Small = 's', Medium = 'm', Large = 'l' }

// let mySize: Size = Size.Medium;
// console.log(mySize);   // Output: 1 (since Small=0, Medium=1)

// const mySize2: Size0 = Size0.Medium;
// console.log(mySize2);  // Output: 2


// // ---------------------------------------------------
// // 8️⃣ FUNCTIONS
// // ---------------------------------------------------

// // A function that calculates tax based on income and tax year
// function calculateTax(income: number, taxYear?: number): number {
//     // '?' means 'taxYear' is optional
//     if (taxYear || 2022 < 2022)   // This condition is just an example
//         return income * 1.2;      // Return 120% of income
//     return income * 1.3;          // Else 130%
// }

// console.log(calculateTax(4, 2029)); // Output: 4.8
// console.log(calculateTax(4));       // Output: 5.2


// // ---------------------------------------------------
// // 9️⃣ VOID FUNCTIONS
// // ---------------------------------------------------
// // A function that doesn’t return anything uses the 'void' type.
// function performTask(): void {
//     console.log("Performing a Task");
// }

// performTask();


// // ---------------------------------------------------
// // 🔟 OBJECT TYPES
// // ---------------------------------------------------

// // Object with 'readonly' property
// let employe: { readonly id: number, name: string } = { id: 1, name: 'joe' };

// // We can read but cannot change 'id' because it's readonly
// // employe.id = 2;  // ❌ Error: Cannot assign to 'id' because it is a read-only property.

// employe.name = 'Mosh'; // ✅ Allowed (since 'name' is not readonly)
// console.log(employe);


// // ---------------------------------------------------
// // 11️⃣ OPTIONAL & FUNCTION PROPERTIES IN OBJECTS
// // ---------------------------------------------------
// let employe2: {
//     id: number,
//     name?: string,                   // Optional property
//     retire: (date: Date) => void     // Method property
// } = {
//     id: 1,
//     name: "mosh",
//     retire: (date: Date) => {
//         console.log("Employee retired on:", date);
//     }
// };

// // Call the retire function
// employe2.retire(new Date());

// /*
// =====================================================
// 🧾 Summary:
// =====================================================
// 1️⃣ TypeScript adds static typing to JavaScript → reduces runtime errors.
// 2️⃣ You can specify variable types (number, string, boolean, etc.).
// 3️⃣ Tuples store mixed fixed-length data.
// 4️⃣ Enums are sets of named constants.
// 5️⃣ Functions can have optional parameters and return types.
// 6️⃣ 'any' disables type checking, 'void' means no return.
// 7️⃣ Objects can have readonly or optional properties.
// 8️⃣ Compile TypeScript into JavaScript using 'tsc' before running.

// ✅ TypeScript makes your JavaScript code more predictable, maintainable,
// and easier to debug before execution.
// */
