let colors = document.getElementsByClassName("color");
console.log(colors);

function colorChanger(event) {
    if (event.target.innerText === "Red") {
        document.body.style.backgroundColor = "red";
    } else if(event.target.innerText === "Green") {
        document.body.style.backgroundColor = "green";
    } else if(event.target.innerText === "Blue") {
        document.body.style.backgroundColor = "blue";
        h1.style.color = "white";
    } else if(event.target.innerText === "Yellow") {
        document.body.style.backgroundColor = "yellow";
    } else if(event.target.innerText === "Grey") {
        document.body.style.backgroundColor = "gray";
    }
}

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", colorChanger);
}


// Or..

let firstDiv = document.querySelector(".color1");
const h1 = document.createElement("h1");

h1.innerText = "Hi, hi are u?";

h1.addEventListener("click", changeColor);


function changeColor() {
    console.log(this);
    this.style.color = "blue";
}

firstDiv.appendChild(h1); // adds the created element (here in JS, to a exsisting div element in HTML)