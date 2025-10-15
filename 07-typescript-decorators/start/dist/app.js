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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    loggerDecorator("This is custom Logger..."),
    template("<h2>Dynamic Header</h2>", "container")
], User);
// const u = new User();
/***********************************************
 * *****USING MULTIPLE DECORATORS**********************
 ***********************************************/
function ResultDecor() {
    console.log("Result Decorator Factory");
    return function (constructor) {
        console.log("Rseult Decorator");
    };
}
function DecorFactory() {
    console.log("DecorFactory Decorator Factory");
    return function (constructor) {
        console.log("DecorFactory Decorator");
    };
}
let Factory = class Factory {
    constructor() { }
};
Factory = __decorate([
    ResultDecor(),
    DecorFactory()
], Factory);
/*Factories run top → bottom.

Decorators run bottom → top.

Useful when combining multiple decorators for flexible, layered behavior.*/
/***********************************************
 * *****PROPERTY DECORATOR**********************
 ***********************************************/
function Capitalize(target, propertyKey) {
    console.log("CAPITALIZE DECORATOR CALLED");
    console.log("PROPERTY KEY:", propertyKey);
    console.log("TARGET:", target);
    let value;
    const getter = () => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    const setter = (newValue) => {
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
function AccessLogger(target, name, descriptor) {
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
    descriptor.set = function (value) {
        console.log(`Setting Value for Property ${name}....`);
        if (setter) {
            return setter.call(this, value);
        }
    };
    return descriptor;
}
// Product Class
class Product {
    constructor(name, price) {
        this.name = name;
        this._price = price;
    }
    // Get Price
    get price() {
        return this._price;
    }
    // Set Price
    set Price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Price should be a value greater Than 0");
        }
    }
}
__decorate([
    Capitalize
], Product.prototype, "name", void 0);
__decorate([
    AccessLogger
], Product.prototype, "price", null);
const p2 = new Product("apple", 2400);
// p._price = 3000;
console.log(p2.price);
/***********************************************
 * *****METHOD AND PARAMETER DECORATORS*********
 ***********************************************/
// Whenever we create a decorator to use on a parameter it expects 3 arguements target(prototype object or constructor function) ,parameter name on which we have used the decorator, index of the parameter . In the claculate age method the parameter dob is at index 0 of the method
// @Param Decorator
function param(target, paramName, index) {
    console.log("PARAM DECORATOR CALLED");
    console.log("TARGET:", target);
    console.log("PARAMETER NAME:", paramName);
    console.log("INDEX PARAMETER:", index);
}
// @Logger Decorater
// When we create a decorator to use on a class method its going to receive 3 arguements first is the target which is the class prototype or constructor function,methodName: The method on which weve used the decorator thirdly is the descriptor which will be of type property Descriptor
// Incase of static method the target will point to the function constructor basically the class inside which we have defined the method but if the method is of instance target will point to the function prototype
function Logger(target, methodName, descriptor) {
    console.log("Method Decorator Called!");
    console.log("Target:", target);
    console.log("Method name:", methodName);
    console.log("Descriptor:", descriptor);
}
class Person {
    constructor(n) {
        this.name = n;
    }
    // Method Calculate age
    calculateAge(dob) { }
}
__decorate([
    Logger,
    __param(0, param)
], Person.prototype, "calculateAge", null);
// Instantiate
const p = new Person("John");
p.calculateAge("06-15-1998");
/***********************************************
 * *****WHEN A DECORATOR EXECUTES***************
 ***********************************************/
/*
Execution Order:

Parameter decorators → left to right: @G, then @H

Method decorators → top to bottom: @E, then @F

Property decorators → top to bottom: @C, then @D

Class decorators → bottom to top: @B, then @A*/
function CLS_DECORATOR(target) {
    console.log("CLASS DECORATOR CALLED!");
}
function PROP_DECORATOR(target, propertyKey) {
    console.log("PROPERTY DECORATOR CALLED!");
}
function ACC_DECORATOR(target, name, descriptor) {
    console.log("ACCESSOR DECORATOR CALLED");
}
function PARAM_DECORATOR(target, paramName, index) {
    console.log("PARAMETER DECORATOR CALLED");
}
function METH_DECORATOR(target, methodName, descriptor) {
    console.log("METHOD DECORATOR CALLED!");
}
let Personn = class Personn {
    constructor(n) {
        this.name = n;
    }
    calculateAge(dob) {
        //calculate date of birth;
    }
};
__decorate([
    PROP_DECORATOR //property decorator
], Personn.prototype, "name", void 0);
__decorate([
    METH_DECORATOR //method decorator
    ,
    __param(0, PARAM_DECORATOR)
], Personn.prototype, "calculateAge", null);
Personn = __decorate([
    CLS_DECORATOR //class Decorator
], Personn);
/***********************************************
 * *****RETURNING A CLASS FROM A DECORATOR *****
 ***********************************************/
function Logerr(target) {
    console.log(target);
}
let Personnn = class Personnn {
    constructor(n) {
        this.name = n;
    }
};
Personnn = __decorate([
    Logerr
], Personnn);
