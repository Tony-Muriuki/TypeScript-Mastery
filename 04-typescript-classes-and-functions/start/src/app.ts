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
class Person {
  name: string;
  dob: string;
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
class Employee extends Person {
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
}
const emp = new Employee("john", "08-30-1991", "male", 10000, 2000);
console.log(emp.calculateAge());
