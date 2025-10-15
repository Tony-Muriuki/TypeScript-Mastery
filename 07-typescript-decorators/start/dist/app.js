"use strict";
/***********************************************
 * *****UNDERSTANDING DECORATORS****************
 ***********************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators are powerful syntactic feature in Typescript that allows you to add functionality or modify the behaviour of classes , methods and  properties at runtime.
// Decorators are essentially functions that are applied using the @ symbol before the declarationn you want to decorate
// Decorator function is simply a function that returns a decorator function
// It allows you to pass parameters or configuration options to your decorator,making them customizable and reusable.
// Syntax
// @decoratorName class MyClass {}
// They are called automatically at runtime, not manually.
// We would want to use a decorator factory when we want to pass some data outside the decorator function
function loggerDecorator(logMsg) {
    // This outer function is the *factory*
    function logger(target) {
        // This inner function is the *actual decorator*
        console.log("Logging....");
        console.log(logMsg);
        console.log(target);
    }
    return logger;
}
//Creating Another Decorator
function template(template, elementId) {
    return function (target) {
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
let User = class User {
    constructor() {
        this.name = "John";
        this.age = 28;
        console.log("User Class Constructor Called.....");
    }
};
User = __decorate([
    loggerDecorator("This is custom logger")
], User);
// const u = new User();
