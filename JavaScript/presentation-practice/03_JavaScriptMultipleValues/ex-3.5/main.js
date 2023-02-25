let people = {
    friends:[]
};

let first = {
    name: "Petar",
    lastName: "Petrovski",
    id: true
};

let second = {
    name: "Stojan",
    lastName: "Stojanovski",
    id: false
};

let third = {
    name: "Gjorgi",
    lastName: "Gjorgievski",
    id: true
};

people.friends.push(first, second, third);

console.log(people.friends[0].lastName);