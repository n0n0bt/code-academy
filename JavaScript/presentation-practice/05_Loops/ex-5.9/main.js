let employees = [
    {
        name: "Boban",
        age: 35,
        department: "It",
        online: true
    },
    {
        name: "Goran",
        age: 41,
        department: "Marketing",
        online: true
    },
    {
        name: "Ana",
        age: 23,
        department: "Sales",
        online: false
    }
]

outer:
for (const element of employees) {
    let arr = Object.keys(element);
    let output = "";
    for (const key of arr) {
        if (key === "age") {
            if (element[key] > 40) {
                continue outer;
            }
        }
        output += key + ": " + element[key] + " ";
    }
    console.log(output);
}
