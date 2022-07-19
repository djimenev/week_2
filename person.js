export class Persona{

    constructor(altura,peso,yearOfBirth){

        this.altura=altura
        this.peso=peso
        this.colorDeOjos="azul"
        this.hobbies=["Andar", "Cantar","Viajar","leer"]
        this.yearOfBirth=yearOfBirth
    }



    calcularImc(){
        return this.peso/(this.altura*this.altura)*10000
    }

    calcularEdad(){
        return 2022 - this.yearOfBirth
    }

    printAll(){
        for(let atributos in this){
            console.log(atributos + " - " + this[atributos])
        }
    }

    printHobbies(){
         let x = 0
        for(x in this.hobbies){
            console.log(this.hobbies[x]);
         }
    }
}





