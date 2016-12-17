// Use triple-slash directive to include namespace properties
// and functions

/// <reference path="06-circle.ts" />
/// <reference path="06-rectangle.ts" />

// Outside of namespace
const PI = 2.99;

// refer to the exported functions using the namespace
console.log(Geometry.getCircumference(8));
console.log(Geometry.getRectangleArea(5, 7));

// no clashing with value in namespace
console.log(PI);