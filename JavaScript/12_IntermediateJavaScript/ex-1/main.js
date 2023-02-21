let jObj = [
    {
        "name": "Naumche",
        "status": true
    },
    {
        "name": "Tom",
        "status": false
    },
    {
        "name": "Learn JavaScript",
        "status": true
    }
];

jObj.forEach(el =>console.log(el.name));

let obj2 = JSON.stringify(jObj);
console.log(typeof obj2);

