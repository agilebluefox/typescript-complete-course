"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorator - function that can be added to a class
// arguments depend on where you want to attach the decorator
// To attach a decorator to a class, you pass the constructor parameter
function logged(constructorFn) {
    console.log(constructorFn);
}
// Use the @ symbol to attach the decorator to the class
var Person = (function () {
    function Person() {
        console.log('Hi there');
    }
    return Person;
}());
Person = __decorate([
    logged
], Person);
// Factory
function logging(value) {
    return value ? logged : null;
}
// The logging function returns either the logged decorator or nothing
// Important because only the logged decorator can be attached to a class
// since it has the constructor parameter
var Car = (function () {
    function Car() {
    }
    return Car;
}());
Car = __decorate([
    logging(true)
], Car);
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// Can use multiple decorators
var Plant = (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    return Plant;
}());
Plant = __decorate([
    logging(true),
    printable
], Plant);
var plant = new Plant();
// cast to type any due to current bug in typescript
plant.print();
// Method decorator
// Property decorator
// Decide whether or not a method can be overwritten
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// Choose whether a property can be overwritten
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = (function () {
    function Project(name) {
        // If overwritable is false, this causes a runtime error
        this.projectName = name;
    }
    // If false, any future attempt to override this method will cause
    // runtime errors
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    return Project;
}());
__decorate([
    overwritable(true)
], Project.prototype, "projectName", void 0);
__decorate([
    editable(false)
], Project.prototype, "calcBudget", null);
var project = new Project('super project');
project.calcBudget();
// Causes a runtime error if editable is set to false
// project.calcBudget = function() {
//     console.log(2000);
// };
project.calcBudget();
console.log(project.projectName);
// Parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("methodName", methodName);
    console.log("paramIndex", paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    // Use the printInfo decorator on the printAll parameter
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(444);
        }
        else {
            console.log(888);
        }
    };
    return Course;
}());
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
var course = new Course('Super Course');
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
