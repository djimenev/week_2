import { Library } from "./library2";
import { Book } from "./books";
import { Person } from "./person";


let libro1 = new Book("nombre del viento",250,"fkjgdf","patrick rotfuss","alfaguara" )
let libro2 = new Book("khfsjf",249,"dfsdfs","karen virgi","brooks" )
let libreria = new Library([libro1,libro2], "lsdjfkldjfkl","Daniel")

console.log(libreria.imprimir());
console.log(libreria.getNumberOfBooks());
console.log(libreria.findByAutor("patrick rotfuss"));