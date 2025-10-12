//Classes and Functions

// Object oriented programming is a programming paradigm(style of writing and organizing code) based on the concepts of objects.
/*
1:Objects can contain data which we call Properties and code which we call Methods.

// A class is a blueprint for creating Objects(instances)......Defines Data(properties)+behaviour(methods)

*/

// Lecture 37 :Creating A Class and Using A Class

class User {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;

  constructor(fn: string, ln: string, a: number, g: string) {
    this.firstname = fn;
    this.lastname = ln;
    this.age = a;
    this.gender = g;
  }

  greetuser(salutation: string) {
    const msg = `Hello ${salutation} .  ${this.firstname} ${this.lastname}`;
    console.log(msg);
  }
}

const user1 = new User("john", "smith", 28, "male");
const user2 = new User("merry", "jane", 32, "female");
const user3 = new User("mark", "vought", 29, "male");

// Invoking Greet User
user1.greetuser("Mrs");

/*__proto__ is a built-in JavaScript property on all objects.

But TypeScript’s type definitions for class instances (like User) don’t explicitly include __proto__, since it’s considered non-standard and deprecated in favor of Object.getPrototypeOf().

So TypeScript blocks direct access unless you explicitly bypass type checking.*/

// The Prototype Chain

/*1: user1 (the instance)
→ has its own properties: name, age, gender.
Prototype link:*/
Object.getPrototypeOf(user1) === User.prototype; // ✅ true

/*User.prototype (the prototype object of the class)
→ Contains methods shared by all User instances (like User.prototype.constructor).
Prototype link: */
Object.getPrototypeOf(User.prototype) === Object.prototype; // ✅ true

/*Object.prototype (the base of all objects)
→ Provides built-in methods like .toString(), .hasOwnProperty(), etc.
Prototype link: */
Object.getPrototypeOf(Object.prototype) === null; // ✅ true

/*→ Marks the end of the chain — no further prototype above this. */

/*
FULLL VISUAL CHAIN 
user1
  ↓ [[Prototype]]
User.prototype
  ↓ [[Prototype]]
Object.prototype
  ↓ [[Prototype]]
null

 */
Object.getPrototypeOf(user1) === User.prototype; // ✅
Object.getPrototypeOf(User.prototype) === Object.prototype; // ✅
Object.getPrototypeOf(Object.prototype) === null; // ✅

/*Lecture 39 ACCESS Modifiers */

class Employee1 {
  empName: string;
  private salary: number;
  baseLocation: string;
  isEligible: boolean;
  private hikePercent: number;
  constructor(
    name: string,
    sal: number,
    loc: string,
    isEligible: boolean,
    hikePercent: number
  ) {
    this.empName = name;
    this.salary = sal;
    this.baseLocation = loc;
    this.isEligible = isEligible;
    this.hikePercent = hikePercent;
  }

  getSalary() {
    if (this.isEligible) {
      return this.getNewsalary();
    }
    return this.salary;
  }

  getNewsalary() {
    return this.salary + (this.salary * this.hikePercent) / 100;
  }
}
//Creating an Instance
const employee = new Employee1("John Smith", 10000, "London", true, 20);
console.log(employee);

//Resetting The Salary
// employee.salary = 20000;
console.log(employee);

//We have 2 Access Modifiers : Public and Private

// 1: The public access modifier makes a property and a method accessible to everyone.
// 2: The private access modifier makes the property or method accesible only within the class: So when we make a property private it becomes accesible only within the class where it was defined

console.log(Object.getPrototypeOf(employee) === Employee1.prototype);

/************************UNDERSTANDING INHERITANCE************************ */

//Person Class
class Person1 {
  name: string;
  protected dob: string;
  gender: string;
  constructor(name: string, dob: string, gender: string) {
    this.name = name;
    this.dob = dob;
    this.gender = gender;
  }
  //Age Method
  calculateAge() {
    return new Date().getFullYear() - new Date(this.dob).getFullYear();
  }
}

// Employee class
class Employee extends Person1 {
  salary: number;
  bonus: number;
  constructor(
    n: string,
    dob: string,
    gen: string,
    salary: number,
    bonus: number
  ) {
    super(n, dob, gen);
    this.salary = salary;
    this.bonus = bonus;
  }

  //Method Get Salary
  getSalary() {
    return this.salary + this.bonus;
  }
  //Method Overriding From The Parent Class
  calculateAge(): number {
    console.log("Calculate Age of Employee called");
    return 2024 - new Date(this.dob).getFullYear();
  }
}
const emp = new Employee("john", "08-30-1991", "male", 10000, 2000);
console.log(emp.calculateAge());

