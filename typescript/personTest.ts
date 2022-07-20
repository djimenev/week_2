import { Person } from "./person"

let Persona1 = new Person("Diego", 29, "Calle santa ana")
Persona1.printName();
console.log(Persona1.yearOfBirth(2022));
Persona1.setAddress("Calle pepita perez");
console.log(Persona1.getAddress());