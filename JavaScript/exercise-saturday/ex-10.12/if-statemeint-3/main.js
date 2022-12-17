let number = parseInt(prompt("Type a string or a number..."));

let message = "";

if (number === Number(number)) {
    message = "You've entered the folowing number: " + number;
    alert(message);
} else {
    message = "You're folowing string is : " + number;
    alert(message);
}