//  Destructuring is a feature that was introduced in Es6(Ecmascript2015) that allows us to extract values/elements from arrays or properties from objects into distinct variables

// Array destructuring:Is a modern (Es6) feature that allows you to unpack elements from an array into individual variables in a concise and readable way.

/*Syntax For array destructuring Syntax const [arr1,arr2]= array */

const person: (string | number)[] = ["John", "Smith", 28]; //const person: (string | number)[]

const [fname, lmane, age1, gender1 = "male"] = person;
console.log(fname, age1, gender1);
console.log(person);

//Skipping Elements: You can skip by leaving blank spaces between commas
const numarr: number[] = [10, 9, 8, 7, 6, 5];

const [el1, , el3, el4, el5, el6] = numarr;
console.log(el3, "Should be 8");

//Nested Array Destructuring
const nested = [2, 4, [5, 6]];

const [num1, , multiarray] = nested;
const [num3, num4] = multiarray as number[];
console.log(multiarray);
console.log(num1, num3, num4);
// Destructuring is a feature that was introduced in Es6(Ecmascript 2015)that allows you to extract values/elements from an array or properties from an object into distinct variables.

// Object Destructurring : Obj Syntax    const { prop1, prop2 } = object;<---Use Curlybraces

//Object destructuring is a feature in Es6 that allows you to extract properties from an object andassign them to variables using a concise and readable syntax.

const user: {
  forename: string;
  age: number;
  gender: string;
  city: string;
} = {
  forename: "John",
  age: 28,
  gender: "male",
  city: "london",
};

// When Destructuring Objects The variable name must match the property name but you can rename it too
const { forename, age, gender, city } = user;
console.log(forename, age, gender, city);

//Variable Renaming
const response: { message: string; code: number } = {
  message: "Resource Not Found",
  code: 404,
};
//Destructure--But  Rename Variables
const { message: msg, code: state } = response;
console.log("Renamed Variables", msg, state);

// The Spread Operator
