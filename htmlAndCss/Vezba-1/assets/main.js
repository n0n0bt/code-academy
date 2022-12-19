let choices = document.querySelectorAll("#choices button");
let result = document.querySelector("#result");

choices.forEach(choice => {
  choice.addEventListener("click", function() {
    // Generate a random choice for the computer
    let computerChoice = Math.floor(Math.random() * 10);
    if (computerChoice < 3) {
      computerChoice = "rock";
    } else if (computerChoice <= 6) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    console.log(computerChoice);

    // Compare the player's choice to the computer's choice
    // and determine the outcome of the game
    if (choice.id === computerChoice) {
      result.textContent = "It's a tie!";
    } else if (
      (choice.id === "rock" && computerChoice === "scissors") ||
      (choice.id === "paper" && computerChoice === "rock") ||
      (choice.id === "scissors" && computerChoice === "paper")
    ) {
      result.textContent = "You win!";
    } else {
      result.textContent = "You lose!";
    }
  });
});