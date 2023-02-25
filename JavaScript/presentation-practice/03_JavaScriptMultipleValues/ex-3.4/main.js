let myCar = {
    make:"Ferrari",
    model:"Cayon",
    color: "Red",
    speed: 320,
    racingCar: false
};
console.log("My car color: ", myCar.color);


let prop = "color";
myCar[prop] = "Blue";
console.log("MyCar new color: ", myCar.color);                                                                                             


prop = "forSale";
myCar[prop] = true;

console.log(`Car ${myCar.make} ${myCar.model} ${myCar.speed}`);
console.log("For sale: ", myCar.forSale ? "Yes" : "No"); 


/* let company = {
    companyName:"Healthy Candy",
    activity: "food manufacturing",
    adress: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment : 2021
}; 

console.log(company.adress.city);
*/


let company = {
    companyName:"Healthy Candy",
    activity: ["food manufacturing", "improving kid's health", "manifacturing toys"],
    adress: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment : 2021
};

company.activity.pop(); // delete the last item

console.log(company.activity);

combinationOfArrElementsInObj = `${company.activity[1]} ${company.activity[0]}`;

console.log(combinationOfArrElementsInObj);