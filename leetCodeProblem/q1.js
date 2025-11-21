// normal function
function fn(a, b) {
  const sum = a + b;
  return sum;
}

console.log(fn(2, 3));

// Anonymous function
let fa = function (a, b) {
  const sum = a + b;
  return sum;
};

console.log(fa(3, 5));

// Immediate invoke

let fi = (function (a, b) {
  const sum = a + b;
  return sum;
})(2, 4);

console.log(fi);

let far = (a, b) => {
  const sum = a + b;
  return sum;
};

console.log(far(1, 3));

function funo() {
  function funi(a, b) {
    const sum = a + b;
    return sum;
  }
  return funi;
}

var numsum = funo();

console.log(numsum(2, 3));

function createHelloWorld() {
  function fun() {
    return "Hello World";
  }
  return fun;
}

let helloWorld = createHelloWorld();

console.log(helloWorld([1,2,3,4,,5]))

// console.log(createHelloWorld(1, 2, 3, 4)());
