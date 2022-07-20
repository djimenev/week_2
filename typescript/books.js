"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, npages, isbn, author, editorial) {
        this.title = title;
        this.nPages = npages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        console.log(this.title);
    };
    Book.prototype.getNpages = function () {
        console.log(this.nPages);
    };
    Book.prototype.getIsb = function () {
        console.log(this.isbn);
    };
    Book.prototype.getAuthor = function () {
        console.log(this.author);
    };
    Book.prototype.getAuthor2 = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        console.log(this.editorial);
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setNpages = function (npages) {
        this.nPages = npages;
    };
    Book.prototype.setIsb = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "Titulo " + "- " + this.title + "\n" + "Number of pages" + "- " + this.nPages + "\n" + "ISBN" + "- " + this.isbn + "\n" + "Author" + "- " + this.author + "\n" + "Editorial" + "- " + this.editorial + "\n";
    };
    return Book;
}());
exports.Book = Book;
//let libro1 = new Book("nombre del viento",250,"fkjgdf","patrick rotfuss","alfaguara" )
//console.log(libro1.toString());
