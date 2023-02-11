let numerOfButtons = document.querySelectorAll(".button").length;


for (let i = 0; i < numerOfButtons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function () {
        let buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function (event) {
    sound(event.key);
    animation(event.key);
})

function sound(key) {
    switch(key){

        case "w":
            let sound1 = new Audio("sounds/boom.wav")
            sound1.play();
            break;

        case "a":
            let sound2 = new Audio("sounds/clap.wav")
            sound2.play();
            break;

        case "s":
            let sound3 = new Audio("sounds/hihat.wav")
            sound3.play();
            break;

        case "d":
            let sound4 = new Audio("sounds/kick.wav")
            sound4.play();
            break;

        case "j":
            let sound5 = new Audio("sounds/snare.wav")
            sound5.play();
            break;

        case "k":
            let sound6 = new Audio("sounds/openhat.wav")
            sound6.play();
            break;

        case "l":
            let sound7 = new Audio("sounds/ride.wav")
            sound7.play();
            break;
    }
}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("animation");

    setTimeout(function () {
        activeButton.classList.remove("animation");
    }, 200);
}