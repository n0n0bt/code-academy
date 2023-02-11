let descriptiveWords = ["Strong","Weak","Beast","Lazy"];


function nameInput() {
    let userInput = prompt("Type your name please:");
    let randomVal = Math.floor(Math.random() * descriptiveWords.length);
    console.log(`${userInput} is ${descriptiveWords[randomVal]}`);
}

console.log(nameInput());
