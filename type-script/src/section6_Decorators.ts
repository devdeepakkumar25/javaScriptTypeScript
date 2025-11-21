// class Component {
//   insertInDom() {}
// }

// class ProfileComponent extends Component {

// }

// function Component(constructor: Function) {
//   console.log("Component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDom = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

// @Component
// class ProfileComponent {}

// Paratmeterized Decorators
// function Component(value: number) {
//   return (constructor: Function) => {
//     console.log("Component decorator called");
//     constructor.prototype.options = value;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDom = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }

// @Component(1)
// class ProfileComponent {}

// type ComponentOptions = {
//   selecotr: string;
// };

// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDom = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }

// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// // decorator Composition

// @Component({ selecotr: "#my-profile" })
// @Pipe
// class ProfileComponent {}



// Methods Decorator

// function Log(target: any, methodNmae: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function () {
//     console.log("New Implementaion");
//     console.log("Before");
//     original.call(this, "Blue Sky");
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says : " + message);
//   }
// }

// let person = new Person();

// person.say("Hello");

// function Log(target: any, methodNmae: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (message: string) {
//     console.log("New Implementaion");
//     console.log("Before");
//     original.call(this, message);
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says : " + message);
//   }
// }

// let person = new Person();

// person.say("Hello");

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log("New Implementaion");
//     console.log("Before");
//     original.call(this, ...args);
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says : " + message);
//   }
// }

// let person = new Person();

// person.say("Hello");


// Accessor Decorators

// function Capitalize(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.get;
//   descriptor.get = function () {
//     const result = original?.call(this);

//     return typeof result === "string" ? result.toUpperCase() : result;
//     // if (typeof result === "string") {
//     //   return result.toUpperCase();
//     // }
//     // return result;
//   };
// }

// class Person {
//   constructor(public firsName: string, public lastName: string) {}

//   @Capitalize
//   get fullName() {
//     //   return 0;
//     // return null;
//     return `${this.firsName} ${this.lastName}`;
//   }
// }

// let person = new Person("Deepak", "Dev");

// console.log(person.fullName);


 // Property Decorators

// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     const privateKey = `__${propertyName}`;

//     Object.defineProperty(target, propertyName, {
//       get() {
//         return this[privateKey];
//       },

//       set(newValue: string) {
//         if (newValue.length < length) {
//           throw new Error(
//             `${propertyName} should be at least ${length} characters long.`
//           );
//         }
//         this[privateKey] = newValue;
//       },
//     });
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password; // <-- now setter is triggered
//   }
// }

// let user = new User("123"); // ERROR: "password should be at least 4 characters long"

// console.log(user.password);


// Property Decorators

// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;
//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },

//       set(newValue: string) {
//         if (newValue.length < length)
//           throw new Error(
//             `${propertyName} should be at least ${length}characters long.`
//           );
//         value = newValue;
//       },
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

// let user = new User("12321");
// user.password = "a";

// console.log(user.password);
