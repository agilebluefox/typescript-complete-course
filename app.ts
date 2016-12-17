// Use modules
import * as Circle from './geometry_functions/06-circle';
import calcRect from './geometry_functions/06-rectangle';

// Outside of module
const PI = 2.99;

// refer to the exported functions from the modules
console.log(Circle.getCircumference(8));
console.log(calcRect(5, 7));

// no clashing with value in circle module
console.log(PI);