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
//We use a tuple when we want a fixed length array and specific types
/*Lecture 09 : Enums In Typescript*/
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["WRITE_ONLY"] = 2] = "WRITE_ONLY";
    Roles[Roles["READ_WRITE"] = 3] = "READ_WRITE";
})(Roles || (Roles = {}));
// let role: Roles = Roles.ADMIN;
var user1 = {
    name: "John",
    age: 30,
    gender: "male",
    role: Roles.ADMIN,
};
var isTrue = user1.role === Roles.ADMIN ? "This user is ADMIN" : "User is not ADMIN";
console.log(isTrue);
/*Lecture 10 The Any Type In Typescript*/
var dynamicData;
dynamicData = 42;
dynamicData = "Hello";
dynamicData = true;
dynamicData = [1, "two", false];
dynamicData = { name: "Tony", role: "developer" };
var mixedArray = [1, "text", false, { id: 1 }];
// Each element can be a different type.
// Useful for handling unstructured or unpredictable data, e.g., from APIs or user inputs.
// However, TypeScript can’t ensure type safety during data manipulation.
/*Lecture 11 Union Types in Typescript*/
var user = null;
function getUser() {
    //Function that simulates making an API call To the server
    var uname = "John";
    var uage = 34;
    user = { name: uname, age: uage };
    return user;
}
//Invoking func
// getUser();
// Example 2: Union Type in Function Parameters
function printStatus1(message, code) {
    console.log("".concat(message, ": ").concat(code));
}
printStatus1("Success", 200); // ✅ number
printStatus1("Error", "404"); // ✅ string
/*Lecture 12 Literal Types in Typescript*/
var str = "Hello World !";
//Literal Type Example
function roleMessage(role) {
    switch (role) {
        case "admin":
            console.log("You have admin permission on this site");
            break;
        case "read":
            console.log("You have Read Permission on This Site");
            break;
        case "read-write":
            console.log("You have read/write Permission on this site");
            break;
        default:
            console.log("Unknown User Permission");
    }
}
roleMessage("admin");
roleMessage("read");
var code = 404; // ✅
var isOn = true; // ✅
var str4 = "Hello Typescript"; //so here the str4 is of type string but we inferred it with a custom name type.
//Function Example
function printStatus(message, code) {
    if (typeof code === "string") {
        console.log("".concat(message, ",Status code:").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ",Status code:").concat(code));
    }
}
printStatus("Request was Successful", 200);
printStatus("Request was not found", 404);
