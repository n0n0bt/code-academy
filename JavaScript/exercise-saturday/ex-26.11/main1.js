// Declaring and assigning Variables

let spaceShuttleName = "Determination";
// Printing the type 
console.log(typeof spaceShuttleName);

let speedMph = 17500;
// Printing the type 
console.log(typeof speedMph);

let distToMars = 225000000;
// Printing the type 
console.log(typeof distToMars);

let distToMoon = 384400;
// Printing the type 
console.log(typeof distToMoon);

const mPk = 0.621;
// Printing the type 
console.log(typeof mPk);

// Calculating the Miles to Mars
let milesToMars = 225000000 * mPk;
console.log(milesToMars);

// Calculating Hours to reach Mars
let hToMars = milesToMars / speedMph;
console.log(hToMars);

// Calculating days to reach Mars 
let daysToMars = hToMars / 24;
console.log(daysToMars);

// Printing how long will take reaching Mars in days.
console.log(spaceShuttleName + " will take " + daysToMars + " days to reach Mars.");




// The same method for the Moon

let milesToMoon = 384400 * mPk;
console.log(milesToMoon);

let hToMoon = milesToMoon / speedMph;
console.log(hToMoon);

let daysToMoon = hToMoon / 24;
console.log(daysToMoon);

console.log(spaceShuttleName + " will take " + daysToMoon + " days to reach the Moon.");

// Printing while using  `${nameOfVariable}`

let daysToMoon1 = `${spaceShuttleName} will take ${daysToMoon} days to reach the Moon.`;
console.log(daysToMoon1);






