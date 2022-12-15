let myTable = [];

let rows = 5;
let columns = 7;

let counter = 0;

for (let i = 0; i < rows; i++) {
    let tempTable = [];
    for (let j = 0; j < columns; j++) {
        tempTable.push(counter);
        counter++;
    }
    myTable.push(tempTable);
}

console.table(myTable);


