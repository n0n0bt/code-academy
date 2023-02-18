let names = ["Tom","Jerry","Scooby","Tasmanian","Tom","Peter","Jerry"];

let fitleredNames = names.filter(function (value, index, array) {
    const firstIndex = array.indexOf(value);

    if (firstIndex === index) {
        
        console.log(`[${index}] ${value} is unique`);

        return true;
    
    } else {
        console.log(`[${index}] ${value} is a duplicate`);
        return false;
    }
})

console.log(fitleredNames);