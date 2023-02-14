const element = document.createElement("div");

document.body.appendChild(element);

element.innerHTML = "Hello World";
element.style.height = "150px";
element.style.width = "200px";
element.style.backgroundColor = "grey";
element.style.margin = "0 auto";


function trigger(color, event) {
    console.log("Color: " + color);
    console.log("Event : " + event.type);

}

function colorChanger(el) {
    element.style.backgroundColor = el;
}

element.addEventListener("mousedown", function (event) {
    trigger("red", event);
    colorChanger("red");
    
})

element.addEventListener("mouseover", function (event) {
    trigger("blue", event);
    colorChanger("blue");
})

element.addEventListener("mouseout", function (event) {
    trigger("green", event);
    colorChanger("green");
})

element.addEventListener("mouseup", function (event) {
    trigger("yellow", event);
    colorChanger("yellow");
})
