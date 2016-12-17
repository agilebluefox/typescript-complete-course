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
