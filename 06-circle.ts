// This file contains the circle functions for the Geometry namespace

namespace Geometry {
    // only accessible in the namespace
    const PI = 3.14;

    // must export all functions to use them outside
    export function getCircumference(diameter: number): number {
        return diameter * PI;
    }   
}