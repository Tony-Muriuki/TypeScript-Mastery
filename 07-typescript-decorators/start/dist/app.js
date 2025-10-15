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
