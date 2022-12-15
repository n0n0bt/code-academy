// Basic(school) version:


// let randomNum = 0;
// console.log("First assigment: " + randomNum);
// randomNum = Math.random();
// console.log("Second assigment: " + randomNum);
// randomNum = randomNum * 10;
// randomNum *= 11;
// console.log("Third assigment: " + randomNum);
// randomNum = Math.floor(randomNum)
// console.log("Fourth assigment: " + randomNum);





// Smaller Version :
// let randomNum = Math.floor(Math.random() * 11);
// console.log("The Computer choose: " + randomNum);

// let userInput = parseInt(prompt("Enter a number between 0 - 10"));
// console.log("User Input: " + userInput + " type of: " + typeof userInput);

// if (userInput > randomNum) {
//     console.log("Your number is greater than the random number");
// } else if(userInput < randomNum) {
//     console.log("Your number is smaller than the random number");
// } else {
//     console.log("You guessed the number!");
// }


// the smallest version :

// let message = userInput > randomNum ? "Your number is greater than the random number" : userInput < randomNum ?
// "Your number is smaller than the random number" : "You guessed the number!";
// console.log(message);



let max = parseInt(prompt("Enter max value for guessing."));
if (isNaN(max)) {
    let isNumber = false;
    while (!isNumber) {
        max = parseInt(prompt("Enter max value for guessing."));
        if (!isNaN(max)) {
            isNumber = true; 
        }
    }
}  

max++;
let guessingNumber = Math.floor(Math.random() * max);
alert(guessingNumber);

let rightNumber = false;

max--;
while (!rightNumber) {
    let userNumber = parseInt(prompt("Enter a number between o and " + max));
    if (isNaN(userNumber)) {
        let isNumber = false;
        while (!isNumber) {
            userNumber = parseInt(prompt("Enter a number between o and " + max));
            if (!isNan(userNumber)) {
                isNumber = true; 
            }
        }
    }  
    
    if (guessingNumber === userNumber) {
        alert("You guessed right! You won the game!");
        rightNumber = true;
    } else if (guessingNumber < userNumber) {
        alert("You guessed highter then the number!");
    } else {
        alert("You guessed lower then the number!");
    }
}