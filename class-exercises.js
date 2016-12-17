"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Exercise 1
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.honk = function () {
            console.log("Toooooooooot!");
        };
        this.accelerate = function (speed) {
            this.acceleration = this.acceleration + speed;
        };
        this.name = name;
    }
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var baseObject = (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
;
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.apply(this, arguments) || this;
        _this.width = 5;
        _this.length = 2;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle();
console.log(rectangle.calcSize());
// Exercise 3
var PersonClass = (function () {
    function PersonClass() {
        this._firstName = '';
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(PersonClass.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonClass;
}());
var max = new PersonClass();
console.log(max.firstName);
max.firstName = "Ma";
console.log(max.firstName);
max.firstName = "Maximilian";
console.log(max.firstName);
