class Person {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    greet(){
        console.log(`Hello`);
    }
}


// Creating 2 new Objects
let newPerson = new Person("Naumche", "Joshevski");
let secondNewPerson = new Person("Tomislav", "Tomchevski");

console.log(`My name is ${newPerson.firstName} ${newPerson.lastName}, and my friends name is ${secondNewPerson.firstName} ${secondNewPerson.lastName}`);

// Creating a function to log the names
function persons(x,y) {
    console.log("Person name is: " + x + " and last name is: " + y);
}


persons(newPerson.firstName, newPerson.lastName);

class PersonMethods {
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    // This is method(function), because it's location is in Class(Object)
    greet(){
        console.log("Hi there!", this.firstName);
    }

    compliment(name, object) {
        return "That's wonderfull" + object + ", " + name;
    }

}


let naumche = new PersonMethods("Naumche", "Joshevski");
let radojka = new PersonMethods("Radojka", "Joshevska");

naumche.greet();
radojka.greet();


let compl = radojka.compliment(naumche.firstName, " body");

console.log(compl);