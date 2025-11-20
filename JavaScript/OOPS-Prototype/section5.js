// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {};
  }

  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);

console.log(c);

console.log(typeof Circle); // classes are construction function

// Class Delcration and class Expression are not hoisted

// Class Declaration
class Circle {}

// Class Expression
const Square = class {};

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {}

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// const circle = new Circle(1);
// console.log(Circle.parse());

const circle = Circle.parse('{"radius":1}');

console.log(circle);

class Math2 {
  static abs(value) {
    if (value >= 0) return value;
    return -value;
  }
}

console.log(Math2.abs(-10));

// "use strict";
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c2 = new Circle();
// Method call
c2.draw();

const draw = c2.draw;

console.log(draw);

// Function call
draw();

// Private Members Using Symbols

// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }
// }

// const c = new Circle(1);
// c._radius;

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {}
}

const circlea = new Circle(1);
console.log(circlea);
console.log(circlea._radius);

console.log(Object.getOwnPropertyNames(circlea));
console.log(Object.getOwnPropertySymbols(circlea));

const key = Object.getOwnPropertySymbols(circlea)[0];
console.log(circlea[key]);

// const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // _radius.set(this, radius);
    // _move.set(this, function () {
    //   console.log("move", this);
    // });

    // _move.set(
    //   this,
    //   function () {
    //     console.log("move", this);
    //   }.bind(this)
    // );

    _move.set(this, () => {
      console.log("move", this);
    });

    // privateProps.set(this,{
    //   radius:radius,
    //   move:()=>{}
    // })
    // privateProps.get(this).radius;
  }

  draw() {
    _move.get(this)();
    console.log("draw");
    // console.log(_radius.get(this));
  }
}

const cir = new Circle(1);

cir.draw();

// const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  getRadius() {
    return _radius.get(this);
  }
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error("invalid radius");
    _radius.set(this, value);
  }
}

const cr = new Circle(1);

class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}

const cr1 = new Circle("red", 1);

cr1.move();

cr1.draw();

class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("circle move");
  }
}

const c3 = new Circle();

c3.move();


const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }
  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack is empty");
    return items.pop();
  }

  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error("Stack is empty");
    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
