let background = document.body;

let color = document.getElementById("color");

colorChanger = document.getElementById("colorChanger");


function ChangeMe() {
    if ((colorChanger = " ")) {
        colorChanger.value = color.value;
        background.style.background = color.value;
    } else {
        alert("enter a HEX number of color");
    }
}
