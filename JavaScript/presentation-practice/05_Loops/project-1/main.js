let finalTable = [];

let value = 7;

outer:
for (let i = 1; i < 5;  i++) {
    let temp = [];
    inner:
    for (let j = 1; j < 20; j++) {
        let res = i * j;
        if (res > 20) {
            break outer;
        }
        if (temp.length === value) {
            break;
        }
        if (res % 2 !== 0) {
            continue;
        }
        temp.push(res);
        
    }
    finalTable.push(temp);
}


console.table(finalTable);