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
