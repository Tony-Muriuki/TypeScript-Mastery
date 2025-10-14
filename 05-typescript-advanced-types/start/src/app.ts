/***********************************************
 * *****INTERSECTION TYPE IN TYPESCRIPT*********
 ***********************************************/
/*
// Creating a type using type
type stringOrNumber = string | number;
type boolOrNumber = boolean | number;

type myNumberType = stringOrNumber & boolOrNumber;

// let x: stringOrNumber = "Hello";

let x: myNumberType = 20;*/

// User Type
interface user {
  name: string;
  age: number;
}
// Admin Type
interface admin {
  name: string;
  role: string;
}

type adminUser = user & admin;

let john: adminUser = {
  name: "John",
  age: 28,
  role: "Admin",
};

// Understanding use case for the Intersection Type
function processOrder(order: Order & { status: string }) {
  console.log(order.id, order.items, order.status);
}

interface Order {
  id: number;
  items: string[];
}

processOrder({ id: 123, items: ["item1", "item2"], status: "shipped" });

/***********************************************
 * *****TYPE GUARDS IN TYPESCRIPT***************
 ***********************************************/

// In typescript type guards are a powerful mechanism that allows you to refine the type of a variable based on  runtime checks
// This enhances code reliability and maintainability by providing more precise type information to the compiler.
// Type guards are expressions that typically  return a boolean value or the variable itself cast to a more specific type.

// Number or String Type
type stringOrNumber = string | number;

// Addition Function typeof typeguard
function addition(a: stringOrNumber, b: stringOrNumber) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//Invoking Function
addition("Hello", "World");
addition(20, 30);
addition("Hello", 30);

// TypeGuard With Complex Types
class Animal {
  makeSound() {
    console.log("Generic Animal Sound");
  }
}

// Dog Class
class Dog extends Animal {
  bark() {
    console.log("Woof!Woof!");
  }
}
// Function instanceof typeguard
function makeCreatureSound(creature: Animal) {
  if (creature instanceof Dog) {
    creature.bark();
  } else {
    creature.makeSound();
  }
}

//Class Instances
let animal = new Animal();
let dog = new Dog();

// Invoking Function
makeCreatureSound(animal); //Here we can pass an instance of animal class or Dog Class
makeCreatureSound(dog);

// User Interface
interface User {
  name: string;
  email?: string;
}

// greetUser Func
function greetUser(user: User) {
  if ("email" in user) {
    //If email property exists in user console.log(`Hello ${user.name} your email is ${user.email}`)
    console.log(`Hello ${user.name} your email is ${user.email}`);
  } //Print only userName
  else console.log(`Hello ${user.name}}`);
}

greetUser({ name: "John" });
greetUser({ name: "Mark", email: "mark@gmail.com" });

/***********************************************
 * *****DISCRIMINATED UNION*********************
 ***********************************************/
// Circle Interface
interface Circle {
  kind: "circle";
  radius: number;
}

// Square Interface
interface Square {
  kind: "square";
  length: number;
}

// Shape Types
type shape = Circle | Square;

// Function
function calcArea(shape: shape) {
  switch (shape.kind) {
    case "circle":
      return 3.14 * shape.radius * shape.radius;
    case "square":
      return shape.length * shape.length;
  }
}
// Invoke
console.log(calcArea({ kind: "square", length: 12 }));
console.log(calcArea({ kind: "circle", radius: 12 }));

/***********************************************
 * *****TYPE CASTING IN TYPESCRIPT**************
 ***********************************************/

// Type casting basically allows you to explicitly tell the compier to treat a variable as a different type
let fname = <HTMLInputElement>document.querySelector("#fname")!;
fname.value;

/***********************************************
 * *****WHAT ARE GENERICS***********************
 ***********************************************/
// // Swap Function
// function swap<T>(arr: T[], index1: number, index2: number): T[] {
//   // Swapping Logic: Swapping the number at index 1 with the one at two

//   return [];
// }
// Invoke
// swap([1, 2, 3], 0, 3);
// swap(["Hello", "Hi", "How are you"], 1, 2);

const num: Array<number> = [10, 20, 30];

// Promise
const p: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
});

/***********************************************
 * *****CREATING A GENERIC FUNCTION*************
 ***********************************************/
// Swap Function
function swap<T>(arr: T[], index1: number, index2: number): T[] {
  // Swapping Logic: Swapping the number at index 1 with the one at two
  if (index1 < 0 || index1 > arr.length || index2 < 0 || index2 > arr.length) {
    throw new Error("Invalid index");
  }

  return ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
}
console.log(swap([1, 2, 3], 0, 2));
console.log(swap(["Hello", "Hi", "How are you"], 1, 2));

//All we are going to do from this object is we are going to merge object 1 with object 2
function expand<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}
//Invoke Expand Function
let combined = expand(
  { name: "John", age: 28 },
  { name: "John", gender: "male" }
);
console.log(combined);
// Here we are settinng constraints on the generics that they should accept only object types <T extends object, U extends object>
