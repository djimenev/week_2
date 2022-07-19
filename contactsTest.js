import {Contacts} from './contacts.js';

let persona1 ={
    nombre:"paco",
    apellidos:"jimenez",
    edad:29

}
let persona2 ={
    nombre:"paco",
    apellidos:"augusto",
    edad:30

}
let persona3 ={
    nombre:"paco",
    apellidos:"jimenez",
    edad:35

}

let contacto1 = new Contacts()
contacto1.arrayObj = [persona1,persona2,persona3]
contacto1.printPerson()