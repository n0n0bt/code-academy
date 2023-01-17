// 1. Write a JavaScript function to calculate the sum of values in an array.

// function is_Natural(n) 
//       {
// 	   if (typeof n !== 'number') 
// 	        return 'Not a number'; 
			
// 	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
// 	    }


// console.log(is_Natural(-15));



function sum(arr) {
    let sumOfArr = 0;
    for (const element of arr) {
      if(!isNaN(element)) {
        sumOfArr += element;
      }
    }

    return sumOfArr;
}


console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));
