
let userInput = Number(prompt("Enter a number between 0 and 10:"));
let message = "My selection: ";
switch (userInput) {
    case 0:
        message += "Bear";
        break;

    case 1:
        message += "Bunny";
        break;

    case 2:
    case 3:
        message += "Girafe";
        break;

    case 4:
        message += "Turtle";
        break;

    case 5:
    case 6:
    case 9:
        message += "Fish";
        break;

    case 7:
        message += "Horse";
        break;

    case 8:
        message += "Mouse";
        break;

    case 10:
        message += "Wale";
        break;
    default:
        message = "You selected wrong number!"
        break;
}

alert(message);



