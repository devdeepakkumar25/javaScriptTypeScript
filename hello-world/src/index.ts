let sales: number = 123_456_789;
console.log(sales)

let course: string = "Type script";
console.log(course)

let is_published: boolean = true;
console.log(is_published)
let level;

console.log(level);

// let numbers = [1,2,'3'];


let  numbers: number[] = [1,2,3];
console.log(numbers)

let nums = []; //'nums' is declared but if you do not initialize or declare it type the by default it will consider any type  let nums: any[] if 
nums = ['a']
console.log(nums)

let num: number[] = [];

console.log(num);

// tuple 

let user: [number,string] = [1,'Deepak'];


user[0]


// Enum 


const small = 1;
const mediaum = 2;
const large = 3;

console.log(small,mediaum,large);

// Use Pascal Case
// enum Size {Small = 0,Mediaum ,Large};
// enum Size {Small ='s',Mediaum='m',Large='l'};

const enum Size {Small = 1,Mediaum,Lage };


let mySize: Size = Size.Mediaum;

console.log(mySize);


// function calculateTax(income:number,taxYear?:number):number{  

function calculateTax(income:number,taxYear=2022):number{  
    let x:number = 20;

    console.log(x);

    // if (income <50_000)
    if ((taxYear || 2022) < 2022)
        return  income*1.2;
    return income*1.3;
}

calculateTax(10)
// calculateTax(10,2023)



// Obect 

let employee :{
    readonly id: number,
    name: string,
    retire: (date: Date)=> void
} = {id:1,name:'deepak', retire: (date: Date)=>{
    console.log(date);
}};

// employee.id = 0; // we can not modify it since this property  is readonly 

employee.name = 'deepak kumar dev';


console.log(employee);

// const date = Date.now();
// console.log(employee.retire(new Date(now)));

console.log(employee);

const now = Date.now();
employee.retire(new Date(now));   