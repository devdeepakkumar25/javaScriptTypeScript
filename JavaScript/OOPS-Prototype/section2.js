const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const c1 = createCircle(2);

c1.draw();

// Constructor Function

function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const c2 = new Circle(1);

c2.draw();

console.log(c2.constructor);
console.log(circle.constructor);

let x = {};

let y = new Object();

new String();
new Boolean();
new Number();

// Function are object in java script

console.log(Circle.name);

console.log(Circle.length);

console.log(Circle.constructor);

const Circle1 = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function(){
    console.log('draw')
    }
    
    `
);

const c3 = new Circle1(1);

c3.draw();

console.log(c3.radius);

function CircleA(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// CircleA.call({}, 1, 2, 3, 4);
// CircleA.apply({}, [1, 2, 3]);

const ca = new CircleA(3);
ca.xlocation = { x: 1 };
ca["ylocation"] = { y: 1 };

const propertyName = "center location";
ca[propertyName] = { x: 1, y: 1 };
delete ca["ylocation"];
console.log("ca", ca);
console.log(ca.xlocation);
console.log(ca[propertyName]);
let obj = { value: 2 };
let num = 2;

function increaseNum(num) {
  num++;
}

console.log(num);

increaseNum(num);
console.log(num);

function increaseValue(obj) {
  obj.value++;
}

console.log(obj);

increaseValue(obj);

console.log(obj);

// Enumeration object

for (let key in ca) console.log(key, ca[key]);

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

const values = Object.values(circle);

console.log(values);

const entries = Object.entries(circle);
console.log(entries);

if ("radius" in circle) console.log("Circle has a radius");

// Abstraction

function CircleB(radius) {
  let color = "red";
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function () {
    console.log("Optimum Location");
  };

  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}

const cb = new CircleB(10);

console.log(cb);

cb.computeOptimumLocation();
cb.draw();

function CircleC(radius) {
  let color = "red";
  this.radius = radius;
  // defineing private member
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    console.log("Optimum Location");
  };

  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
}

const cc = new CircleC(10);

console.log(cc);

// Getters and setters

function CircleD(radius) {
  this.radius = radius;
  // defineing private member
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("draw");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");
      defaultLocation = value;
    },
  });
}

const cd = new CircleD(10);
cd.draw();
cd.defaultLocation.x = 3;
cd.defaultLocation.y = 4;
cd.defaultLocation = { x: 10, y: 11 };
console.log(cd.defaultLocation);

cd.defaultLocation;

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("Stopwatch is not started.");
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}
