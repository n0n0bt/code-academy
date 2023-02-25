// alert("Hello");

let userInput = Number (prompt("Whats your age?"));

let message = "";

if(userInput >= 21){
    message = "You can enter the venue, and buy alcohol!";
} else if(userInput >= 19){
    message = "You can enter the venue, but you can't purchase any alcohol";
}else{
    message = "You are to small boyyi :)"
}

console.log(message);



