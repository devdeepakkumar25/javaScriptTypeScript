// Prototype means parent
//  implement inhertiance with object
//  like Shape and Circle first  wirte all the common propetires and method of circle in shape object and then some how link shape to circle
//  and then Shape object is proptotype of the circle object
// every object will inherit from the Object that is Prototype
// in java script first see the property and object in the object if they donot find then it see in the its prototype
// A prototype is just a regular object in memory

let x = {};

let y = {};

console.log(x.toString());

console.log(Object.getPrototypeOf(x));

// x.__proto__ (parent of x (obj))

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

console.log(x.__proto__ === y.__proto__);

// Prototype inheritance
// Object created by a given constructor will have the same prototype

let myArray = [];

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle = new Circle(10);

let person = { name: "Deepak" };
console.log(person);
console.log(person.toString());

for (let key in person) {
  console.log(key);
}

console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);

let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor);

Object.defineProperty(person, "name", {
  writable: false, // cna not modify its content
  enumerable: false, // can not iterate using for loop and can not acses using Object.keys()
  configurable: false, // can not delete the object
});

person.name = "Dilkhush";

console.log(person);

console.log(Object.keys(person));

function Circle(radius) {
  this.radius = radius;
}
const cir = new Circle(1);

Circle.prototype;

// console.log(constructor.prototype);

console.log(Circle.prototype);

let array = [];

console.log(array.__proto__);

console.log(Array.prototype);

// function CircleA(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

function CircleA(radius) {
  // Instance members
  this.radius = radius;
  this.move = function () {
    this.draw();
    console.log("move");
  };
}

// Prototype members
CircleA.prototype.draw = function () {
  //   this.move();
  console.log("draw");
};

const c1 = new CircleA(1);
const c2 = new CircleA(1);
console.log(CircleA.prototype === c1.__proto__);
console.log(c1.toString());

CircleA.prototype.toString = function () {
  return "Circle with radius " + this.radius;
};

console.log(c1.toString());

c1.move();

// iterating over prototype
// Object.keys only return instance memebers
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty("radius"));

console.log(c1.hasOwnProperty("draw")); //you will get false since it is prototpe method

Array.prototype.shuffle = function () {};

const arr = [];

arr.shuffle();

// Do not modify objects you don't own

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return "endTime";
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error("Stopwatch has already started.");
  this.running = true;
  this.startTime = new Date();
};
Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error("Stopwatch is not started.");
  this.running = false;
  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

  duration += seconds;
};
Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  duration = 0;
};
