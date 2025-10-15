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

@loggerDecorator("This is custom Logger...")
@template("<h2>Dynamic Header</h2>", "container")
class User {
  name: string = "John";
  age: number = 28;
  constructor() {
    console.log("User Class Constructor Called.....");
  }
}
// const u = new User();

/***********************************************
 * *****USING MULTIPLE DECORATORS**********************
 ***********************************************/
function ResultDecor() {
  console.log("Result Decorator Factory");
  return function (constructor: Function) {
    console.log("Rseult Decorator");
  };
}

function DecorFactory() {
  console.log("DecorFactory Decorator Factory");
  return function (constructor: Function) {
    console.log("DecorFactory Decorator");
  };
}
@ResultDecor()
@DecorFactory()
class Factory {
  constructor() {}
}
/*Factories run top → bottom.

Decorators run bottom → top.

Useful when combining multiple decorators for flexible, layered behavior.*/

/***********************************************
 * *****PROPERTY DECORATOR**********************
 ***********************************************/

function Capitalize(target: any, propertyKey: string): any {
  console.log("CAPITALIZE DECORATOR CALLED");
  console.log("PROPERTY KEY:", propertyKey);
  console.log("TARGET:", target);

  let value: string;

  const getter = () =>
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

  const setter = (newValue: string) => {
    value = newValue.toLowerCase();
  };

  return {
    get: getter,
    set: setter,
  };
  // Object.defineProperty(target, propertyKey, {
  //   get: getter,
  //   set: setter,
  // });
}

// Decorator Function
function AccessLogger(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("AccessLogger Decorator Called");
  // Getter Variable
  const getter = descriptor.get;
  // Setter Variable
  const setter = descriptor.set;

  descriptor.get = function () {
    console.log(`Accessing Value for Property ${name}....`);
    if (getter) {
      return getter.call(this);
    }
    return undefined;
  };
  descriptor.set = function (value: number) {
    console.log(`Setting Value for Property ${name}....`);
    if (setter) {
      return setter.call(this, value);
    }
  };
  return descriptor;
}

// Product Class
class Product {
  @Capitalize
  name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this._price = price;
  }
  // Get Price
  @AccessLogger
  get price() {
    return this._price;
  }
  // Set Price
  set Price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price should be a value greater Than 0");
    }
  }
}
const p = new Product("apple", 2400);
// p._price = 3000;
console.log(p.price);
