// What is object oriented programming
// A programming paradigm centered around objects rather than functions
// 4 pillers of object -orinted programming
// Encapuslation
// Abstraction
// Inheritance
// Polymorphism

// in oop we combine group of related fucnions and variable  in a unit
//  we called this unit as object and varibale as properties and funcitons as method

// Ensapsulation - Reduce complexity + increase reusability
// Abstraction - Reduce complexity + isolate impact of changes
// Inheritance - Eliminate redundant code
// Refactor ugly switch/case statements

// Object-Oriented Programming (OOP)

// Object-Oriented Programming (OOP) is a programming paradigm centered around objects rather than standalone functions.
// In OOP, we group related variables and functions into a single unit called an object.

// The variables inside an object are known as properties.

// The functions inside an object are known as methods.

// Four Pillars of Object-Oriented Programming
// 1. Encapsulation

// Bundles data and methods inside a single unit (object).

// Reduces complexity and increases reusability by hiding internal details.

// 2. Abstraction

// Shows only the essential features of an object.

// Reduces complexity and isolates the impact of future changes.

// 3. Inheritance

// Allows one class/object to acquire the properties and methods of another.

// Eliminates redundant code and promotes reusability.

// 4. Polymorphism

// Allows the same method or interface to behave differently based on context.

// Useful to refactor and avoid complex switch/case statements.

let baseSalary = 30_000;

let overtime = 10;

let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,

  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());
