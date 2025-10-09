"use strict";
//  Destructuring is a feature that was introduced in Es6(Ecmascript2015) that allows us to extract values/elements from arrays or properties from objects into distinct variables
// Array destructuring:Is a modern (Es6) feature that allows you to unpack elements from an array into individual variables in a concise and readable way.
/*Syntax For array destructuring Syntax const [arr1,arr2]= array */
const person = ["John", "Smith", 28]; //const person: (string | number)[]
const [fname, lmane, age, gender = "male"] = person;
console.log(fname, age, gender);
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
//
