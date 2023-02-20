// Set up the end date to count down to
const endDate = "2023-12-31";

// Define the countdown function
function countdown() {
  // Get the current date and the end date
  const now = new Date();
  const end = new Date(endDate);

  // Calculate the time remaining in milliseconds
  const timeRemaining = Date.parse(end) - Date.parse(now);

  // Calculate the remaining days, hours, minutes, and seconds
  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

  // Create an object with the remaining time values
  const timeObj = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };

  // Return the time object
  return timeObj;
}

// Define the update function to run every second
function update() {
  // Get the countdown object
  const temp = countdown();

  // Create an empty output string
  let output = "";

  // Loop through the object and add the values to the output string
  for (const [key, value] of Object.entries(temp)) {
    output += `${key}: ${value} `;
  }

  // Log the output to the console
  console.log(output);
}

// Set up the interval to run the update function every second
setInterval(update, 1000);