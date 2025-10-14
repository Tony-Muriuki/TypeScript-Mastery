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
