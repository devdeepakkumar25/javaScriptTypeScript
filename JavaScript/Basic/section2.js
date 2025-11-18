let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log( x % y);
console.log( x ** y);

console.log(++x);

console.log(x++);
console.log(x);

console.log(--y);
console.log(y--);
console.log(y);

let a = 10;

a ++;

a = a + 1;

a += 10;
a *= 3;
a -= 1;
console.log(a);
a %= 2;
console.log(a);
a /=3;
// a = Math.floor(a);
a = Math.ceil(a);
a += 2;
console.log(a);
a *= 100;
a **=4;
console.log(a);


x = 1;

// Relational 

console.log(x > 0);
console.log( x >= 1);
console.log(x < 1);
console.log( x <= 1);

//Equality 
console.log(x === 1);
console.log(x !== 1);

//Strict Equality (Type + Value)
console.log( x === 1);
console.log(x === '1');

//Lose Equality only value not type 
console.log(1 == 1);
console.log( '1' == 1);
console.log( 1 == '1');

console.log(true == 1);

// Ternary Operator 

let points = 110;

let type = points > 100 ? 'gold':'silver';

console.log(type);



//Logical And(&&)
// Return True if both operands are True

console.log(true && false);

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);


//Logical OR (||)
// Returns True if one of the operands are True

// Not (!)
eligibleForLoan = true || (!highIncome);
console.log("Eligible",eligibleForLoan);


let applicationRefused = !eligibleForLoan;
console.log("Application Refused",applicationRefused);

console.log(false || true);

console.log(false || "Smith");

console.log(false || 1);

console.log(false || "Deepak");
// False Value 
// false, undefined,null,0,'',NaN

//Anything that is not falsy is Truthy

console.log(false || 1 || 2);

//Short-circuiting

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor);



//Bitwise operator 
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
console.log( 1 | 2);
console.log(1 & 2);

console.log(1 ^ 2);

// Read ,Write ,Execute
// 00000100
// 00000110
// 00000111


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes':'no'
console.log(message);

message = (myPermission & executePermission) ? 'yes':'no';

console.log(message)


let p = 'red';
let q = 'blue';




let temp = p;
p = q;
q = temp;

console.log(p,q);

