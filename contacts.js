

export class Contacts{

    constructor(){

        this.arrayObj=[]
      
    }


    printPerson(){
        let prop=0
        for(prop in this.arrayObj){
            console.log(prop);
            console.log(this.arrayObj[prop]);
        }
}
}
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


