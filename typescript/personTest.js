"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var Persona1 = new person_1.Person("Diego", 29, "Calle santa ana");
Persona1.printName();
console.log(Persona1.yearOfBirth(2022));
Persona1.setAddress("Calle pepita perez");
console.log(Persona1.getAddress());
