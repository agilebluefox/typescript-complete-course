// This file contains the circle functions for the Geometry namespace
"use strict";
var Geometry;
(function (Geometry) {
    // only accessible in the namespace
    var PI = 3.14;
    // must export all functions to use them outside
    function getCircumference(diameter) {
        return diameter * PI;
    }
    Geometry.getCircumference = getCircumference;
})(Geometry || (Geometry = {}));
// This file contains the rectangle functions for the Geometry namespace
"use strict";
var Geometry;
(function (Geometry) {
    function getRectangleArea(width, length) {
        return 2 * width + 2 * length;
    }
    Geometry.getRectangleArea = getRectangleArea;
})(Geometry || (Geometry = {}));
// Use triple-slash directive to include namespace properties
// and functions
"use strict";
/// <reference path="06-circle.ts" />
/// <reference path="06-rectangle.ts" />
// Outside of namespace
var PI = 2.99;
// refer to the exported functions using the namespace
console.log(Geometry.getCircumference(8));
console.log(Geometry.getRectangleArea(5, 7));
// no clashing with value in namespace
console.log(PI);
