// Guess the Celebrity - `Game`

let userInput = prompt("Enter a celebrity name:");
console.log(userInput);
message = "";

switch(userInput){
    case "Tonny Robins":
        message = "Yes, i know the Motivational Speaker";
        break;

    case "Michael Schumacher":
        message = "Yes, i know the Formula 1 Driver";
        break;

    case "Elon Musk":
        message = "Yes, i know this Multi bilioner";
        break;

    case "Rihanna":
        message = "Yes, i know the Singer";
        break;

    case "Angela Merkel":
        message = "Yes, i know the Politican";
        break;

    case "Dwayne Johnson":
        message = "Yes, i know the Wrestler and Acter";
        break;

    case "Naumche Joshevski":
        message = "That's Me!";
        break;

    default:
        message = "That's not a celebrity, try again!";

}

console.log(message);