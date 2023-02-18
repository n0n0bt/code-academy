// fetch("example.json")
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .catch((error) => "Something bad has happend")
//     .then((json) => console.log(json));

    

fetch("https://restcountries.com/v3.1/all")
.then((response) => response.json())
.catch((error) => "Something some bad has happend")
.then((json) =>
    json.forEach((obj) => {
    console.log(obj.name.common);
    })
);


