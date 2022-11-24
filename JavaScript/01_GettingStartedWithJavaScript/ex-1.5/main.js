// console.log("Naumche Joshevski");


/*
let userName = prompt("Insert your name!");

alert("Liceto " + userName + " e procesirano!");

console.log(userName);
*/



let randomNum = Math.random() * 10;
console.log("My random number is " + randomNum);

let roundNum = Math.floor(randomNum);
console.log("My rounded number is " + roundNum);


let num = prompt("Guess a number from 1 to 3");

if (roundNum == num) {
    alert("That's right cowboyy!");
} else {
    alert("Bad Bad Bad :)");
}
