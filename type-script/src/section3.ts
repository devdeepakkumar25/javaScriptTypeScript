// // let employee :{
// //     readonly id: number,
// //     name: string,
// //     retire: (date :Date) => void;
// // } = {
// //     id: 1,
// //     name: 'Mosh',
// //     retire : (date : Date) =>{
// //         console.log(date);
// //     }
// // }


// // console.log(employee);


// type Employee = {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// }

// let employee: Employee = {
//     id: 1,
//     name: 'Mosh',
//     retire: (date: Date) =>{
//         console.log(date);
//     }
// }


// const now = Date.now();

// console.log(employee.retire(new Date(now)));

// function kgToLbs(weight:number | string){
//     if (typeof weight === 'number')
//         return weight *2.2;
//     else 
//         return parseInt(weight)*2.2;
// }


// console.log(kgToLbs(10));
// console.log(kgToLbs("10kg"));

// // Literal (exact,specific)

// // let quantity: 50 | 100 = 100;

// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// console.log(quantity);

// type Metric = 'cm' | 'inch';

// const unit: Metric = 'cm';
// console.log(unit);

// // Nullable types

// function greet(name: string | null | undefined){
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola');
// }

// greet(null);



// // Optional Chaining 
// type Customer = {
//     birthday: Date
// };


// function getCustomer(id: number) :Customer | null {
//     return id === 0 ? null: {birthday: new Date()};
// }


// let customer = getCustomer(1);

// console.log(customer)


// if (customer !== null){

//     console.log(customer.birthday);
// }


// console.log(customer?.birthday);

// console.log(customer?.birthday?.getFullYear());


// // Optional element access operator 
// const arr:number[] = [];

// console.log(arr?.[0]);


// // Optional call

// let log: any = (message: string) => console.log(message);

// console.log(log('How are you'));

// // Optional call
// let logn: any = null;

// logn?.('a');


// // Nullish Coaelscing Operator 


// let speed: number | null = null;

// let ride = {
//     // Falsy (undefined,null,"",false,0)
//     speed: speed !== null ?speed:30,
//     anotherSpeed: speed ??30, //Nullish coaelscing operator 
// }

// console.log(ride);


// // Type assertions 

// let phone = document.getElementById('phone') as HTMLInputElement;
// let phoneNum = <HTMLInputElement> document.getElementById('phone');

// console.log(phone.value);

// console.log(phoneNum);

// // The unknown type 

// // function render(document:unknown){
// //     // Narrowing 


// // if(typeof document === 'string'){
// //     document.toUpperCase()
// // }

// // if (document instanceof WordDocument){
// //     document.toUpperCase()
// // }

// // }

// // Never Type 

// function reject(message:string):never{
//     throw new Error('message');
// }

// function processEvents():never{
//     while(true){

//     }
// }

// // processEvents();
// reject("...")
// console.log('Hello World');


 