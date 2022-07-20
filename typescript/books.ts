export class Book{

       private title: string
       private nPages: number
       private isbn: string
       private author: string
       private editorial: string

                constructor(title:string,npages:number,isbn:string,author:string,editorial:string){

                    this.title = title;
                    this.nPages = npages;
                    this.isbn = isbn;
                    this.author = author;
                    this.editorial = editorial;

                }

                    public getTitle():void{
                        console.log(this.title);
                    }
                    public getNpages():void{
                        console.log(this.nPages);    
                    }
                    public getIsb():void{
                        console.log(this.isbn);  
                    }
                    public getAuthor():void{
                        console.log(this.author); 
                    }
                    public getAuthor2():string{
                        return this.author
                    }
                
                    public getEditorial():void{
                        console.log(this.editorial);
                    }
                    public setTitle(title:string):void{
                        this.title = title
                    }
                    public setNpages(npages:number):void{
                        this.nPages = npages
                    }
                    public setIsb(isbn:string):void{
                        this.isbn = isbn
                    }
                    public setAuthor(author:string):void{
                        this.author = author
                    }
                    public setEditorial(editorial:string):void{
                        this.editorial = editorial
                    }

                    public toString():string{
                        
                    return "Titulo " + "- " +  this.title + "\n" + "Number of pages" + "- " + this.nPages + "\n" + "ISBN" + "- " + this.isbn + "\n" + "Author" + "- " + this.author + "\n" + "Editorial" + "- " + this.editorial + "\n"
                        
                    }

}

//let libro1 = new Book("nombre del viento",250,"fkjgdf","patrick rotfuss","alfaguara" )
//console.log(libro1.toString());
