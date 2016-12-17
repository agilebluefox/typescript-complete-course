// Create a namespace to prevent conflicts with global variables
namespace Geometry {

    // only accessible in the namespace
    const PI = 3.14;

    // must export all functions to use them outside
    export function getCircumference(diameter: number): number {
        return diameter * PI;
    }

    export function getRectangleArea(width: number, length: number): number {
        return 2 * width + 2 * length;
    }
}

// Outside of namespace
const PI = 2.99;

// refer to the exported functions using the namespace
console.log(Geometry.getCircumference(8));
console.log(Geometry.getRectangleArea(5, 7));

// no clashing with value in namespace
console.log(PI);