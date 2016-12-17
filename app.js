"use strict";
// Use modules
var Circle = require("./geometry_functions/06-circle");
var _06_rectangle_1 = require("./geometry_functions/06-rectangle");
// Outside of module
var PI = 2.99;
// refer to the exported functions from the modules
console.log(Circle.getCircumference(8));
console.log(_06_rectangle_1.default(5, 7));
// no clashing with value in circle module
console.log(PI);
