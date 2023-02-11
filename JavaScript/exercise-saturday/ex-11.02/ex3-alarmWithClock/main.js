time1 = document.getElementById("time");

// let date = new Date();

// let hours = date.getHours();
 
// let minutes = date.getMinutes();

// let seconds = date.getSeconds();


function zero(num) {
    if (num < 10) {
        return "0" + num;   
    }else {
        return num;
    }
}

// time1.innerHTML += `<p>${zero(hours)}:${zero(minutes)}:${zero(seconds)}</p>`;

window.setInterval(function () {
    let date = new Date();

    let hours = date.getHours();
 
    let minutes = date.getMinutes();

    let seconds = date.getSeconds();

    time1.innerHTML = `<p>${zero(hours)}:${zero(minutes)}:${zero(seconds)}</p>`;
}, 1000);



timeString = "19:07";

let now = new Date();
hours = now.getHours();
minutes = now.getMinutes();

let currentTime = `${zero(hours)}:${zero(minutes)}`;
let cts = currentTime.toString();



if (timeString <= cts){
    alert("Time to wake UPP!!")
}else {
    alert("Time is to sleep")
}