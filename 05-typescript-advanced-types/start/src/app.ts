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

// User Type
interface user {
  name: string;
  age: number;
}
// Admin Type
interface admin {
  name: string;
  role: string;
}

type adminUser = user & admin;

let john: adminUser = {
  name: "John",
  age: 28,
  role: "Admin",
};

// Understanding use case for the Intersection Type
function processOrder(order: Order & { status: string }) {
  console.log(order.id, order.items, order.status);
}

interface Order {
  id: number;
  items: string[];
}

processOrder({ id: 123, items: ["item1", "item2"], status: "shipped" });
