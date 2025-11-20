function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  // Shape(color) we have to use call other wise it will attached to the window funion
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

// function Square() {}

// Square.prototype.duplicate = function () {};

// Circle.prototype = Object.create(Object.prototype);
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
Circle.prototype = Object.create(Shape.prototype);
// resetting the constructor
Circle.prototype.constructor = Circle;

const s = new Shape("red");

const c = new Circle(1, "blue");

// c.duplicate();

new Circle.prototype.constructor(1, "blue");
console.log(window.color);

function Square(size) {
  this.size = size;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

const sq = new Square(10);

sq.duplicate();

//  Defining the intermediate function
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log("draw");
};

const sp = new Shape("red");

const cr = new Circle(1, "blue");

new Circle.prototype.constructor(1, "blue");
// console.log(window.color);

function Square(size) {
  this.size = size;
}
extend(Square, Shape);

const sqr = new Square(10);

sqr.duplicate();

// Method Overriding

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate();
  //   Shape.prototype.duplicate.call(this); // if you are using this
  console.log("duplicate cirlce");
};

const cr1 = new Circle(1);

cr1.duplicate();

// Polymorphism

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  //   Shape.prototype.duplicate();
  //   Shape.prototype.duplicate.call(this); // if you are using this
  console.log("duplicate cirlce");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const shapes = [new Circle(), new Square(), new Shape()];

for (let shape of shapes) shape.duplicate();

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swim");
  },
};

// const person = Object.assign({}, canEat, canWalk);

const person = mixin(Person.prototype, canEat, canSwim);

console.log(person);

function Person() {}

// Object.assign(Person.prototype, canEat, canWalk);

mixin(Person.prototype, canEat, canWalk);
console.log(new Person());

const p = new Person();
console.log(p);

p.eat();

p.walk();

function Goldfish() {}

// Object.assign(Goldfish.prototype, canEat, canSwim);

mixin(Goldfish.prototype, canEat, canSwim);
const goldfish = new Goldfish();

console.log(goldfish);
goldfish.eat();
goldfish.swim();

function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// baseHtmlSelectElement
// HtmlSelectElement.prototype - Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();

const st = new HtmlSelectElement();

function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// baseHtmlSelectElement
// HtmlSelectElement.prototype - Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
const s2 = new HtmlSelectElement();

function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
  this.render = function () {
    return `
    <slect> 
    ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>
    
    `;
  };
}

const renderItem = (item) => `<option>${item}</option>`;

// baseHtmlSelectElement
// HtmlSelectElement.prototype - Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
}

const s3 = new HtmlSelectElement();
