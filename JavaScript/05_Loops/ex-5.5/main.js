let gridArr = [];

let cells = 64;
let counter = 0;

let rowArr;

for (let i = 0; i < cells + 1; i++) {
    if (counter % 8 === 0) {
        if (rowArr != undefined) {
            gridArr.push(rowArr);
        }
        rowArr = [];
    }
    rowArr.push(++counter);
}

console.table(gridArr);







