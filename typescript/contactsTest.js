"use strict";
exports.__esModule = true;
var contacts_1 = require("./contacts");
var person_1 = require("./person");
var Persona1 = new person_1.Person("Diego", 29, "Calle santa ana");
var contact1 = new contacts_1.contacs([Persona1, Persona1]);
contact1.printCalendar();
