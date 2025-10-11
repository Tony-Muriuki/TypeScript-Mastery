"use strict";
//Classes and Functions
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/*__proto__ is a built-in JavaScript property on all objects.

But TypeScript’s type definitions for class instances (like User) don’t explicitly include __proto__, since it’s considered non-standard and deprecated in favor of Object.getPrototypeOf().

So TypeScript blocks direct access unless you explicitly bypass type checking.*/
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
/*Lecture 39 ACCESS Modifiers */
var Employee1 = /** @class */ (function () {
    function Employee1(name, sal, loc, isEligible, hikePercent) {
        this.empName = name;
        this.salary = sal;
        this.baseLocation = loc;
        this.isEligible = isEligible;
        this.hikePercent = hikePercent;
    }
    Employee1.prototype.getSalary = function () {
        if (this.isEligible) {
            return this.getNewsalary();
        }
        return this.salary;
    };
    Employee1.prototype.getNewsalary = function () {
        return this.salary + (this.salary * this.hikePercent) / 100;
    };
    return Employee1;
}());
//Creating an Instance
var employee = new Employee1("John Smith", 10000, "London", true, 20);
console.log(employee);
//Resetting The Salary
// employee.salary = 20000;
console.log(employee);
//We have 2 Access Modifiers : Public and Private
// 1: The public access modifier makes a property and a method accessible to everyone.
// 2: The private access modifier makes the property or method accesible only within the class: So when we make a property private it becomes accesible only within the class where it was defined
console.log(Object.getPrototypeOf(employee) === Employee1.prototype);
/************************UNDERSTANDING INHERITANCE************************ */
//Person Class
var Person1 = /** @class */ (function () {
    function Person1(name, dob, gender) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
    }
    //Age Method
    Person1.prototype.calculateAge = function () {
        return new Date().getFullYear() - new Date(this.dob).getFullYear();
    };
    return Person1;
}());
// Employee class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(n, dob, gen, salary, bonus) {
        var _this = _super.call(this, n, dob, gen) || this;
        _this.salary = salary;
        _this.bonus = bonus;
        return _this;
    }
    //Method Get Salary
    Employee.prototype.getSalary = function () {
        return this.salary + this.bonus;
    };
    //Method Overriding From The Parent Class
    Employee.prototype.calculateAge = function () {
        console.log("Calculate Age of Employee called");
        return 2024 - new Date(this.dob).getFullYear();
    };
    return Employee;
}(Person1));
var emp = new Employee("john", "08-30-1991", "male", 10000, 2000);
console.log(emp.calculateAge());
/***************************************************
 * *********LECTURE 44: GETTER & SETTER*************
 ***************************************************/
var Person = /** @class */ (function () {
    function Person(name) {
        this._age = null;
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "age", {
        //Getter Func:To create a getter we use the get keyword
        get: function () {
            if (this._age != null) {
                return this._age;
            }
            throw new Error("Age is not defined for the person ".concat(this.name));
        },
        // To create a setter we use the Set Keyword
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
            else {
                throw new Error("Age cannot be a negative value");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
//Instance
var person = new Person("John");
// Before Setter
// console.log(person.age, "Getter");
// After Setter
person.age = 90;
console.log(person.age, "Getter");
// Computed Properties
var Circle = /** @class */ (function () {
    function Circle(_radius) {
        this._radius = _radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        //Getter Method
        get: function () {
            return this._radius;
        },
        // Setter Method
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "diameter", {
        // Get Diameter
        get: function () {
            return this._radius * 2;
        },
        //Set Diameter
        set: function (val) {
            this._radius = val / 2;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
/***************************************************
 * ****LECTURE 45: STATIC METHODS & PROPERTIES******
 ***************************************************/
//Instance properties are properties which we can access in the instance of a class but static properties are those properties which we can access on the class itself..--->Same is true for methods
var Employee3 = /** @class */ (function () {
    function Employee3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee3.count++;
    }
    //Methods
    Employee3.sayHello = function () {
        return "Hi There";
    };
    Employee3.count = 0;
    return Employee3;
}());
var emp1 = new Employee3("John", "Smith");
console.log(Employee3.count);
var emp2 = new Employee3("John", "Smith");
console.log(Employee3.count);
var emp3 = new Employee3("John", "Smith");
console.log(Employee3.count);
console.log(Employee3.sayHello());
// ABSTRACT CLASSES
//You cannot create an instance of an abstract class
// To create an abstract method you  need to define the class as an abstract
var Employee4 = /** @class */ (function () {
    function Employee4(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    return Employee4;
}());
var PermanentEmp = /** @class */ (function (_super) {
    __extends(PermanentEmp, _super);
    function PermanentEmp(fn, ln, salary) {
        var _this = _super.call(this, fn, ln) || this;
        _this.monthlySalary = salary;
        return _this;
    }
    PermanentEmp.prototype.getSalary = function () {
        return this.monthlySalary * 12;
    };
    return PermanentEmp;
}(Employee4));
var permem1 = new PermanentEmp("John", "Smith", 1000);
console.log(permem1.getSalary());
var ContractEmployee = /** @class */ (function (_super) {
    __extends(ContractEmployee, _super);
    function ContractEmployee(fn, ln, salary) {
        var _this = _super.call(this, fn, ln) || this;
        _this.hourlySalary = salary;
        return _this;
    }
    ContractEmployee.prototype.getSalary = function () {
        return this.hourlySalary * 9 * 365;
    };
    return ContractEmployee;
}(Employee4));
var contractemp1 = new ContractEmployee("John", "Doe", 10);
console.log(contractemp1.getSalary());
// Using Abstract we can define an abstract class which can contain some properties which will be common for all its child classes
// An abstract class cannot be instantiated directly
