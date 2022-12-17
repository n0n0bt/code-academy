let computer = Math.floor(Math.random() * 30);
console.log(computer);

let playerInput = parseInt(prompt("Type a number, and see if it's bigger or equal to:"));

let message = "";

if (playerInput > computer) {
    message = "Your number is Bigger than the PC number!"
    alert(message);
} else if(playerInput === computer) {
    message = "Your number is Equal to the PC number!"
    alert(message);
}else{
    message = "Computer number is Bigger than yours!"
    alert(message);
}