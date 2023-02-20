
// Output the value of PI
console.log(Math.PI);

// Get the ceil, floor, and round value of 5.7
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.round(5.7));

// Output a random value
console.log(Math.random());

// Get a number from 0 to 10
console.log(Math.floor(Math.random() * 11));

// Get a number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// Get a number from 1 to 100
console.log(Math.floor(Math.random() * 100) + 1);

// Create a function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate 100 random numbers between 1 and 100 and output them to the console
for (let i = 0; i < 100; i++) {
  console.log(getRandomNumber(1, 100));
}