"use strict";
exports.__esModule = true;
exports.contacs = void 0;
var person_1 = require("./person");
var contacs = /** @class */ (function () {
    function contacs(people) {
        this.people = people;
    }
    contacs.prototype.printCalendar = function () {
        for (var x = 0; x < this.people.length; x++) {
            console.log(this.people[x]);
        }
    };
    return contacs;
}());
exports.contacs = contacs;
var Persona1 = new person_1.Person("Diego", 29, "Calle santa ana");
var contact1 = new contacs([Persona1, Persona1]);
contact1.printCalendar();
