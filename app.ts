// string
let who: string = 'David';
console.log(`Prints a string: ${who}`);

// number
let age: number = 47;
console.log(`Prints a number: ${age}`);

// boolean
let hasAchesAndPains: boolean = true;
console.log(`Prints a boolean: ${hasAchesAndPains}`);

// array
let aches: string[] = ['sore legs', 'nerve impingement'];
console.log(`Prints an array: ${aches}`);

// tuple
let achesAndPains: [string, number] = ['sore legs', 2];
console.log(`Prints a tuple: ${achesAndPains}`);

// enum
enum Color {
    Gray, // 0
    Green, // 1
    Blue = 100, // 100
    Purple, // 101
    Red = 2, // 2
    Yellow // 3
};

let myColor: Color = Color.Blue;
console.log(`Prints the enum for my color: ${myColor}`);

// any
let car: any = 'Honda';
console.log(`Prints the string: ${car}`);
car = {brand: 'BMW', model: 3};
console.log(`Now it prints an object:`);
console.log(car);

// function returns string
function test(): string {
    return 'This function returns this string';
}
console.log(test());

// function without return
function logWho(): void {
    console.log(`This function has no return value: ${who}`);
}
logWho();

// set argument types
function multiplyValues(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(`This function returns a number: ${multiplyValues(2,5)}`);

// Designate a function type
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiplyValues;
console.log(`This function returns a number: ${myMultiply(5, 6)}`);

// objects: properties and types must match
let userData: { name: string, age: number } = {
    name: 'David',
    age: 47
};
console.log(`Print the object:`);
console.log(userData);

// a complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: (all: boolean): number[] => {
        if(!all) {
            this.data - 2;
        }
        return this.data;
    }
}

// Custom types
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: (all: boolean): number[] => {
        if (all) {
            this.data + 5;
        }
        return this.data;
    }
}

// Type Unions
let myAge: string | number = 27;
console.log(`My age can be a number: ${myAge}`);
myAge = "27";
console.log(`or my age can be a string: ${myAge}`);

// Check type of variable
let myNumber: number = 59;
if (typeof myNumber == "number") {
    console.log('myNumber is a number');
} else {
    console.log('myNumber is not a number');
}

// never type
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable types
// Set compiler option strictNullChecks: true
let cannotBeNull = 12;
let canBeNull: number | null = 34;
canBeNull = null;
console.log(canBeNull);
