// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data : console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true




function is_array(arr) {

    let isArr = false;
    
    if (Array.isArray(arr)) {
      isArr = true;
    }

    return isArr;
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));