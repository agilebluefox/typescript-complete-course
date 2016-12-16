// string
var who = 'David';
// number
var age = 47;
// boolean
var hasAchesAndPains = true;
// array
var aches = ['sore legs', 'nerve impingement'];
// tuple
var achesAndPains = ['sore legs', 2];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Purple"] = 101] = "Purple";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Yellow"] = 3] = "Yellow"; // 3
})(Color || (Color = {}));
;
var myColor = Color.Blue;
console.log(myColor);
// any
var car = 'Honda';
console.log(car);
car = { brand: 'BMW', model: 3 };
console.log(car);
