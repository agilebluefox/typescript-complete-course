// name is a required property
// age is an optional property
// any additional properties are accepted
interface PersonInterface {
    name: string,
    age?: number,
    // add any additional props without errors
    [unknownProp: string]: any
}

// Function to greet a person
function greet(person: PersonInterface) {
    console.log(`Hello, ${person.name}!`);
}

// object to pass to greet function
const person = {
    name: 'David',
    age: 50,
    hobbies: ['Tennis', 'Orienteering']
};

// Does not match the interface required
const me = {
    firstName: 'David',
    age: 34
};

// Call greet
// Object person must have a name property or name will be undefined
greet(person);

// Using an object literal results in stricter checking
// Make age an optional parameter in the interface to fix errors
greet({name: 'Michael', age: 33, hobbies: ['Sleeping', 'Video Games']});

// Error - does not fulfill the contract created by the interface
// greet(me);