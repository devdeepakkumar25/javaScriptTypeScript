// A closure gives a function access to the variables of the outer function after the outer function has returned.

// A closure is created when a function remembers the variables from the place where it was created — even after that outer function has finished running.

let createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());

console.log(createCounter(10)());

function funo() {
  var a = 6;
  function funi(b) {
    var sum = a + b;
    return sum;
  }
  a = 5;
  return funi;
}

let numsum = funo();

console.log(numsum(2));

console.log(numsum(2));


function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();
fn();  // prints 10

// A closure is created when a function remembers the variables from the place where it was created — even after that outer function has finished running.

// A closure happens automatically whenever:

// A function is created inside another function

// The inner function uses variables from the outer function

// No keywords, no special syntax — closures just happen.

// Why closures exist

// Because JavaScript uses lexical scoping:

// Functions are scoped based on where they are written (not where they are called).

// So inner functions are “linked” to the environment where they were created.

// What	A function that remembers its outer variables
// Why	Because of lexical scoping
// When	Whenever an inner function uses outer function variables
// Benefit	Keeps data alive, creates private state

function bankAccount() {
    let balance = 0;

    return {
        deposit(amount) { balance += amount; },
        getBalance() { return balance; }
    };
}

const acc = bankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
