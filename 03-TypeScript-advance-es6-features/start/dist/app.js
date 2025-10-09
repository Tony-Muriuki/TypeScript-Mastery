"use strict";
// Array Destructuring
const person = ["John", "Smith", 28];
const [fname, lmane, age, gender = "male"] = person;
console.log(fname, age, gender);
console.log(person);
