let endCalc = [];

for (let i = 0; i < 10; i++) {
    let val1 = i*5;
    let val2 = i*i;

    let result = addTwoNumbers(val1, val2)
    endCalc.push(result)
};

function addTwoNumbers(x, y) {
    return x + y;
}

console.log(endCalc);

