"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering into hyperspace using " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
