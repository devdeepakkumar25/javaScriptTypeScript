let name;
name='Deepak';
console.log(name);


// syntax error 
// let if = 'if';
// console.log(if);

// variable 
// Cannot be a reserved keyword 
// Should be meaningful 
// Cannot start with a number (1name)
// Canot contain a space or hyper (-)


// usecamel case 

let fullName;
let fName ,lNmae;

// let firstName= "Deepak",lastName;
// modern Best pracitce 

let firstName = "Deepak";
let lastName = 'Dev';


const intersetRate = 0.3;
// intersetRate = 2; // cannot be assinged use let for assignment 
console.log(intersetRate);

let nameA = 'Deepak'; // String Literal
let age = 30; //Number Literal
let isApproved = false; // Boolean Literal 
let firstNameA = undefined;
let selectedColor = null;


console.log(typeof nameA);
nameA = 2;
console.log(typeof nameA);

console.log(typeof age);


age = 2.3;

console.log(typeof age);

console.log(typeof isApproved);

console.log(typeof firstNameA); //undefined is a value and also type 

console.log(typeof selectedColor);// it is object type since null  sobject



let person = {
    name: 'Deepak',
    age: 29
}

//Dot notation 
person.name = 'Smith';
//Bracket Notation 
person['name'] = "Mary";


console.log(person);


let selectedName = 'name';

console.log(person[selectedName]);


let selectedColors = []; //Array Literal 

selectedColors = ['red','blue'];

console.log(selectedColors);


console.log(selectedColors[0]);

selectedColors[2] = 'green';

selectedColors[1] = 3;
console.log(selectedColors);


console.log(typeof selectedColors);


console.log(selectedColors.length);



// Performing a task
function greeta(){
    console.log("Hello World");
}

greeta();


function greetb(name){
    console.log('Hello '+ name);
}

greetb('John');


greetb('Smith');


function greet(name,lastName){
    console.log('Hello '+ name+" "+ lastName);
}

greet("John",'Smith');


//Calculating a value

function square(number){
    return number*number;
}

console.log(square(2));


let number = square(4);
console.log(number);





