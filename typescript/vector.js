"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var x = 0; x < n; x++) {
            this.elements.push(Number((Math.random() * k).toFixed()));
        }
        this.length = this.elements.length;
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var array = new Vector(0, 0);
        if (this.length == v1.length) {
            for (var x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] + v1.elements[x]);
            }
        }
        return array;
    };
    Vector.prototype.subs = function (v1) {
        var array = new Vector(0, 0);
        if (this.length == v1.length) {
            for (var x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] - v1.elements[x]);
            }
        }
        return array;
    };
    Vector.prototype.mult = function (v1) {
        var array = new Vector(0, 0);
        if (this.length == v1.length) {
            for (var x = 0; x < this.length; x++) {
                array.elements.push(this.elements[x] * v1.elements[x]);
            }
        }
        return array;
    };
    Vector.prototype.multNumber = function (n) {
        var array = new Vector(0, 0);
        for (var x = 0; x < this.length; x++) {
            array.elements.push(this.elements[x] * n);
        }
        array.length = array.elements.length;
        return array;
    };
    return Vector;
}());
exports.Vector = Vector;
var vector1 = new Vector(10, 7);
var vector2 = new Vector(10, 10);
//console.log(vector1);
//vector1.print();
console.log(vector1);
console.log(vector2);
//console.log(vector1.multNumber(3));
console.log(vector1.mult(vector2));
