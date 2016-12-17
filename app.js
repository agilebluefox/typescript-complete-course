"use strict";
// Use modules
var _06_circle_1 = require("./geometry_functions/06-circle");
var _06_rectangle_1 = require("./geometry_functions/06-rectangle");
// Outside of module
var PI = 2.99;
// refer to the exported functions from the modules
console.log(_06_circle_1.getCircumference(8));
console.log(_06_rectangle_1.getRectangleArea(5, 7));
// no clashing with value in circle module
console.log(PI);
