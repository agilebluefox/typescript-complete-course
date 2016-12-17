// circle module
"use strict";
var PI = 3.14;
// must export all functions to use them outside
function getCircumference(diameter) {
    return diameter * PI;
}
exports.getCircumference = getCircumference;
