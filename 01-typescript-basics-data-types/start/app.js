/* Lecture 3 : Variables In Typescript */
// let num = 100;
// num = 20; //Reassigning
var text = "Hello Typescript";
/* Data Types In TypeScript*/
//Data types in typescript enable us to define the knid of values a variable can hold enhancing type safety and improving code clarity.
//1:String Datatype: Basically A sequence of characters.
var str1 = "This is a string created using single Quotes";
var str2 = "This is a string created using Double Quotes";
var str3 = "This is a string created \nusing Backticks";
//2:Number Type :The Number Type represent both interger and floating-point numbers...!!!Always remember That Typescript  Numbers Are Always Floating Point Numbers Even when We dont see it
var num = 12; //12.0 Numbers are always Floating Point Numbers in Ts
var pi = 3.14;
//3:Boolean Type ...Used to store The Value True Or False
var isEligible = true;
var isEqual = false;
//Truthy Values and Falsy Values also Exist in Typescript 0, null , empty string" ",
var isGreater = 10 > 15;
console.log(isGreater);
