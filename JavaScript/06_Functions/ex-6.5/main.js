let value = "1000";


(() => {
    let value = "1500";
})();


let result = (function (){
    let value = "Return Local 1500";
    return value;
})();

console.log(result);
console.log(value);


(function (par1){
    value = par1;
})("Global 10000");

console.log(value);


