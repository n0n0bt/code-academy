let choices = ["rock", "paper", "scissors"];

let computerChoice = Math.floor(Math.random() * 3);
let playerChoice = Math.floor(Math.random() * 3);


let showChoice = choices[computerChoice];
console.log("Computer choose: " + showChoice);
showChoice = choices[playerChoice];
console.log("Player choose: " + showChoice);

if (choices[computerChoice] === choices[playerChoice]) {
    console.log("It's a TIE !");
} else if(choices[computerChoice] === "rock" && choices[playerChoice] === "paper"){
    console.log("Player Wins !");
} else if (choices[computerChoice] === "paper" && choices[playerChoice] === "scissors"){
    console.log("Player Wins !");
} else if (choices[computerChoice] === "scissors" && choices[playerChoice] === "rock"){
    console.log("Player Wins !");
} else {
    console.log("Computer Wins!");
}