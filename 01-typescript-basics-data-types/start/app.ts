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
