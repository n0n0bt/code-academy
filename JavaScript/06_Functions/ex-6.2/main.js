let disWords = ["Strong","Smart","Fast","Beautiful"];

function askName() {
    let userInput = prompt("Write your name please:");
    let randomValue = Math.floor(Math.random() * disWords.length);
    alert(userInput + " is " + disWords[randomValue]);
}

askName();