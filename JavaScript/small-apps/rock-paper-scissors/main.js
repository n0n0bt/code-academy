let options = ["rock", "paper", "scissors"];

// Generating random number 0 - 2 for the computer
let ranNumComp = Math.floor(Math.random() * 3);


// Converting computer number into the options values
let compMessage = "";

if(ranNumComp === options.indexOf("rock")){
    compMessage = "Computer choose rock!";
}else if(ranNumComp === options.indexOf("paper")){
    compMessage = "Computer choose paper!";
}else{
    compMessage = "Computer choose scissors!";
}


// Conditions handeling and comparing the player and computer selections
let message = "";

let ranNumPlayer = prompt("rock, paper or scissors?");

if(ranNumPlayer === options[0]){
    if(ranNumComp === 0){
        message = "Tie";
    }else if(ranNumComp === 1){
        message = "Computer wins";
    }else{
        message = "Winner, Winner, Chicken Dinner !";
    }
    
} else if(ranNumPlayer === options[1]){
    if(ranNumComp === 0){
        message = "Winner, Winner, Chicken Dinner !";
    } else if(ranNumComp === 1){
        message = "Tie";
    } else{
        message = "Computer Wins";
    }
} else if(ranNumPlayer === options[2]){
    if(ranNumComp === 0){
        message = "Computer Wins";
    }else if(ranNumComp === 1) {
        message = "Winner, Winner, Chicken Dinner !";
    }else{
        message = "Tie";
    }
}


console.log(compMessage);
console.log("Player choose " + ranNumPlayer);
console.log(message);




