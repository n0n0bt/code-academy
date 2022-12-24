// // Fizz Buzz //
// let number = Number(prompt("Write a number: "));

// function fizzBuzz(n) {
//     if (n % 3 === 0) {
//         alert("Fizz");
//     } else if (n % 5 === 0) {
//         alert("Buzz");
//     } else if (n % 3 === 0 && n % 5 === 0){
//         alert("FizzBuzz");
//     }
// }

// fizzBuzz(number);



// 1.  Write a JavaScript function to print the "Hello World" //

// let print = () => alert("Hello World");
// print();



// 2.  Write a JavaScript function to print the “Hello and your name” message // 

// let message = "Naumche";

// function myName() {
//     alert(`My name is ${message}`);
// }
// myName();


// 3. Write a function that returns the square of a number // 

// let number = parseInt(prompt("Add a number to see: "));

// function square(x) {
//     alert(x * x);
// }
// square(number);

// 4.  Write a function to convert Celsius to Fahrenheit //

// let fahrenheit = parseInt(prompt("Celsius to Fahrenheit calculator: Write Celsius"));
// function calc(celsius) {
//     alert((celsius * (9/5) + 32) + " Fahrenheit");

// }
// calc(fahrenheit);



// 5.  Write a function to find the area of a given Rectangle //

// let side1 = parseFloat(prompt("Enter side A:"));
// let side2 = parseFloat(prompt("Enter side b:"));

// function area(a, b) {
//     let x = a * b;
//     alert(`The area of ${a} and ${b} is: ${x}`);
// }

// area(side1,side2);


// 6.  Write a function to find the area and perimeter of a Circle //

// let areaVal = parseFloat(prompt("Enter Perimeter value: "));
// let areaVal1 = parseFloat(prompt("Enter Area value: "));

// function circleValues(x) {
//     alert(`Perimeter: ${2 * Math.PI * x}, Area: ${Math.PI * x * x}`);
// }

// circleValues(areaVal, areaVal1);


// 7. Write a function to calculate simple interest based on the principle amount //


// let principle = parseInt(prompt("What's your interest?"));
// let rate = parseInt(prompt("What's the interest rate?"));
// let time = parseInt(prompt("Write a lenght in years: "));

// function CalculateSimpleInterest(principle, rate, time) {
//     alert(principle * rate * time / 100);
// }

// CalculateSimpleInterest(principle, rate, time);


// 8. Write a function to generate a randomnumber //

// function random() {
//     let randomNumber = Math.floor(Math.random() * 10000);
//     return randomNumber
// }

// alert("The random number is: " + random());


// 9. Create Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator. //


// function printEven() {

//     let arr = [13,23,12,45,22,48,66,100];
//     let sum = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum = arr[i];
//             console.log(sum);
//         }
//     }
// }

// printEven();

// 10.Write a JS code to calculate the sumof digits in a number //

// function digitSum(num) {
//     let sum = 0;
//     while (num != 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }

// console.log(digitSum(4332));


// 11. Write   a   JS   function   to   print   the Fibonacci series for a given value of N

// function printFibonacciSeries(n) {
//     let a = 0, b = 1;
//     console.log(a);
//     console.log(b);

//     for (let i = 0; i < n; i++) {
//         let c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }

// printFibonacciSeries(10);



// 12. Create   Function   to   find   LongestCountry Name of an array (["Australia","Germany", "United States of America"])

// let countries = ["Australia","Germany", "United States of America"];

// function longestCountryName(countries) {
//     let longestCountry = "";

//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i].length > longestCountry.length) {
//             longestCountry = countries[i];
//         }
//     }

//     return longestCountry;
// }

// alert("The longest country is: " + longestCountryName(countries));


// 13. Write a JavaScript program to checkfrom three given integers that whether anumber is greater than or equal to 20and less than one of the others



// function lessBy(x,y,z) {
//     if (x >= 20 && (x < y || x < z)) {
//         return true;
//     }
//     if (y >= 20 && (y < x || y < z)) {
//         return true;
//     }
//     if (x >= 20 && (z < x || z < y)) {
//         return true;
//     }
//     return false;
// }

// console.log(lessBy(20,30,60));




////////// Or this way /////////



// function lessBy(x,y,z) {
//     return (
//         (x >= 20 && (x < y || x < z)) || (y >= 20 && (y < x || y < z)) || (z >= 20 && (z < x || z < y))
//     );
// }

// console.log(lessBy(23, 45, 10));
// console.log(lessBy(21, 21, 10));
// console.log(lessBy(21, 66, 75));






// Some DOM ex.

// let button = document.getElementById("button");

// button.addEventListener("click", function () {
//     document.getElementById("text").innerText = "This is Paragraph";
// })