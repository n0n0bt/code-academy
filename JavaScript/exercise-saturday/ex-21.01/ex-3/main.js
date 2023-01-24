

function start_spec_str(str) {

  if(str > 4){
    return false;
  } else if(str.startsWith("Java")) {
    return true;
  } 
    else if(str.startsWith("java")){
      return true;
    }else{
    return false;
  }

}



console.log(start_spec_str("java"));
console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Pyton"));