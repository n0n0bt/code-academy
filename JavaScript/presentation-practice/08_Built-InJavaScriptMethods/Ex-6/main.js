// Set up a date object
const myDate = new Date('2023-05-20');

// Output the date object
console.log(myDate);

// Set up an array with all the named months of the year
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Get the day from the date object value, using getDate()
const day = myDate.getDate();

// Get the year from the date object value, using getFullYear()
const year = myDate.getFullYear();

// Get the month of the date object value, using getMonth()
const monthIndex = myDate.getMonth();

// Set up a variable to hold the date of the date object
const date = `${months[monthIndex]} ${day}, ${year}`;

// Output the result into the console
console.log(date);