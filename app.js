"use strict";
var _this = this;
// string
var who = 'David';
console.log("Prints a string: " + who);
// number
var age = 47;
console.log("Prints a number: " + age);
// boolean
var hasAchesAndPains = true;
console.log("Prints a boolean: " + hasAchesAndPains);
// array
var aches = ['sore legs', 'nerve impingement'];
console.log("Prints an array: " + aches);
// tuple
var achesAndPains = ['sore legs', 2];
console.log("Prints a tuple: " + achesAndPains);
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Purple"] = 101] = "Purple";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Yellow"] = 3] = "Yellow"; // 3
})(Color || (Color = {}));
;
var myColor = Color.Blue;
console.log("Prints the enum for my color: " + myColor);
// any
var car = 'Honda';
console.log("Prints the string: " + car);
car = { brand: 'BMW', model: 3 };
console.log("Now it prints an object:");
console.log(car);
// function returns string
function test() {
    return 'This function returns this string';
}
console.log(test());
// function without return
function logWho() {
    console.log("This function has no return value: " + who);
}
logWho();
// set argument types
function multiplyValues(value1, value2) {
    return value1 * value2;
}
console.log("This function returns a number: " + multiplyValues(2, 5));
// Designate a function type
var myMultiply;
myMultiply = multiplyValues;
console.log("This function returns a number: " + myMultiply(5, 6));
// objects: properties and types must match
var userData = {
    name: 'David',
    age: 47
};
console.log("Print the object:");
console.log(userData);
// a complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (!all) {
            _this.data - 2;
        }
        return _this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all) {
            _this.data + 5;
        }
        return _this.data;
    }
};
// Type Unions
var myAge = 27;
console.log("My age can be a number: " + myAge);
myAge = "27";
console.log("or my age can be a string: " + myAge);
// Check type of variable
var myNumber = 59;
if (typeof myNumber == "number") {
    console.log('myNumber is a number');
}
else {
    console.log('myNumber is not a number');
}
// never type
function neverReturns() {
    throw new Error('An error!');
}
// Nullable types
// Set compiler option strictNullChecks: true
var cannotBeNull = 12;
var canBeNull = 34;
canBeNull = null;
console.log(canBeNull);
