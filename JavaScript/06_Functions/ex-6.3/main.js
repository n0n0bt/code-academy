let num1 = 11;
let num2 = 5;
let operator = "*";

function calc(val1, val2, operate) {
    let res;
    switch(operate){
        case "+":
            res = val1 + val2;
        break;
        case "-":
            res = val1 - val2;
        break;
        case "*":
            res = val1 * val2;
        case "/":
            res = val1 / val2;
        default:
            res = val1 + val2;
    }
    return res;
}

let res = calc(num1,num2,operator);
console.log(res);


////////////// If statement and Prompt ///////////////


let no1 = parseInt(prompt("Number 1"));

let no2 = parseInt(prompt("Number 2"));

let operation = prompt("operation");

function calculate(no1,no2,operation){
    let result;
    if(!isNaN(no1) && !isNaN(no2)){
        if(operation === "-")
        {
            result = Math.abs(no1 - no2);
        }else if(operation === "*")
        {
            result = no1*no2;
        }else if(operation === "/")
        {
            result = no1 / no2;
        }else
        {
            result = no1 + no2;
        }
        return result;
    } else {
        return "Invalid number";
    }
}
console.log(calculate(no1,no2,operation));


// Pre-definied parametars //

let num11 = 10;
let num22 = 5;
let operatorr = "*";

function calc(val11 = 2, val22 = 3, operatee = "+") {
    let res;
    switch(operatee){
        case "+":
            res = val11 + val22;
        break;
        case "-":
            res = val11 - val22;
        break;
        case "*":
            res = val11 * val22;
        case "/":
            res = val11 / val22;
        default:
            res = val11 + val22;
    }
    return res;
}

let result = calc(num11,num22,operatorr);

console.log(calc()); // or
console.log(res);


// Arrow Function


function sumOfTwoNumbers(n1,n2) {
    let res = n1 + n2;
    return res;
}
console.log(sumOfTwoNumbers(6,10));



let sumOfTwoNumbers2 = (n1, n2) => n1 + n2;
console.log(sumOfTwoNumbers2(5,10));