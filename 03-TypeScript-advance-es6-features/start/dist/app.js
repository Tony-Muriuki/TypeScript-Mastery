"use strict";
//  Destructuring is a feature that was introduced in Es6(Ecmascript2015) that allows us to extract values/elements from arrays or properties from objects into distinct variables
// Array destructuring:Is a modern (Es6) feature that allows you to unpack elements from an array into individual variables in a concise and readable way.
const person = ["John", "Smith", 28]; //const person: (string | number)[]
const [fname, lmane, age, gender = "male"] = person;
console.log(fname, age, gender);
console.log(person);
