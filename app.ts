// name is a required property
// age is an optional property
// any additional properties are accepted
interface PersonInterface {
    name: string,
    age?: number,
    [unknownProp: string]: any, // account for unknown properties
    greet(lastName: string): void // works with methods too
}

// Function to greet a person
function greet(person: PersonInterface) {
    console.log(`Hello, ${person.name}!`);
}

// object to pass to greet function
const person = {
    name: 'David',
    age: 50,
    hobbies: ['Tennis', 'Orienteering'],
    greet(lastName: string) {
        console.log(`Hey ${lastName}!`);
    }
};

// Does not match the interface required
const me = {
    firstName: 'David',
    age: 34
};

// Call greet
// Object person must have a name property or name will be undefined
greet(person);
person.greet('Conner');

// Using an object literal results in stricter checking
// Make age an optional parameter in the interface to fix errors
greet({name: 'Michael', age: 33, hobbies: ['Sleeping', 'Video Games'], greet(name: string) { console.log(name); }});

// Error - does not fulfill the contract created by the interface
// greet(me);

// The class must include all the requirements of the interface
class NewPerson implements PersonInterface {
    name: string;
    lastName: string;
    greet(lastName: string): void {
        console.log(`Hey ${lastName}!`);
    }
}

const np = new NewPerson();
np.name = 'Johnny';
np.lastName = 'Dangerous';
greet(np);
np.greet(np.lastName);

// Function interface
interface DoubleValue {
    (number1: number, number2: number): number;
}

// Define function using interface
let doubleIt: DoubleValue;
doubleIt = function(val1: number, val2: number) {
    return (val1 + val2) * 2;
}

console.log(doubleIt(9,3));

// Interfaces can extend other Interfaces
interface AgedPersonInterface extends PersonInterface {
    age: number
}

const oldMan: AgedPersonInterface = {
    name: 'Grandpa',
    age: 1000,
    greet(name: string) {
        console.log(`Whassup ${name}?`);
    }
}

console.log(oldMan);
oldMan.greet(oldMan.name);