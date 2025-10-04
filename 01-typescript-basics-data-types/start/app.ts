/* Lecture 3 : Variables In Typescript */

// let num = 100;
// num = 20; //Reassigning

const text = "Hello Typescript";

/* Data Types In TypeScript*/

//Data types in typescript enable us to define the knid of values a variable can hold enhancing type safety and improving code clarity.

//1:String Datatype: Basically A sequence of characters.
const str1 = "This is a string created using single Quotes";
const str2 = "This is a string created using Double Quotes";
const str3 = `This is a string created 
using Backticks`;

//2:Number Type :The Number Type represent both interger and floating-point numbers...!!!Always remember That Typescript  Numbers Are Always Floating Point Numbers Even when We dont see it

let num = 12; //12.0 Numbers are always Floating Point Numbers in Ts
const pi = 3.14;

//3:Boolean Type ...Used to store The Value True Or False
let isEligible = true;
let isEqual = false;

//Truthy Values and Falsy Values also Exist in Typescript 0, null , empty string" ",

let isGreater = 10 > 15;
console.log(isGreater);

//Type Assignment and Type Inference
function sum(num1: number, num2: number, isPrint: boolean) {
  if (isPrint) {
    let s = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is equals to ${s}`);
  }
  //Explcitly defining Expected Types
  return num1 + num2;
}

//Explicitly Defining Variables
let n1: number = 10; //Explicitly defined the n1 variable data type to be number
let n2: number = 20;

console.log(sum(n1, n2, false));

//Type Inference Automatically Implemented
let n3 = 8091; //Inferred implicitly

//Type inference is the compilers capability to automatically deduce the data type of an expression(Variable/function) based on its value /context without requiring the programmer to explicitly state the type.

/*Lecture 6 Object Type In Typescript*/
//Person was automatically infered to type Object
let Person: {
  name: string;
  age: number;
  gender: string;
  address: { city: string; country: string };
} = {
  name: "John",
  age: 34,
  gender: "male",
  address: {
    city: "London",
    country: "UK",
  },
};
//Lecture 7  Arrays In Typescript : An array is a data structure consisting of a collection of elements each identified by atleast one array index.

let person: (string | number | boolean)[] = ["John", 28, "male", 1000, true]; //Typescript has inferred  person an arr of  (string | number)[]
// person.push(true) type 'boolean' is not assignable to parameter of type 'string | number'

//Single Type Array
const names = ["Tony", "Beatrice", "Majesty", "Linda"];
let birthYear: number[] = [2003, 2007, 2008, 1998];

//Explicity Inferring Type
let presidents: string[] = [];
presidents.push("Jommo Kenyatta");

/*Lecture 08 Tuples In Typescript*/

let employee: [number, string, number, boolean] = [123, "John", 2000, true];
console.log(employee);
//We use a tuple when we want a fixed length array and specific types

/*Lecture 09 : Enums In Typescript*/
enum Roles {
  ADMIN, // 0
  READ_ONLY, // 1
  WRITE_ONLY, // 2
  READ_WRITE, // 3
}

// let role: Roles = Roles.ADMIN;

const user1 = {
  name: "John",
  age: 30,
  gender: "male",
  role: Roles.ADMIN,
};

const isTrue =
  user1.role === Roles.ADMIN ? "This user is ADMIN" : "User is not ADMIN";
console.log(isTrue);

/*Lecture 10 The Any Type In Typescript*/
let dynamicData: any;
dynamicData = 42;
dynamicData = "Hello";
dynamicData = true;
dynamicData = [1, "two", false];
dynamicData = { name: "Tony", role: "developer" };

let mixedArray: any[] = [1, "text", false, { id: 1 }];
// Each element can be a different type.
// Useful for handling unstructured or unpredictable data, e.g., from APIs or user inputs.
// However, TypeScript can’t ensure type safety during data manipulation.

/*Lecture 11 Union Types in Typescript*/

let user: { name: string; age: number } | null = null;

function getUser() {
  //Function that simulates making an API call To the server
  const uname = "John";
  const uage = 34;
  user = { name: uname, age: uage };
  return user;
}
//Invoking func
// getUser();

// Example 2: Union Type in Function Parameters
function printStatus(message: string, code: string | number) {
  console.log(`${message}: ${code}`);
}

printStatus("Success", 200); // ✅ number
printStatus("Error", "404"); // ✅ string
