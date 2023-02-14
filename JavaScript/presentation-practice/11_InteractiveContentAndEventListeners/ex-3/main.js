function message(messageValue, event) {
    console.log(event + ": " + messageValue);
   
}

window.onload = function (event) {
    message("Window Ready", event)
}

document.addEventListener("DOMContentLoaded", function (event) {
    message("Document Ready", event);
})

window.addEventListener("DOMContentLoaded", function (event) {
    message("Document Ready", event);
})

