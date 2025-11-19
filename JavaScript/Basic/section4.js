let radius = 1;
let x = 1;
let y = 1;

const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,

  draw: function () {
    console.log("draw");
  },
};

circle1.draw();

// Factory Functions

function createCirlce1() {
  return {
    radius: 1,
    location: {
      x: 1,
      y: 1,
    },
    isVisible: true,
    draw: function () {
      console.log("draw");
    },
  };
}

function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("draw a circle of radius :", radius);
    },
  };
}

const c1 = createCircle(1);
console.log(c1);
c1.draw();

const c2 = createCircle(2);
console.log(c2);
c2.draw();

// Camel Notation: oneTwoThreeFour
// Pascal Notation: oneTwoThreeFour

// Construction Funtion

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw a circle of radius: ", radius);
  };
}

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log("Draw a circle of radius: ", radius);
//         };
//     }
// }

const c3 = new Circle(5);
console.log(c3);
c3.draw();

// Dynamic Nature of object

const circlea = {
  radius: 1,
};

circlea.color = "yellow";
circlea.draw = function () {
  console.log("draw circle of radius", circlea.radius);
};
console.log(circlea);
circlea.draw();

delete circlea.color;
delete circlea.draw;
console.log(circlea);

const circle = createCircle(1);

const another = new Circle(1);

console.log(circle.constructor);
console.log(another.constructor);

// Constructor
new String();
new Boolean();
new Number();

console.log(Circle.name);

console.log(Circle.length);

console.log(Circle.constructor);

const Circle1 = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function(){
    console.log('Draw a Circle');
    }
    `
);

const cir = new Circle1(1);

console.log(cir);

const obj1 = {};

Circle.call(obj1, 2);

console.log("Obj1", obj1);

Circle.call({}, 1);

const obj2 = {};

Circle.apply(obj2, [1, 2, 3]);

console.log(obj2);

// Value Types (Primitive Types): Number, String, Boolean, Symbol, undefined, null
// Reference Types: Object, Function, Array

let var1 = 10;

// Since var1 is a primitive value, var2 gets a *copy* of var1
let var2 = var1;

// Changing var1 does NOT affect var2 because primitives are stored by value
var1 = 20;

console.log(var1); // 20
console.log(var2); // 10

let obj = { value: 10 };
let obj3 = obj;

obj.value = 30;

console.log(obj.value);

console.log(obj3.value);

// Conculusion
// Primitives are copied by their value
// Objects are copied by their reference

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);

let objValue = { value: 10 };

function increaseValue(obj) {
  obj.value++;
}

increaseValue(objValue);

console.log(objValue);

const circleA = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

for (let key in circleA) {
  console.log(key, circleA[key]);
}

for (let key of Object.keys(circleA)) console.log(key);

for (let value of Object.values(circleA)) console.log(value);
// function Object() {}

const x1 = { value: 1 };
const x2 = new Object();

for (let entry of Object.entries(circleA)) console.log(entry);

if ("radius" in circleA) console.log("yes");

if ("color" in circleA) console.log("yes");

const anotherCir = {};

for (let key in circleA) anotherCir[key] = circleA[key];

console.log(anotherCir);

const c4 = Object.assign({}, circleA);

console.log(c4);

const c5 = Object.assign({ color: "yellow" }, circleA);
console.log(c5);

const c6 = { color: "yellow", visible: true };

Object.assign(c6, circleA);

console.log(c6);

const c7 = { ...circleA };
console.log(c7);

console.log(Math.random());
function getRandom() {
  return Math.random();
}

console.log(getRandom());

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(2, 3));

console.log(Math.round(1.2));

console.log(Math.max(1, 2, 3));

console.log(Math.min(1, 2, 3, 4, 5));

// String Object
const anotherS = new String("hi"); // this is objecct type
console.log(typeof anotherS);

// String Primitive
const message = "Hi, This is my first message";
console.log(typeof message); // this is string type

console.log(message.length);

console.log(message[0]);

console.log(message[1]);

console.log(message.includes("my"));

console.log(message.includes("not"));

console.log(message.startsWith("Hi"));

console.log(message.endsWith("ge"));

console.log(message.indexOf("my"));

console.log(message.replace("first", "second"));

console.log(message.toUpperCase());

console.log(message.toLowerCase());

console.log(message.trim());

console.log(message);

let msg = "This is my 'first message";
console.log(msg);

msg = "This is my\n frist message";
console.log(msg);

console.log(message.split(" "));

console.log(message.split(","));

// Template Listeral

const msgA = `
this is my
first message
`;

console.log(msgA);
const name = "John Smith";

const greetMessage = `
Hi ${name},

Thank you for joining my mailing list.

Regards,
Deepak Kumar Dev
`;

console.log(greetMessage);

const now = new Date();

console.log(now);

const date1 = new Date("May 11 2018 09:00");

console.log(date1);

now.setFullYear(2017);

console.log(now.toDateString());

console.log(now.toTimeString());

const address = {
  street: "a",
  city: "b",
  zipCode: 1111,
};

function showAddress(address) {
  //   for (let key in address) {
  //     console.log(key, address[key]);
  //   }
  for (let key of Object.keys(address)) {
    console.log(key, address[key]);
  }

  //   for (let entry of Object.entries(address)) {
  //     console.log(entry);
  //   }
}

showAddress(address);

// Cunstructor Funtion

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// class Address {
//     constructor(street, city, zipCode) {
//         this.street = street;
//         this.city = city;
//         this.zipCode = zipCode;
//     }
// }

let address1 = new Address("a", "b", "c");

let address2 = new Address("a", "b", "c");

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areSame(address1, address2));

function createPost(title, body, author) {
  return {
    title,
    body,
    author,
    views: 0,
    comments: [
      {
        author,
        body,
      },
    ],
    isLive: false,
  };
}
const post = createPost("a", "b", "c");
post.comments.push({ author: "c", body: "d" });

console.log(post);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const posta = new Post("a", "b", "c");
console.log(posta);

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerson: 0, maxPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerson: 11, maxPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerson: 21, maxPerson: 50 },
];

let resturants = [{ averagePerPerson: 5 }];
