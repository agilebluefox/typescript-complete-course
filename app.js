"use strict";
// Function to greet a person
function greet(person) {
    console.log("Hello, " + person.name + "!");
}
// object to pass to greet function
var person = {
    name: 'David',
    age: 50,
    hobbies: ['Tennis', 'Orienteering'],
    greet: function (lastName) {
        console.log("Hey " + lastName + "!");
    }
};
// Does not match the interface required
var me = {
    firstName: 'David',
    age: 34
};
// Call greet
// Object person must have a name property or name will be undefined
greet(person);
person.greet('Conner');
// Using an object literal results in stricter checking
// Make age an optional parameter in the interface to fix errors
greet({ name: 'Michael', age: 33, hobbies: ['Sleeping', 'Video Games'], greet: function (name) { console.log(name); } });
// Error - does not fulfill the contract created by the interface
// greet(me);
// The class must include all the requirements of the interface
var NewPerson = (function () {
    function NewPerson() {
    }
    NewPerson.prototype.greet = function (lastName) {
        console.log("Hey " + lastName + "!");
    };
    return NewPerson;
}());
var np = new NewPerson();
np.name = 'Johnny';
np.lastName = 'Dangerous';
greet(np);
np.greet(np.lastName);
// Define function using interface
var doubleIt;
doubleIt = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(doubleIt(9, 3));
var oldMan = {
    name: 'Grandpa',
    age: 1000,
    greet: function (name) {
        console.log("Whassup " + name + "?");
    }
};
console.log(oldMan);
oldMan.greet(oldMan.name);
