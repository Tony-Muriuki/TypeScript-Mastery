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

//Creating Another Decorator
function template(template: string, elementId: string) {
  return function (target: any) {
    // The target is doing a reference to the user class
    const u = new target();
    // Acces the element
    const container = document.getElementById(elementId);
    if (container) {
      container.innerHTML = template;
      const h2 = container.querySelector("h2");
      if (h2) {
        h2.textContent = "Hello Mr. " + u.name;
      }
    }
  };
}

/*How It Works

The decorator factory (Template) takes parameters:

template → HTML content to render.

elementId → ID of the DOM element to target.

It returns a decorator function, which:

Gets a reference to the target class (User).

Creates an instance of that class.

Locates the target DOM element by ID.

Inserts the given HTML template.

Updates any inner elements (like <h2>) dynamically using data from the class instance*/
@loggerDecorator("This is custom logger")
class User {
  name: string = "John";
  age: number = 28;
  constructor() {
    console.log("User Class Constructor Called.....");
  }
}
// const u = new User();
