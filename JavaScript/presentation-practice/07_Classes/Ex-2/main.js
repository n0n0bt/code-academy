class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

let person1 = new Person("Naumche","Joshevski");
let person2 = new Person("Alex","Goldmann");


console.log(person1.fullName());