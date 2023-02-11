// Recursive function

function logRecursive(nr) {
    
    console.log("Started function:", nr);
    if (nr > 0) {
        logRecursive(nr - 1); // or (--nr)
    } else { 
        console.log("done with recirson");
    }
    console.log("Ended Function", nr);
    
}

logRecursive(3)