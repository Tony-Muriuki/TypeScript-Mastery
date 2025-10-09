"use strict";
//  Destructuring is a feature that was introduced in Es6(Ecmascript2015) that allows us to extract values/elements from arrays or properties from objects into distinct variables
// Array destructuring:Is a modern (Es6) feature that allows you to unpack elements from an array into individual variables in a concise and readable way.
/*Syntax For array destructuring Syntax const [arr1,arr2]= array */
const person = ["John", "Smith", 28]; //const person: (string | number)[]
const [fname, lmane, age1, gender1 = "male"] = person;
console.log(fname, age1, gender1);
console.log(person);
//Skipping Elements: You can skip by leaving blank spaces between commas
const numarr = [10, 9, 8, 7, 6, 5];
const [el1, , el3, el4, el5, el6] = numarr;
console.log(el3, "Should be 8");
//Nested Array Destructuring
const nested = [2, 4, [5, 6]];
const [num1, , multiarray] = nested;
const [num3, num4] = multiarray;
console.log(multiarray);
console.log(num1, num3, num4);
// Destructuring is a feature that was introduced in Es6(Ecmascript 2015)that allows you to extract values/elements from an array or properties from an object into distinct variables.
// Object Destructurring : Obj Syntax    const { prop1, prop2 } = object;<---Use Curlybraces
//Object destructuring is a feature in Es6 that allows you to extract properties from an object andassign them to variables using a concise and readable syntax.
const user = {
    forename: "John",
    age: 28,
    gender: "male",
    city: "london",
};
// When Destructuring Objects The variable name must match the property name but you can rename it too
const { forename, age, gender, city } = user;
console.log(forename, age, gender, city);
//Variable Renaming
const response = {
    message: "Resource Not Found",
    code: 404,
};
//Destructure--But  Rename Variables
const { message: msg, code: state } = response;
console.log("Renamed Variables", msg, state);
// The Spread Operator
// The spread operator is a convinient and powerful syntax used to expand iterables(like arrays,strings,maps and sets)into individual elements.
// Its mostly used for copying merging or expanding elements of arrays or objects
const users = ["John", "Mark", "Mary"];
console.log(users);
//Expanding Elements of Users Array Into Individual Values
console.log(...users);
const voters = ["Beatrice", "Tony", ...users];
console.log(voters);
//Copying Arrays(Shallow Copy)
const usersCopy = [...users];
console.log("Users Copy", usersCopy);
//Spread used in Merging
const mergedArr = [...users, ...voters, ...usersCopy];
console.log("Merged Array", mergedArr);
//Spreading Strings
const girlFriend = "Beatrice";
const letters = [...girlFriend];
console.log(letters);
//Spread in Objects ----Copyng Objects
const usersObjCopy = Object.assign({}, user);
console.log(usersObjCopy);
//Rest Pattern and Rest Parameter
// The rest pattern uses the exact same syntax as the spread operator (...) but to collect values to an array or object
// So the rest pattern uses the exact same syntax but to collect multiple elements and condense them into an array
// Array Destructuring with Rest.
const candidates = ["Annice", "Beverly", "Brian", "Ryan"];
const [grad1, grad2, ...failures] = candidates;
console.log(failures);
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);
// Difference is that Rest pattern is on the left side of the assignment operator and collects values and condense them into an array while the Spread operator is used on the right hand side of the assignment operator and is used to expand iterables into individual elements.
// Rest Parameters syntax allow you to represent an indefinate numbers of function arguements as an array.This is useful when you dont know how many  arguements will be passed to the function.
// Syntax
// function restParam(...restParameter){}restParam(1,2,3)
// Example of Rest Parameter
function addNumbers(...numbers) {
    //Rest parameter should be of type Array always
    return numbers.reduce((sum, current) => sum + current, 0);
}
console.log(addNumbers(1, 2), "Sum 1");
console.log(addNumbers(1, 2, 5, 7), "Sum 2");
console.log(addNumbers(1, 2, 5, 6, 7, 9), "Sum 3");
//  THE NULLISH COALESCING OPERATOR
// The Nullish coalescing operator ?? is a logical operator introduced in Es2020 that returns the right hand operand when the left hand operand is null or undefined
const guest = 0 || 10;
console.log(guest);
const value = null;
let storage = value !== null && value !== void 0 ? value : "DEFAULT";
console.log(storage);
// so nullish values are null or undefined.Only nullish values short circuit evaluation when using the nullish coalescing operator(??)
