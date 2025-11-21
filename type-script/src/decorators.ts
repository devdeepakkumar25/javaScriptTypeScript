// // ============================================
// // 🎯 WHAT ARE DECORATORS
// // ============================================
// //
// // ➤ Decorators are special TypeScript functions
// //   that can be attached to classes, methods, properties,
// //   accessors, or parameters to add extra behavior.
// //
// // ➤ They are basically “meta-programming” tools — 
// //   i.e., code that modifies how other code behaves.
// //
// // ➤ They always start with '@' symbol, like: @Component, @Log, etc.
// //
// // ➤ You must enable them in tsconfig.json:
// //     "experimentalDecorators": true
// //
// // ============================================
// // 📦 TYPES OF DECORATORS
// // ============================================
// //
// // 1️⃣ Class Decorators
// // 2️⃣ Method Decorators
// // 3️⃣ Accessor Decorators (getters/setters)
// // 4️⃣ Property Decorators
// // 5️⃣ Parameter Decorators
// //
// // ============================================
// // 🧩 CLASS DECORATORS
// // ============================================
// //
// // A Class Decorator receives the class constructor
// // and can modify or extend it.
// // --------------------------------------------

// // Simple Class Decorator
// function SimpleComponent(constructor: Function) {
//   console.log("SimpleComponent decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = function () {
//     console.log("Inserting the component in the DOM");
//   };
// }

// // Using the decorator
// @SimpleComponent
// class ProfileSimpleComponent {}

// const profile = new ProfileSimpleComponent() as any;
// console.log("Unique ID:", profile.uniqueId);
// profile.insertInDOM();


// // ============================================
// // 🧩 PARAMETERIZED CLASS DECORATORS (Decorator Factory)
// // ============================================
// //
// // ➤ Sometimes we want to pass arguments to a decorator.
// // ➤ To do that, we wrap the decorator function inside another function.
// //
// // Example: A “Component” decorator that accepts metadata.
// // --------------------------------------------

// type ComponentOptions = {
//   selector: string;
// };

// function Component(options: ComponentOptions) {
//   return function (constructor: Function) {
//     console.log("Component decorator called");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = function () {
//       console.log(`Inserting component into ${options.selector}`);
//     };
//   };
// }

// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// // 🎯 DECORATOR COMPOSITION
// // When multiple decorators are used, they are executed
// // in the reverse order of appearance — bottom to top.
// @Component({ selector: "#my-profile" })
// @Pipe
// class ProfileComponent {}

// const composed = new ProfileComponent() as any;
// console.log(composed.options);
// console.log("Is Pipe?", composed.pipe);
// composed.insertInDOM();


// // ============================================
// // 🧩 METHOD DECORATORS
// // ============================================
// //
// // A Method Decorator allows you to wrap or modify
// // the behavior of class methods.
// //
// // It takes three arguments:
// // 1. target (the class prototype)
// // 2. method name (string)
// // 3. descriptor (PropertyDescriptor)
// // --------------------------------------------

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;

//   descriptor.value = function (...args: any[]) {
//     console.log(`🎬 Before executing ${methodName}`);
//     const result = original.call(this, ...args);
//     console.log(`✅ After executing ${methodName}`);
//     return result;
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says:", message);
//   }
// }

// const person = new Person();
// person.say("Hello Decorators!");


// // ============================================
// // 🧩 ACCESSOR DECORATORS
// // ============================================
// //
// // These are used on getters or setters to modify their behavior.
// // --------------------------------------------

// function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === "string" ? result.toUpperCase() : result;
//   };
// }

// class PersonClass {
//   constructor(public firstName: string, public lastName: string) {}

//   @Capitalize
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const personClass = new PersonClass("mosh", "hamedani");
// console.log("Full Name (Capitalized):", personClass.fullName);


// // ============================================
// // 🧩 PROPERTY DECORATORS
// // ============================================
// //
// // Used to intercept and validate or transform data
// // before assigning it to a property.
// // --------------------------------------------

// function MinLength(length: number) {
//   return function (target: any, propertyName: string) {
//     let value: string;

//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length) {
//           throw new Error(`${propertyName} must be at least ${length} characters long`);
//         }
//         value = newValue;
//       },
//       enumerable: true,
//       configurable: true,
//     };

//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// // ✅ Working Example
// try {
//   const user = new User("123"); // Will throw error
//   console.log("User password:", user.password);
// } catch (e: any) {
//   console.error("❌ Error:", e.message);
// }

// try {
//   const user2 = new User("12345");
//   console.log("✅ Password accepted:", user2.password);
// } catch (e: any) {
//   console.error("❌ Error:", e.message);
// }


// // ============================================
// // 🧩 PARAMETER DECORATORS
// // ============================================
// //
// // Used to observe or record information about parameters
// // inside a method.
// // --------------------------------------------

// type WatchedParameter = {
//   methodName: string;
//   parameterIndex: number;
// };

// const watchedParameters: WatchedParameter[] = [];

// function Watch(target: any, methodName: string, parameterIndex: number) {
//   watchedParameters.push({
//     methodName,
//     parameterIndex,
//   });
// }

// class Vehicle {
//   move(@Watch speed: number) {
//     console.log(`Vehicle moving at ${speed} km/h`);
//   }
// }

// console.log("Watched Parameters:", watchedParameters);

// // ============================================
// // 🔍 SUMMARY
// // ============================================
// //
// // 🔹 Class Decorators → Modify or enhance classes.
// // 🔹 Method Decorators → Wrap or log method calls.
// // 🔹 Accessor Decorators → Transform or validate getters/setters.
// // 🔹 Property Decorators → Validate or restrict property values.
// // 🔹 Parameter Decorators → Capture metadata about parameters.
// //
// // ✅ All decorators receive metadata about what they decorate.
// // ✅ You can use multiple decorators on the same target.
// // ✅ Useful for frameworks like Angular, NestJS, etc.
// //
// // ============================================
// // 🎉 END OF FILE
// // ============================================
