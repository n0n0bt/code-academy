class Animal {
    constructor(speed, race, sex, location, age ){
        this.speed = speed;
        this.race = race;
        this.sex = sex;
        this.location = location;
        this.age = age;
    }

    print(){
        console.log(this.speed);
    }
}

let dog = new Animal("25kmh", "Yorkie", "Mr", "Europe");
let cat = new Animal("33kmhph", "Persian Cat", "Mrs", "Asia", 12);

Animal.prototype.getAge = function () {
    console.log(this.age); 
}


cat.getAge();
dog.print();

console.log(`The cat is fast like: ${cat.speed},  she is a ${cat.race}, a ${cat.sex},and she is located in ${cat.location} and is ${cat.age}`);

