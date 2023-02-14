// Select the elements and assign to variables
const outputDiv = document.querySelector('.output');
const inputField = document.querySelector('input[name="message"]');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

// Create an empty array to log the events
let log = [];

// Function to capture event details and add to log array
function logEvent(event) {
  let eventDetails = {
    inputValue: inputField.value,
    eventType: event.type,
    className: event.target.className,
    tagName: event.target.tagName
  };
  log.push(eventDetails);

  // Update the div with the input value
  outputDiv.textContent = inputField.value;

  // Clear the div after adding to log array
  outputDiv.textContent = '';
}

// Add event listeners to btn1 and btn2
btn1.addEventListener('click', logEvent);
btn2.addEventListener('click', logEvent);

// Add event listener to btn3 to output log to console
btn3.addEventListener('click', function() {
  console.log(log);
});