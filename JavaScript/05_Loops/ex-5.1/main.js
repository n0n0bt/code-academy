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
    let userNumber = parseInt(prompt("Enter a number between 0 and " + max));
    if (isNaN(userNumber)) {
        let isNumber = false;
        while (!isNumber) {
            userNumber = parseInt(prompt("Enter a number between 0 and " + max));
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