const output = document.querySelector(".output");

const input = document.querySelector("input");

const btn = document.querySelector("button");

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", () => {
    let value = input.value;
    console.log(mailformat.test(value));
    if (mailformat.test(value)) {
        output.textContent = "Valid Mail";
    } else {
        output.textContent = "Invalid Mail";
    }
    
})