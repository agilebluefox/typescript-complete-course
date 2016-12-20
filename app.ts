// Simple function to illustrate a generic
function echo(data: any) {
    return data;
}

// Use the function with various types
console.log(echo("David"));
console.log(echo(45));
console.log(echo({name: "David", age: 47}));

// What is the problem? No compilation checks, no IDE suggestions
console.log(echo("David").length); // works, but no ide help
console.log(echo(45).length); // does not work, but no errors
console.log(echo({name: "David", age: 47}));

// Typescript Generics
function betterEcho<T>(data: T) {
    return data;
}

// Try again
console.log(betterEcho("David").length); // adds ide help
//console.log(betterEcho<number>(45).length); // reports error in ide and compile message
console.log(betterEcho({name: "David", age: 47}));

// Built-in Generics
const testResults: Array<number> = [1.94, 4, 6.78];
testResults.push(2.65);
// testResults.push('David'); // error
console.log(testResults);

// Arrays 
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Goodbye Cruel World!"));

// Generic Classes - remember T represents the same type, not a mix
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; // cast to number
    }
}

const simpleMath = new SimpleMath<string>(); // instance accepts strings
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());

// Mixing Types - next letter in alphabet
class SimplerMath<T, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; // cast to number
    }
}

const simplerMath = new SimplerMath<string, number>(); 
simplerMath.baseValue = "10";
simplerMath.multiplyValue = 20;
console.log(simplerMath.calculate());

//Let's keep it simple and only add the following methods to the Map:
// The class needs to be of type string or number, but not mixed
class MyMap<T extends number | string> {
    // Create a property to store the coordinates
    // The keys will be strings
    // The values may be of type string or number consistent with the type of the class
    private coords: { [key: string]: T } = {};

    // Same here
    setItem(key: string, item: T) {
        this.coords[key] = item;
    }

    // The getter needs the key of type string
    getItem(key: string) {
        return this.coords[key];
    }

    clear() {
        this.coords = {};
    }

    printMap() {
        for(let key in this.coords) {
            console.log(key, this.coords[key]);
        }
    }
}

//The map should be usable like shown below:
// The keys will always be strings
// If the class is of type number, then all values must be numbers
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

// If the class is type string, then all values must be strings
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();