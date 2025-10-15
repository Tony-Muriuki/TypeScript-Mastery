/***********************************************
 * *****UNDERSTANDING DECORATORS****************
 ***********************************************/

// Decorators are powerful syntactic feature in Typescript that allows you to add functionality or modify the behaviour of classes , methods and  properties at runtime.

// Decorators are essentially functions that are applied using the @ symbol before the declarationn you want to decorate

// Decorator function is simply a function that returns a decorator function
// It allows you to pass parameters or configuration options to your decorator,making them customizable and reusable.

// Syntax
// @decoratorName class MyClass {}
// They are called automatically at runtime, not manually.

// We would want to use a decorator factory when we want to pass some data outside the decorator function
function loggerDecorator(logMsg: string) {
  // This outer function is the *factory*
  function logger(target: Function) {
    // This inner function is the *actual decorator*
    console.log("Logging....");
    console.log(logMsg);
    console.log(target);
  }
  return logger;
}

@loggerDecorator("This is custom logger")
class User {
  name: string = "John";
  age: number = 28;
  constructor() {
    console.log("User Class Constructor Called.....");
  }
}
// const u = new User();
