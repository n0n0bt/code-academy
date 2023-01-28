// Class rectangle that represents a rectangular and function which will calculate the area

class Rectangle{

    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(`The area of rectangle is ${this.width * this.height}`);
    }

}

let Rec = new Rectangle(25,45);

Rec.area();



// Class Square, extends from Rectangle
class Square extends Rectangle {
    constructor(side){
        super(side, side);
    }
}

let square = new Square(20);

square.area();


// class with name cars with 3 properties:   name,   year   and manufacturer, use the class to create objects and print them   in console log;

class Car {
    constructor(name,year,manufacturer) {
        this.name = name;
        this.year = year;
        this.manufacturer = manufacturer;
    }

    logIn(){
        console.log(`The brand of the car is: ${this.name}, the year of the car is: ${this.year} and the manufacture is: ${this.manufacturer}.`);
    }
}

let newCar = new Car("Golf5", 2015, "Volkswagen");

newCar.logIn();


//Create   Class   Books   with   the following properties :

// The title
// The author
// The copyright date
// The ISBN
// The number of pages
// The number of times the book has been checked out.
// Whether the book has been discarded

class Book {


    constructor(title, author, copyright, isbn, numOfPages, numOfTimes, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.numOfTimes = numOfTimes;
        this.discarded = discarded;
    }

    read(){
        console.log(`The name of the book is ${this.title}, the author is ${this.author}, copyright ${this.copyright}, ISBN is: ${this.isbn}, number of pages: ${this.numOfPages} etc.`);
    }


}

class Novel extends Book {
    constructor(title, author, copyright, isbn, numOfPages, numOfTimes, discarded){
        super(title, author, copyright, isbn, numOfPages, numOfTimes, discarded);
    }
}



let novel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 11111, 432, 32, "yes");

novel.read();

class Manual extends Book {
    constructor(title, author, copyright, isbn, numOfPages, numOfTimes, discarded){
        super (title, author, copyright, isbn, numOfPages, numOfTimes, discarded);
    }
}

let manual = new Manual("Pride and Prejudice", "Jane Austen", 3242, 2222, 546, 12, true);
manual.read();


// Create a library class and implement the following: Create a constructor that takes the booklist as an argument. getBookList(): This function should return the list of all book present in the library. issueBoo(bookname, user): This function takes an argument of bookname


class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  getBookList() {
    this.bookList.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookname, user) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
    } else {
      console.log("This book is already issued!");
    }
  }

  returnBook(bookname) {
    delete this.issuedBooks[bookname];
  }
}

let store1 = new Library(["Lengend of wolfs", "War and Peace", "Zaratrusta"]);
store1.getBookList();






