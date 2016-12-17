// Exercise 1
class Car {
    private name: string;
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    public honk = function (): void {
        console.log("Toooooooooot!");
    };

    public accelerate = function (speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
abstract class baseObject {
    public width: number = 0;
    public length: number = 0;
};

class Rectangle extends baseObject {
    public width: number = 5;
    public length: number = 2;

    calcSize(): number {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
console.log(rectangle.calcSize());

// Exercise 3
class PersonClass {
    private _firstName: string = '';
    enumerable: boolean = true;
    configurable: boolean = true;

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const max = new PersonClass();

console.log(max.firstName);
max.firstName = "Ma";
console.log(max.firstName);
max.firstName = "Maximilian";
console.log(max.firstName);
