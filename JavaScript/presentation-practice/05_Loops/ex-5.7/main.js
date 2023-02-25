let person = {
    name: "Naum",
    year: 26,
    smoker: false
}


for (let prop in person) {
   console.log(prop + ": " + person[prop]);
}