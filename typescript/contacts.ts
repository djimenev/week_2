import { Person } from "./person"

export class contacs{

    public people:Person[];
    


        constructor(people:Person[]){
            this.people = people;
           

        }

        public printCalendar():void{
           for(let x:number = 0; x<this.people.length; x++){
            console.log(this.people[x]);
           }
           
            
            }
        }
    

    
    let Persona1 = new Person("Diego", 29, "Calle santa ana")
    let contact1 = new contacs([Persona1,Persona1])
     contact1.printCalendar()

   
       
       
     
        
    