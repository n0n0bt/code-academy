
let paragr = document.querySelector("p");
let head = document.querySelector("h1");

window.onclick = function () {
    console.log("It's clicked!");

    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        paragr.style.color = "black";
        head.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        paragr.style.color = "white";
        head.style.color = "white";
    }
}
