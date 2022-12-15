let maxValue = parseInt(prompt("Enter Max value for guessing."));

if(maxValue == NaN){
    let isNaN = true;
    while(true){
        maxValue = parseInt(prompt("Enter Max value for guessing."));

        if(maxValue !== NaN) {
            isNaN = false;
        }
    }
}

let guessingNum = Math.floor(Math.random() * (maxValue + 1));

alert(guessingNum);

let rightNumber = false;
maxValue--;
while(!rightNumber){
    let userNumber = parseInt(prompt("Enter a number between 0 and " + maxValue));
    if(guessingNum === userNumber){
        alert("You've WON ! ! !")
        rightNumber = true;
    }else if(guessingNum < userNumber){
        alert("You Guessed higher!");
    } else {
        alert("You Guessed lower !");
    }
}