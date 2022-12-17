let number = parseInt(prompt("Enter a number, I'll tel you if it's ODD or EVEN"));

let message = "";

if (number % 2 === 0) {
    message = "Your number is EVEN !"
    alert(message);
} else {
    message = "Your numberr is ODD !"
    alert(message);
}