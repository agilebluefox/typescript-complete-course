// Use modules
import { getCircumference  } from './geometry_functions/06-circle';
import { getRectangleArea } from './geometry_functions/06-rectangle';

// Outside of module
const PI = 2.99;

// refer to the exported functions from the modules
console.log(getCircumference(8));
console.log(getRectangleArea(5, 7));

// no clashing with value in circle module
console.log(PI);