let num1 = 44;
let num2 = 13;

let operator = "/";

function calc(par1, par2, operator) {
    let res;
    switch (operator) {
        case "+":
            res = par1 + par2;
        break;

        case "-":
            res = par1 - par2;
        break;
        
        case "*":
            res = par1 * par2;
        break;

        case "/":
            res = par1 / par2;
        break;
        default:
            res = "Its not a number";
        break;

    }

    return res;
}

console.log(calc(num1,num2,operator));

///////////////////// If statement and Prompt //////////////////////////////


let no1 = parseInt(prompt("Number 1"));

let no2 = parseInt(prompt("Number 2"));

let operation = prompt("Operation");

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
