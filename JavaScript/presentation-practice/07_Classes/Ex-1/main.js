class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myFriend = new Person("Naumche", "Joshevski");
let mySecondFriend = new Person("Alex", "Goldmann");

console.log(`I want to greet my friends ${myFriend.firstName} and ${mySecondFriend.lastName}`);