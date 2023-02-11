let someString = "1000";

( () =>  {
    let someString = "2000";
    console.log(someString);
})();


let result = (function() {
    let value = "Return Local val";
    return value;
})();

console.log(someString);
console.log(result);


(function (par1){
    value = par1;
})("Global 10000");

console.log(value);