

// let i = 0;
// let arr = [];

// while (i <= 10) {
//     arr.push(i);
//     i++;
// }

// console.log(arr);


/////////////////////////////////////////////////////////////////



// let num = 12455654;
// let count = 0;

// while (num != 0) {
//     num = Math.floor(num / 10);
//     count++;
// }

// let arr1 = 12455654;
// console.log(`The number of digits of the numberr: ${arr1} is ${count}`);


/////////////////////////////////////////////////////////////////


// let arr = [];
// let i = 1;

// while (i <= 100) {
//     if (i % 2 != 0) arr.push(i);
//     i++;
    
// }

// console.log(arr);


/////////////////////////////////////////////////////////////////


// let userInput1 = parseInt(prompt("Write the first number:"));
// let userInput2 = parseInt(prompt("Write the second number:"));

// do {
//     console.log(userInput1);
//     userInput1++;
// } while (userInput1 <= userInput2);


/////////////////////////////////////////////////////////////////


// let secretNumber = Math.floor(Math.random() * 10);
// let guesses = 0; // for storing the number of guesses
// do {
//   // get input from user
//   let number = parseInt(prompt("Please enter a number between 0 and 10"));
//   // increase the number of guesses
//   guesses++;
//   // check input number with the secret number provide hint if needed
//   if (number > secretNumber) {
//     alert("To high");
//     alert(secretNumber);
//   } else if (number < secretNumber) {
//     alert("To low");
//     alert(secretNumber);
//   } else if (number == secretNumber) {
//     alert(`Bravo! you're correct after ${guesses} guess(es).`);
//   }
// } while (number != secretNumber);



/////////////////////////////////////////////////////////////////

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`The sum of ${i} and ${j} is: ${i + j}`);
//     }
    
// }

/////////////////////////////////////////////////////////////////


// let arr = [1,2,3,4,5,6,7,8,9];

// let message = "";

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         console.log(arr[i]);
//     }
// }


/////////////////////////////////////////////////////////////////

// let arr1 = [2,4,6,7,8];
// let arr2 = [4,6,1,5,0];
// let product = [];

// for (let i = 0; i < arr1.length; i++) {
//     product[i] = arr1[i] * arr2[i];
//     console.log(`The product of ${arr1[i]} and ${arr2[i]} is: ${product[i]}`);
    
// }


////////////////////////////////////////////////////////////////



// let arr = [1,2,60,40,2,0];

// let largest = 0;

// for (let i= 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
    
// }
// console.log(largest);


/////////////////////////////////////////////////////////////////


// let arr = [1,2,60,40,2,0];

// let smallest = 0;

// for (let i= 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
    
// }
// console.log(smallest);

/////////////////////////////////////////////////////////////////

// FIZZBUZZ With loop from given number


// for (let i = 0; i <= 45; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FIZZBUZZ");
//     }else if(i % 3 == 0){
//         console.log("FIZZ");
//     }else if (i % 5 == 0) {
//         console.log("BUZZ");
//     }
// }

/////////////////////////////////////////////////////////////////


// let cars = ["BMW","AUDI","SKODA","YUGO","RENAULT","FI4O",];

// for (const obj of cars) {
//     console.log(obj);
// }


/////////////////////////////////////////////////////////////////

// let restourant = {
//     name: "REMO",
//     cake: "cheescake",
//     ingredinets: ["creamchese","creamchese1","creamchese2"]
// }

// for (elements in restourant.ingredinets){
//     console.log(restourant.ingredinets[elements]);
// }