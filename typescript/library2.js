"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.addrees = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        console.log(this.addrees);
    };
    Library.prototype.setAddress = function (Address) {
        this.addrees = Address;
    };
    Library.prototype.getManager = function () {
        console.log(this.manager);
    };
    Library.prototype.setManager = function (Manager) {
        this.manager = Manager;
    };
    Library.prototype.getBooks = function () {
        console.log(this.books);
    };
    Library.prototype.imprimir = function () {
        var resultado = "";
        for (var x = 0; x < this.books.length; x++) {
            console.log(x);
            resultado += this.books[x].toString() + "- " + "\n";
        }
        return resultado;
    };
    Library.prototype.getNumberOfBooks = function () {
        var resultado = 0;
        resultado = this.books.length;
        return resultado;
    };
    Library.prototype.findByAutor = function (author) {
        return this.books.filter(function (Book) { return Book.getAuthor2() === author; });
    };
    return Library;
}());
exports.Library = Library;
/*   let libro1 = new Book("nombre del viento",250,"fkjgdf","patrick rotfuss","alfaguara" )
   let libro2 = new Book("khfsjf",249,"dfsdfs","karen virgi","brooks" )
   let libreria = new Library([libro1,libro2], "lsdjfkldjfkl","Daniel")

   console.log(libreria.imprimir());
   console.log(libreria.getNumberOfBooks());
   console.log(libreria.findByAutor("patrick rotfuss"));    */
