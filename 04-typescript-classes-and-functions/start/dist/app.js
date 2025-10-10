"use strict";
//Classes and Functions
// Object oriented programming is a programming paradigm(style of writing and organizing code) based on the concepts of objects.
/*
1:Objects can contain data which we call Properties and code which we call Methods.

// A class is a blueprint for creating Objects(instances)......Defines Data(properties)+behaviour(methods)

*/
// Lecture 37 :Creating A Class and Using A Class
var User = /** @class */ (function () {
    function User(fn, ln, a, g) {
        this.firstname = fn;
        this.lastname = ln;
        this.age = a;
        this.gender = g;
    }
    User.prototype.greetuser = function (salutation) {
        var msg = "Hello ".concat(salutation, " .  ").concat(this.firstname, " ").concat(this.lastname);
        console.log(msg);
    };
    return User;
}());
var user1 = new User("john", "smith", 28, "male");
var user2 = new User("merry", "jane", 32, "female");
var user3 = new User("mark", "vought", 29, "male");
// Invoking Greet User
user1.greetuser("Mrs");
// The Prototype Chain
/*1: user1 (the instance)
→ has its own properties: name, age, gender.
Prototype link:*/
Object.getPrototypeOf(user1) === User.prototype; // ✅ true
/*User.prototype (the prototype object of the class)
→ Contains methods shared by all User instances (like User.prototype.constructor).
Prototype link: */
Object.getPrototypeOf(User.prototype) === Object.prototype; // ✅ true
/*Object.prototype (the base of all objects)
→ Provides built-in methods like .toString(), .hasOwnProperty(), etc.
Prototype link: */
Object.getPrototypeOf(Object.prototype) === null; // ✅ true
/*→ Marks the end of the chain — no further prototype above this. */
/*
FULLL VISUAL CHAIN
user1
  ↓ [[Prototype]]
User.prototype
  ↓ [[Prototype]]
Object.prototype
  ↓ [[Prototype]]
null

 */
Object.getPrototypeOf(user1) === User.prototype; // ✅
Object.getPrototypeOf(User.prototype) === Object.prototype; // ✅
Object.getPrototypeOf(Object.prototype) === null; // ✅
