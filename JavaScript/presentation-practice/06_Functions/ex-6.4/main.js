let endCalc = [];

for (let i = 0; i < 10; i++) {
    let val1 = i*5;
    let val2 = i*i;

    let result = addTwoNumbers(val1,val2);
    endCalc.push(result);

    
}

function addTwoNumbers(par1, par2) {
    return par1 + par2;
}

console.log(endCalc);