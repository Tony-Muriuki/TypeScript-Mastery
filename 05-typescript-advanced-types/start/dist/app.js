"use strict";
/***********************************************
 * *****INTERSECTION TYPE IN TYPESCRIPT*********
 ***********************************************/
/*
// Creating a type using type
type stringOrNumber = string | number;
type boolOrNumber = boolean | number;

type myNumberType = stringOrNumber & boolOrNumber;

// let x: stringOrNumber = "Hello";

let x: myNumberType = 20;*/
let john = {
    name: "John",
    age: 28,
    role: "Admin",
};
// Understanding use case for the Intersection Type
function processOrder(order) {
    console.log(order.id, order.items, order.status);
}
processOrder({ id: 123, items: ["item1", "item2"], status: "shipped" });
// Addition Function typeof typeguard
function addition(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
//Invoking Function
addition("Hello", "World");
addition(20, 30);
addition("Hello", 30);
// TypeGuard With Complex Types
class Animal {
    makeSound() {
        console.log("Generic Animal Sound");
    }
}
// Dog Class
class Dog extends Animal {
    bark() {
        console.log("Woof!Woof!");
    }
}
// Function instanceof typeguard
function makeCreatureSound(creature) {
    if (creature instanceof Dog) {
        creature.bark();
    }
    else {
        creature.makeSound();
    }
}
//Class Instances
let animal = new Animal();
let dog = new Dog();
// Invoking Function
makeCreatureSound(animal); //Here we can pass an instance of animal class or Dog Class
makeCreatureSound(dog);
// greetUser Func
function greetUser(user) {
    if ("email" in user) {
        //If email property exists in user console.log(`Hello ${user.name} your email is ${user.email}`)
        console.log(`Hello ${user.name} your email is ${user.email}`);
    } //Print only userName
    else
        console.log(`Hello ${user.name}}`);
}
greetUser({ name: "John" });
greetUser({ name: "Mark", email: "mark@gmail.com" });
// Function
function calcArea(shape) {
    switch (shape.kind) {
        case "circle":
            return 3.14 * shape.radius * shape.radius;
        case "square":
            return shape.length * shape.length;
    }
}
// Invoke
console.log(calcArea({ kind: "square", length: 12 }));
console.log(calcArea({ kind: "circle", radius: 12 }));
/***********************************************
 * *****TYPE CASTING IN TYPESCRIPT**************
 ***********************************************/
