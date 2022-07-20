import { Book } from "./books";
import { Person } from "./person";

export class Library{
    private books:Book[];
    private addrees:string;
    private manager:string;

            constructor(books:Book[],address:string, manager:string){


                    this.books = books;
                    this.addrees = address;
                    this.manager = manager;
            }

            public getAddress():void{
                console.log(this.addrees);
            }
            public setAddress(Address:string):void{
                this.addrees = Address
            }
            public  getManager():void{
                console.log(this.manager);
            }
            public setManager(Manager:string):void{
                this.manager = Manager
            }
            public getBooks():void{
                console.log(this.books);
                
            }

            public imprimir():string{
                let resultado:string="";
                for( let x:number = 0; x<this.books.length;x++) {
                    console.log(x);
                    
                    resultado += this.books[x].toString() + "- " + "\n"
                } 
                return resultado
                }

            public getNumberOfBooks():number{
                let resultado:number = 0
                resultado = this.books.length;
                return resultado

            }

            public findByAutor(author:string):Book[]{
                return this.books.filter(Book => Book.getAuthor2() === author)
            }
                

}


         /*   let libro1 = new Book("nombre del viento",250,"fkjgdf","patrick rotfuss","alfaguara" )
            let libro2 = new Book("khfsjf",249,"dfsdfs","karen virgi","brooks" )
            let libreria = new Library([libro1,libro2], "lsdjfkldjfkl","Daniel")

            console.log(libreria.imprimir());
            console.log(libreria.getNumberOfBooks());
            console.log(libreria.findByAutor("patrick rotfuss"));    */
            
            