function converter() {
  let celsius = document.getElementById("celsius").value;
  farenheit = celsius *1.8 + 32;
  document.getElementById("farenheit").value = farenheit;
}

let message = document.getElementById("message");
console.log(message);


let btn = document.getElementById("btnRate");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    if(rate.checked) {
      output.innerText = `You selected: ${rate.value}`
    }
  });
})