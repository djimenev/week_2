import {Persona} from './person.js';



let persona1 = new Persona(180,70,1993)
console.log(persona1.calcularImc());
console.log(persona1.calcularEdad());
persona1.printHobbies()
console.log(persona1);
persona1.printAll();