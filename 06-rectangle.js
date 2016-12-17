"use strict";
var Geometry;
(function (Geometry) {
    function getRectangleArea(width, length) {
        return 2 * width + 2 * length;
    }
    Geometry.getRectangleArea = getRectangleArea;
})(Geometry || (Geometry = {}));
