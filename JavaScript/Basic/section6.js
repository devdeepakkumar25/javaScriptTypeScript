// Function Declaration
function walk() {
  console.log("walk");
}

walk();

// Function Expression
// Anonymous Function Expression
// Funtion Expression must be end with the semicolon

let run = function () {
  console.log("run");
};

let move = run;
run();
move();

let walkf = function walk() {
  console.log("walk");
};
walkf();

// Hoisting
// It is the process of moving variable and
// function declarations to the top of their
// scope before the code is executed.
// This is done automatically by the JavaScript engine.

// Arguments
// Rest operator
function sumf1(...args) {
  console.log(args);
}
sumf1(1, 2, 3, 4, 5);

function sumf2(...args) {
  return args.reduce((a, b) => a + b);
}

console.log("sumf2", sumf2(1, 2, 3, 4, 5, 6));

function sumf3(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sumf3(0, 1, 1, 2, 3, 4));

function interestf1(principle, rate, years) {
  return ((principle * rate) / 100) * years;
}

console.log(interestf1(10000, 3.5, 5));

function interestf2(principle, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principle * rate) / 100) * years;
}

console.log(interestf2(10000));

function interestf3(principle, rate = 3.5, years = 5) {
  return ((principle * rate) / 100) * years;
}

console.log(interestf3(10000));

// Getters and Setters;

let person = {
  firstName: "Deepak",
  lastName: "Dev",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(`${person.firstName} ${person.lastName}`);

console.log(person.fullName());

// getters => access properties
// setters => chnage (mutate) them

person = {
  firstName: "Deepak",
  lastName: "Dev",
  //   getters
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  //   setters
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");
    const parts = value.split(" ");

    if (parts.length !== 2) throw new Error("Enter a first and last name.");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Joe Smith";

console.log(person.fullName);

// const e = new Error();
// This creates an Error object. (It does NOT throw it.)

// throw new Error();
// This throws an exception and stops execution.

try {
  //   person.fullName = null;
  //   person.fullName = "";
  person.fullName = "Deepak Kumar";
} catch (err) {
  console.log(err);
  alert(err);
}

console.log(person.fullName);

// let const var
const message = "hi";

{
  const message = "hi";
}

function start() {
  const message = "hi";
}

if (true) {
  const another = "bye";
}

for (let i = 0; i < 5; i++) {
  // "i" is only accessible in this block
  console.log(i);
}

start();

function stop() {
  const message = "bye";
}

// Global Scope
var color = "red";
let age = 30;

console.log(window.color);
console.log(window.age);

function start() {
  const message = "hi";
  color = "yellow";
  //   const color = "blue";
  console.log(color);
}

start(); // prints: red

console.log(color);

function start() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
    if (true) {
      var color = "red";
    }
    console.log(color);
    if (true) {
      let key = "color";
    }
    // console.log(key); // we you get an error as key is not decined
  }
  console.log(i);
}

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

start();

function sayHi() {
  console.log("Hi");
}

window.sayHi();

// This keyword

// The object that is executing the current function
// this keyword:

// 1. Method → this = object that owns the method
// 2. Regular function → this = global object (window/global)
//    (in strict mode → undefined)
// 3. Arrow function → this = lexical (surrounding) context

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.play();

video.stop();

function playVideo() {
  console.log(this);
}

playVideo();

function Video(title) {
  this.title = title;
  this.count = 0;
  console.log(this);
}

const v = new Video("a");

const videoObj1 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        //   console.log(this.title, tag);
        console.log(this, tag);
      },
      { firstName: "Deepak" }
    );
  },
};
videoObj1.showTags();

const videoObj = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      //   console.log(this.title, tag);
      //   console.log(this, tag);
      console.log(this.title, tag);
    }, this);
  },
};

videoObj.showTags();

const videoObj2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};
console.log("Obj2");
videoObj2.showTags();

const videoObj3 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};
console.log("Obj3");
videoObj3.showTags();

const videoObj4 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
console.log("Obj4");
videoObj4.showTags();

function playAideo(a, b) {
  console.log(this);
}

playAideo.call({ name: "Classical" }, 1, 2);
playAideo.apply({ name: "Old" }, [1, 2]);
playAideo();

const fn = playAideo.bind({ name: "favorite" });

fn();

playAideo.bind({ name: "favorite" })();

function sumFun1(...items) {
  return items.reduce((a, b) => a + b);
}

console.log(sumFun1(1, 2, 3));

function sumFun2(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sumFun2([1, 2, 3]));

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

circle.radius = 20;

console.log(circle.area);

const numbers = [1, 2, 3, 4, 5, 6];

try {
  const count = countOccurrences(null, 1);
  console.log(count);
} catch (err) {
  console.error(err);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array))
    throw new Error(
      `Please give the array ,${array} is not invalid  array object`
    );

  return array.reduce((acc, curr) => {
    return curr === searchElement ? acc + 1 : acc;
  }, 0);
}
