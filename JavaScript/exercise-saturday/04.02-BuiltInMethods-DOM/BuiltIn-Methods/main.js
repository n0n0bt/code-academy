//////////////  1.1 Encode URL using encodeURI() function example  /////////////

let uri = "https://javaguides.net/?x=шеллы";

let encoded = encodeURI(uri);

console.log(encoded);

try {
  let decode = decodeURI(encoded);
  console.log(decode);
} catch (e) {
  console.error(e);
}

///////////////// 1.2 Encode URL Component using encodeURIComponent() function  //////////

let uri1 = "https://javaguides.net/my test.html?name=ram&age29";
console.log("before encode :: " + uri1);
let encode = encodeURIComponent(uri1);
console.log("after encode :: " + encode);

let decode = decodeURIComponent(encode);
console.log("after decode :: " + decode);

///////////////  2.1 ParseInt   /////////////////////////////////

let x = "100";

let y = parseInt(x);

let z = y * 2;
console.log(z);

//////////////////2.2	ParseFloat   //////////////////////////

let x1 = "82.5";

let y1 = parseFloat(x1);

console.log(typeof y1, typeof x1);

///////////////////  3.1 JavaScript Array fill()  ////////////////////////
// defining an array
var fruits = ["Apple", "Banana", "Grape"];

// filling every element of the array with 'Cherry'
fruits.fill("Cherry");

console.log(fruits);

// Output:
// [ 'Cherry', 'Cherry', 'Cherry' ];

/////////////////////    3.2	Javascript Array join()  /////////////////////////

let message = ["JavaScript", "is", "fun."];

// join all elements of array using space
let joinedMessage = message.join(" ");
console.log(joinedMessage);

// Output: JavaScript is fun.

///////////////////////   3.3  JavaScript Array concat()  ////////////////////////

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

// join two arrays
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

/* Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8
]
*/

///////////////////////    3.4 JavaScript Array find()  //////////////////////////////

let numbers = [1, 3, 4, 9, 8];

// function to check even number
function isEven(element) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

// Output: 4

///////////////////////////  3.5 JavaScript Array map() /////////////////////////////

let numbers1 = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number) {
  return number * number;
}

// apply square() function to each item of the numbers list
let square_numbers = numbers1.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]

/////////////////////////  3.5	Javascript Array forEach()  ////////////////////////

let numbers2 = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
  console.log(element * element);
}

// compute square root of each element
numbers2.forEach(computeSquare);

/* Output:
1
9
16
81
64
*/


/////////////////// 4.1 JavaScript Math.min()  ////////////////////////
// min() with negative numbers
let numbers3 = Math.min(-1, -11, -132);
console.log(numbers3);

// min() with positive numbers
let numbers4 = Math.min(0.456, 135, 500);
console.log(numbers4);

// Output:
// -132
// 0.456


/////////////////////////   4.2 Math.min() with Arrays   //////////////////////////

let numbers5 = [4, 1, 2, 55, 9];

// min() with a spread operator
let minNum = Math.min(...numbers5);
console.log(minNum);

// Output: 1

////////////////////////      4.3  Math max()   ////////////////////////////

// max() with negative numbers
let numbers6 = Math.max(-1, -11, -132);
console.log(numbers6);

// max() with positive numbers
let numbers7 = Math.max(0.456, 135, 500);
console.log(numbers7);

// Output:
// -1
// 500

/////////////////////////   4.2 Math.max() with Arrays   //////////////////////////

let numeros = [1,34,56,700,23];

let numeros1 = Math.max(-1, -11, -132);
console.log(numeros1);

let maxNumeros = Math.max(...numeros);
console.log(maxNumeros);





///////////////////////////////////    DATE    ///////////////////////////
// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

// get the year from the date
let year = currentDate.getFullYear();

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
  day = "0" + day;
}

// if month is less than 10, add 0
if (month < 10) {
  month = "0" + month;
}

// display in various formats
const formattedDate1 = month + "/" + day + "/" + year;
console.log(formattedDate1);

const formattedDate2 = month + "-" + day + "-" + year;
console.log(formattedDate2);

const formattedDate3 = day + "-" + month + "-" + year;
console.log(formattedDate3);

const formattedDate4 = day + "/" + month + "/" + year;
console.log(formattedDate4);
