import { contacs } from "./contacts"
import { Person } from "./person"

let Persona1 = new Person("Diego", 29, "Calle santa ana")
let contact1 = new contacs([Persona1,Persona1])
 contact1.printCalendar()