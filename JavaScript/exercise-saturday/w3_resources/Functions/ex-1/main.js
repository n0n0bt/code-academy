//1. Write a JavaScript function that reverse a number.
// Example x = 32243
// Expected Output : 34223


let userInput = Number(prompt("Enter a number to be reversed in Console:"));


function reverseNumber(x) {
    let reverseStringOfX = x.toString().split("").reverse().join("");
    return parseInt(reverseStringOfX);
}


console.log(reverseNumber(userInput));






