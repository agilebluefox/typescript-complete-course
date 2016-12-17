"use strict";
// Function to greet a person
function greet(person) {
    console.log("Hello, " + person.name + "!");
}
// object to pass to greet function
var person = {
    name: 'David',
    age: 50
};
// Does not match the interface required
var me = {
    firstName: 'David',
    age: 34
};
// Call greet
// Object person must have a name property or name will be undefined
greet(person);
// Error
// greet(me); 
