class Person {

    // accessed anywhere
    public name: string;
    // only availble in the class
    private type: string;
    // available to extended classes
    protected age: number = 50;

    // the username property will be added automatically
    // as a public property of the class and set to the
    // value passed into the constructor
    // the same as writing: this.username = username and
    // declaring the property with public username: string
    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        // access the protected property
        // must use 'this'
        console.log(this.age);
        this.setType('Workaholic');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

class David extends Person {
    constructor(username: string) {
        super('David', username);
        // access to protected property
        this.age = 47;
    }
}

// Create a Person object using the class
const person = new Person('David', 'daconner');
console.log(person);
person.printAge();
// person.setType('Cool Dude');


// Create a new extended Person
const david = new David('daconner');
console.log(david);

// Getters and Setters
class Plant {
    private _species: string = 'Default';

    get species () {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);


// Static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

// Can use static props without instantiating the class
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract classes
// This class must be extended
abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;

    // This method must be included
    abstract changeName(name: string): void;

    // Will be availble in the child class
    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {

    // Must add abstract methods
    changeName(name: string): void {
        this.projectName = name;
        console.log(this.projectName);
    }
}

let myProject = new ITProject();
console.log(myProject);
myProject.changeName('Learn Typescript');
console.log(myProject);

// Use private constructors to implement a singleton class
class OnlyOne {
    private static instance: OnlyOne;

    // shorthand for providing a getter only - cannot change it outside
    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

//let  wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else';