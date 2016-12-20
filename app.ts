// Decorator - function that can be added to a class
// arguments depend on where you want to attach the decorator
// To attach a decorator to a class, you pass the constructor parameter
function logged(constructorFn: Function): void {
    console.log(constructorFn);
}

// Use the @ symbol to attach the decorator to the class
@logged
class Person {
    constructor() {
        console.log('Hi there');
    }
}

// Factory
function logging(value: boolean): any {
    return value ? logged : null;
}

// The logging function returns either the logged decorator or nothing
// Important because only the logged decorator can be attached to a class
// since it has the constructor parameter
@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

// Can use multiple decorators
@logging(true)
@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
// cast to type any due to current bug in typescript
(<any>plant).print();

// Method decorator
// Property decorator

// Decide whether or not a method can be overwritten
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

// Choose whether a property can be overwritten
function overwritable(value: boolean) {
    return function(target: any, propName: any): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    // This affects all versions of the property, including the constructor
    @overwritable(true)
    projectName: string;

    constructor(name: string) {
        // If overwritable is false, this causes a runtime error
        this.projectName = name;
    }

    // If false, any future attempt to override this method will cause
    // runtime errors
    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project('super project');
project.calcBudget();
// Causes a runtime error if editable is set to false
// project.calcBudget = function() {
//     console.log(2000);
// };
project.calcBudget();
console.log(project.projectName);

// Parameter decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName", methodName);
    console.log("paramIndex", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    // Use the printInfo decorator on the printAll parameter
    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(444);
        } else {
            console.log(888);
        }
    }
}

const course = new Course('Super Course');
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);