let output = "";
let output1 = "";

let skipNumber = 5;

for (let i = 0; i <= 10; i++) {
    if (i === skipNumber) {
        continue;
    }
    output += i;
}
console.log(output);

for (let j = 0; j <= 10; j++) {
    if (j === skipNumber) {
        break;
    }
    output1 += j;
}

console.log(output1);

