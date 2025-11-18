// if(condition){
//     statement
// }
// else if (anotherCondition){
//     statement
// }
// else if (yetAnotherCondition)
//     statement
// else
//     statement

let hour = 10;
if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good Evening");

let role;
role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderaotr user");
    break;
  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");

//Loops - for,while do while, for in, for of

// for(initialExpression;condition;incrementExpression)

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

let i = 0;

while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

j = 19;

do {
  console.log(j);
  if (j % 2 !== 0) console.log("Odd Number", j);
  j++;
} while (j <= 5);

//infine loop
// let p = 0;
// while (p < 5){
// console.log(p)
// }

// while(true){}

// do {} while(true);
// let x = 0; do{}while(x<5);

// Infine for loop
// for(let i = 0; i > 0 ; i++);

// for in loop
const person = {
  name: "Deepak",
  age: 29,
};

for (let key in person) {
  console.log(key);
}

for (let key in person) {
  console.log(person[key]);
}

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

// for of
for (let color of colors) console.log(color);

// Break and Continue
let incr = 0;

while (incr <= 10) {
  // if (incr === 5) break;
  if (incr % 2 === 0) {
    incr++;
    continue;
  }
  console.log(incr);
  incr++;
}

function maxNum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(maxNum(4, 9));
console.log(maxNum(-351, -10));

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(300, 200));

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number";
  // throw new Error('Please give the number');
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";

  return input;
}

console.log(fizzBuzz(5));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("okay");
    return;
  } else {
    let diff = speed - speedLimit;
    let points = Math.floor(diff / kmPerPoint);

    if (points > 12) console.log("Licence suspended");
    else console.log("Points :", points);
  }
}

checkSpeed(180);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? "Even" : "Odd");
  }
}

showNumbers(10);

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

let arr = [false, NaN, 0, 1, 2, "", null, undefined];

console.log(countTruthy(arr));

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function sum(limit) {
  let total = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) total += i;
  }

  return total;
}
console.log(sum(10));

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let mark of array) sum += mark;
  let average = sum / marks.length;
  return average;
}

function showStars(rows) {
  let star = "*";
  for (let i = 1; i <= rows; i++) {
    console.log(star);
    star += "*";
  }
}

showStars(10);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

function showPrimes1(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

showPrimes(10);
