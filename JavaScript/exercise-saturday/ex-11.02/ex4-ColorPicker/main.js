let background = document.body;

let color = document.getElementById("color");

colorChanger = document.getElementById("colorChanger");

color.addEventListener("input", updateFirst, false);
color.addEventListener("change", watchColorPicker, false);

function ChangeMe() {
    if ((colorChanger = " ")) {
        colorChanger.value = color.value;
        background.style.background = color.value;
    } else {
        alert("enter a HEX number of color");
    }
}


