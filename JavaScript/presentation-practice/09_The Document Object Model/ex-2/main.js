const title = document.querySelector("h1");
title.innerText = "Exercise example for 9.2";

console.dir(title);

console.log(title.classList);

title.classList.add("red");

const paragr = document.querySelector("p");

paragr.id = "MyP";

console.dir(paragr);

paragr.style.backgroundColor = "lightgrey";

console.log(document.URL);

paragr.innerText = document.URL;