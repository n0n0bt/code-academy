let output = document.getElementById("output");
let div = document.getElementById("ex");

let input = div.querySelectorAll("input");


for (const el of input) {
    el.addEventListener("keyup", function (event) {
        console.log(event.key);
    });

    el.addEventListener("keyup", function (event) {
        console.log(typeof event.key);

        if (!isNaN(event.key)) {
            output.textContent += event.key;
        }
    });

    el.addEventListener("paste", function (event) {
        console.log("paste");
        console.log(event.clipboardData.getData("text"));
    });
}