/***************************************************
 * *********LECTURE 44: GETTER & SETTER*************
 ***************************************************/
class Person {
  public name: string;
  private _age: number | null = null;

  //Getter Func:To create a getter we use the get keyword
  get age() {
    if (this._age != null) {
      return this._age;
    }
    throw new Error(`Age is not defined for the person ${this.name}`);
  }
  // To create a setter we use the Set Keyword
  set age(value: number) {
    if (value > 0) {
      this._age = value;
    } else {
      throw new Error("Age cannot be a negative value");
    }
  }

  constructor(name: string) {
    this.name = name;
  }
}
//Instance
const person = new Person("John");

// Before Setter
// console.log(person.age, "Getter");
// After Setter
person.age = 90;
console.log(person.age, "Getter");

// Computed Properties
class Circle {
  private _radius: number;

  //Getter Method
  get radius() {
    return this._radius;
  }
  // Setter Method
  set radius(value: number) {
    this._radius = value;
  }
  // Get Diameter
  get diameter() {
    return this._radius * 2;
  }
  //Set Diameter
  set diameter(val: number) {
    this._radius = val / 2;
  }
  constructor(_radius: number) {
    this._radius = _radius;
  }
}

/***************************************************
 * ****LECTURE 45: STATIC METHODS & PROPERTIES******
 ***************************************************/
//Instance properties are properties which we can access in the instance of a class but static properties are those properties which we can access on the class itself..--->Same is true for methods

class Employee3 {
  public firstName: string;
  public lastName: string;
  public static count: number = 0;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    Employee3.count++;
  }
  //Methods
  static sayHello() {
    return `Hi There`;
  }
}
const emp1 = new Employee3("John", "Smith");
console.log(Employee3.count);
const emp2 = new Employee3("John", "Smith");
console.log(Employee3.count);
const emp3 = new Employee3("John", "Smith");
console.log(Employee3.count);

console.log(Employee3.sayHello());

// ABSTRACT CLASSES

//You cannot create an instance of an abstract class
// To create an abstract method you  need to define the class as an abstract
abstract class Employee4 {
  public firstName: string;
  public lastName: string;
  constructor(fn: string, ln: string) {
    this.firstName = fn;
    this.lastName = ln;
  }
  // Method GetSalary
  abstract getSalary(): number;
}

class PermanentEmp extends Employee4 {
  monthlySalary: number;
  constructor(fn: string, ln: string, salary: number) {
    super(fn, ln);
    this.monthlySalary = salary;
  }
  getSalary(): number {
    return this.monthlySalary * 12;
  }
}
const permem1 = new PermanentEmp("John", "Smith", 1000);
console.log(permem1.getSalary());

class ContractEmployee extends Employee4 {
  hourlySalary: number;
  constructor(fn: string, ln: string, salary: number) {
    super(fn, ln);
    this.hourlySalary = salary;
  }

  getSalary(): number {
    return this.hourlySalary * 9 * 365;
  }
}
const contractemp1 = new ContractEmployee("John", "Doe", 10);
console.log(contractemp1.getSalary());

// Using Abstract we can define an abstract class which can contain some properties which will be common for all its child classes

// An abstract class cannot be instantiated directly

// PRIVATE CONSTRUCTOR AND SINGLETON
// Why would we want a private constructor: A private constructor restricts the creation of a classes instance directly from outside the class and this enforces controlled initialization and also enforces potentially the singlton pattern

// To implement singleton pattern we need to make the constructor of this class Private

class Personn {
  private static _instance: Personn;
  constructor() {}
  //Method responsible for creating instance of Personn class
  static getInstance() {
    if (Personn._instance) {
      return new Personn();
    } else {
      Personn._instance = new Personn();
      return Personn._instance;
    }
  }
}
const person1 = Personn.getInstance();
const person2 = Personn.getInstance();

/***************************************************
 * ***********LECTURE 48: INTERFACE*****************
 ***************************************************/
interface User1 {
  firstName: string; //An interface property cannot have an initializer.ts(1246)
  lastName: string;
  //Method
  greetUser(): void; //We can specify parameters if any will be needed
  getFullName(): string;
}

// Using an Interfaces as a Type
let user4: User1;
user4 = {
  firstName: "John",
  lastName: "Smith",
  greetUser() {
    console.log("Hello user");
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
