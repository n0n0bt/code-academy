let randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber);
let userInput = prompt("Ask your question:");

let answer = "";

switch(randomNumber){
    case 0:
        answer = "Your should be an Engenier!"
        break;
    
    case 1:
        answer = "Your should be a Teacher!"
        break;
    
    case 2:
        answer = "Your should be a Taxi Driver!"
        break;
    
    case 3:
        answer = "Your should be an Accountant!"
        break;

    case 4:
        answer = "Your should be a PROGRAMERR!"
        break;

    case 5:
        answer = "Your should be an Bus Driver!"
        break;
}

console.log(userInput);
console.log(answer);



