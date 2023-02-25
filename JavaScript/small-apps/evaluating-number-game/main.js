// Evaluating a number - `The 101 GAME`

let userInput = Number (prompt("Enter a number below, and check whether it's greater than, EQUAL to or less than :"));

console.log(userInput);
let message = "Your selection is: ";


if(userInput <= 9){
    message += "9 or less(COLD)";
} else if (userInput <= 50 && userInput >=10){
    message += "More or equal to 10, less than 50(Warm)";
} else if (userInput < 100 || userInput === 100){
    message += "Less or equal to 100(Warmer)";
} else if(userInput === 101) {
    message = "The CORRECT one!"
} else {
    message = "Read the game rules first, PLEASE!";
}

console.log(message);