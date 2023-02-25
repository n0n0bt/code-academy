let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(i);

}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let number of arr) {
    console.log(number);
}
