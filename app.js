"use strict";
// Simple function to illustrate a generic
function echo(data) {
    return data;
}
// Use the function with various types
console.log(echo("David"));
console.log(echo(45));
console.log(echo({ name: "David", age: 47 }));
// What is the problem? No compilation checks, no IDE suggestions
console.log(echo("David").length); // works, but no ide help
console.log(echo(45).length); // does not work, but no errors
console.log(echo({ name: "David", age: 47 }));
// Typescript Generics
function betterEcho(data) {
    return data;
}
// Try again
console.log(betterEcho("David").length); // adds ide help
//console.log(betterEcho<number>(45).length); // reports error in ide and compile message
console.log(betterEcho({ name: "David", age: 47 }));
// Built-in Generics
var testResults = [1.94, 4, 6.78];
testResults.push(2.65);
// testResults.push('David'); // error
console.log(testResults);
// Arrays 
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("Goodbye Cruel World!"));
// Generic Classes - remember T represents the same type, not a mix
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // cast to number
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath(); // instance accepts strings
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());
// Mixing Types - next letter in alphabet
var SimplerMath = (function () {
    function SimplerMath() {
    }
    SimplerMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // cast to number
    };
    return SimplerMath;
}());
var simplerMath = new SimplerMath();
simplerMath.baseValue = "10";
simplerMath.multiplyValue = 20;
console.log(simplerMath.calculate());
//Let's keep it simple and only add the following methods to the Map:
var MyMap = (function () {
    function MyMap() {
        this.coords = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.coords[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.coords[key];
    };
    MyMap.prototype.clear = function () {
        this.coords = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.coords) {
            console.log(key, this.coords[key]);
        }
    };
    return MyMap;
}());
//The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
