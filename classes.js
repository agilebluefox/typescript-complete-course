"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    // the username property will be added automatically
    // as a public property of the class and set to the
    // value passed into the constructor
    // the same as writing: this.username = username and
    // declaring the property with public username: string
    function Person(name, username) {
        this.username = username;
        // available to extended classes
        this.age = 50;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        // access the protected property
        // must use 'this'
        console.log(this.age);
        this.setType('Workaholic');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var David = (function (_super) {
    __extends(David, _super);
    function David(username) {
        var _this = _super.call(this, 'David', username) || this;
        // access to protected property
        _this.age = 47;
        return _this;
    }
    return David;
}(Person));
// Create a Person object using the class
var person = new Person('David', 'daconner');
console.log(person);
person.printAge();
// person.setType('Cool Dude');
// Create a new extended Person
var david = new David('daconner');
console.log(david);
// Getters and Setters
var Plant = (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// Static properties and methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    return Helpers;
}());
Helpers.PI = 3.14;
// Can use static props without instantiating the class
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract classes
// This class must be extended
var Project = (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    // Will be availble in the child class
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super.apply(this, arguments) || this;
    }
    // Must add abstract methods
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
        console.log(this.projectName);
    };
    return ITProject;
}(Project));
var myProject = new ITProject();
console.log(myProject);
myProject.changeName('Learn Typescript');
console.log(myProject);
// Use private constructors to implement a singleton class
var OnlyOne = (function () {
    // shorthand for providing a getter only - cannot change it outside
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let  wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; 
