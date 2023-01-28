let someText = function (e) {
    console.log(e);
}

someText("Variabel Function");


function logINConsole (e) {
    console.log(e);
}

logINConsole("Logged in console");



//CALLBACK Function
function doFlexibleStuff(executeStuff) {
    executeStuff("Hello world");
    console.log("Do doFlexibleStuff Function");
}

doFlexibleStuff(logINConsole); 


let logName = function () {
    console.log("My name is Naumche Joshevski");
}

setTimeout(logName, 4000)// Logged in 10sec 

// setInterval(() => console.log(new Date().getSeconds().toString()), 1000);