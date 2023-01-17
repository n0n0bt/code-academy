// 1. Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
//  Current time is : 10 PM : 30 : 38

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


let dayIndex = new Date().getDay();
console.log(`Today is: ${days[dayIndex]}`);


let date = new Date();

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let newHour = hour;
let amPm;

if (hour > 12) {
    newHour = hour - 12;
    amPm = "PM";
} else {
    newHour = hour;
    amPm = "AM";
}

console.log(`Current time is: ${newHour} : ${amPm} : ${minutes} : ${seconds}`);


