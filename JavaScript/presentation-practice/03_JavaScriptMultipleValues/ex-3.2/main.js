const shoppingList=[];

shoppingList.splice(0,0,"Milk","Bread","Apples")

shoppingList.splice(1,1,"Bananas", "Eggs");
console.log(shoppingList);

let delVal = shoppingList.pop();

console.log(delVal);
console.log(shoppingList);
console.log(shoppingList.sort());

console.log(shoppingList.indexOf("Milk"));
shoppingList.splice(1,0,"Carrots","Lettuce");

let newArray = ["Juice","Pop"];
let combinedArray = shoppingList.concat(newArray);
let combinedArray1 = combinedArray.concat(newArray);

console.log(combinedArray1.lastIndexOf("Pop"));
console.log(combinedArray1);


//
let someArray=[1,2,3];

let arrayOfArray = [someArray,someArray,someArray];
console.log(arrayOfArray[1][1]);
