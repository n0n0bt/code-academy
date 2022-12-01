const storeItems = [];

let item1 = {
    name:"Ferarri",
    model:"cayon",
    cost:"310000",
    quantity:"5"
}

let item2 = {
    name:"Porsche",
    model:"Panamera",
    cost:"200000",
    quantity:"6"
}

let item3 = {
    name:"BMW",
    model:"M7",
    cost:"250000",
    quantity:"7"
}

storeItems.push(item1, item2, item3);

console.log(storeItems);

console.log(storeItems[2].quantity);
