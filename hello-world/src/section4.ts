// LC1
// class Account {
//     id: number;
//     owner: string;
//     balace: number;

//     constructor(id: number,owner: string,balance: number){
//         this.id = id;
//         this.owner = owner;
//         this.balace = balance;
//     }

//     deposit(amount: number):void{

//         if(amount <= 0){
//             throw new Error('Invalid amount')
//         }
//         this.balace += amount;
//     }
// }

// let account = new Account(1,'Deepak',0);

// account.deposit(1000);
// console.log(account.balace);
// console.log(account)
// console.log(typeof account);
// console.log(account instanceof Account);

// LC2

// class Account {
//   readonly id: number;
//   owner: string;
//   private _balance: number;
//   nickname?: string;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid amount");
//     }
//     this._balance += amount;
//   }

//   getBalance(): number {
//     return this._balance;
//   }

//   private calculateTax() {}
// }

// let account = new Account(1, "Deepak", 0);

// account.deposit(1000);
// // console.log(account.balance);
// console.log(account.getBalance());
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

// LC3

// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid amount");
//     }
//     this._balance += amount;
//   }

//   getBalance(): number {
//     return this._balance;
//   }

//   private calculateTax() {}
// }

// let account = new Account(1, "Deepak", 0);

// account.deposit(1000);
// // console.log(account.balance);
// console.log(account.getBalance());
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

// Lc4
// getters and setters
// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid amount");
//     }
//     this._balance += amount;
//   }

//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value < 0) throw new Error("Invalid value");
//     this._balance = value;
//   }
//   private calculateTax() {}
// }

// let account = new Account(1, "Deepak", 0);

// account.deposit(1000);
// console.log(account.balance);
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

// LC5

// class SeatAssignment {
//   // index signature property
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();

// seats.A1 = "Deepak";
// seats.A2 = "John";
// seats["A3"] = "Joe smith";

// Cl6
// static members

// class Ride {
//   static activeRides: number = 0;

//   start() {
//     Ride.activeRides++;
//   }
//   stop() {
//     Ride.activeRides--;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();

// ride2.start();

// // console.log(ride1.activeRides);
// // console.log(ride2.activeRides);

// console.log(Ride.activeRides);

// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();

// ride2.start();

// // console.log(ride1.activeRides);
// // console.log(ride2.activeRides);

// console.log(Ride.activeRides);

// Inheritance
// class Person {
//   constructor(public firsName: string, public lastName: string) {}

//   get fullName() {
//     return this.firsName + " " + this.lastName;
//   }

//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test");
//   }
// }

// let student = new Student(1, "Deepak", "Dev");
// student.studentId

// Lc7 override

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test");
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//     // return "Professor " + this.firstName + " " + this.lastName;
//   }
// }

// let student = new Student(1, "Deepak", "Dev");
// student.studentId;

// let teacher = new Teacher("John", "Smith");

// console.log(teacher.fullName);

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking a test");
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//     // return "Professor " + this.firstName + " " + this.lastName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return "Principal " + super.fullName;
//   }
// }

// // let student = new Student(1, "Deepak", "Dev");
// // student.studentId;

// // let teacher = new Teacher("John", "Smith");

// // console.log(teacher.fullName);

// function printNames(people: Person[]) {
//   for (let person of people) {
//     console.log(person.fullName);
//   }
// }

// printNames([
//   new Student(1, "Deepak", "Dev"),
//   new Teacher("John", "Smith"),
//   new Principal("Joe", "Smith"),
// ]);

// // Open Closed Principle
// // Classes should be opern for extension and closed for modification

// Lc8

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   protected walk() {
//     console.log("Walking");
//   }
//   private run() {
//     console.log("Running");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     this.walk();
//     // this.run(); cna not be inherite

//     console.log("Taking a test");
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//     // return "Professor " + this.firstName + " " + this.lastName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return "Principal " + super.fullName;
//   }
// }

// let student = new Student(1, "Deepak", "Dev");
// student.studentId;

// student.takeTest();

// LC9
// Abstract classes and methods
// abstract class Shape {
//   constructor(public color: string) {}

//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }
//   override render(): void {
//     console.log("Rendering a circle");
//   }
// }

// can not be instiatd the object of the abstract classes
// let shape = new Shape("red");
// shape.render();

// LC 10
// Interface

// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// interface ICalendar {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

// interface CloudCalendar extends ICalendar {
//   sync(): void;
// }

// class GoogleCalendar implements ICalendar {
//   //   name: string;
//   //   constructor(name: string) {
//   //     this.name = name;
//   //   }
//   constructor(public name: string) {}
//   addEvent(): void {
//     throw new Error("Method not implemented.");
//   }
//   removeEvent(): void {
//     throw new Error("Method not implemented.");
//   }
// }
