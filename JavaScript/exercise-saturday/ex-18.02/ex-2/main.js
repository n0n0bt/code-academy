let myObject = {
    name:"John Doe",
    age: 15,
    email: "test@gmail.com",
    job: "Auditor"
}

console.log(myObject);

let converted = JSON.stringify(myObject);
console.log(converted);

const obj = JSON.parse(`{"name":"John", "age":30, "city":"New York"}`);

document.getElementById(
    "demo"
).innerText += `Name: ${obj.name}, Age: ${obj.age}, City:${obj.city}`;