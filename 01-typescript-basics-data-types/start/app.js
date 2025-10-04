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
//Type Assignment and Type Inference
function sum(num1, num2, isPrint) {
    if (isPrint) {
        var s = num1 + num2;
        console.log("Sum of ".concat(num1, " and ").concat(num2, " is equals to ").concat(s));
    }
    //Explcitly defining Expected Types
    return num1 + num2;
}
//Explicitly Defining Variables
var n1 = 10; //Explicitly defined the n1 variable data type to be number
var n2 = 20;
console.log(sum(n1, n2, false));
//Type Inference Automatically Implemented
var n3 = 8091; //Inferred implicitly
//Type inference is the compilers capability to automatically deduce the data type of an expression(Variable/function) based on its value /context without requiring the programmer to explicitly state the type.
/*Lecture 6 Object Type In Typescript*/
//Person was automatically infered to type Object
var Person = {
    name: "John",
    age: 34,
    gender: "male",
    address: {
        city: "London",
        country: "UK",
    },
};
//Lecture 7  Arrays In Typescript : An array is a data structure consisting of a collection of elements each identified by atleast one array index.
var person = ["John", 28, "male", 1000, true]; //Typescript has inferred  person an arr of  (string | number)[]
// person.push(true) type 'boolean' is not assignable to parameter of type 'string | number'
//Single Type Array
var names = ["Tony", "Beatrice", "Majesty", "Linda"];
var birthYear = [2003, 2007, 2008, 1998];
//Explicity Inferring Type
var presidents = [];
presidents.push("Jommo Kenyatta");
/*Lecture 08 Tuples In Typescript*/
var employee = [123, "John", 2000, true];
console.log(employee);
