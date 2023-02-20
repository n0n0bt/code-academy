let someString = "This is some STRING with Upper and lowercase words";

function manipulate(val) {
    let lowerCase = val.toLowerCase();
    let splitted = lowerCase.split(" ");
    let capitalized = [];

    

    splitted.forEach(function (word) {
        const firstLetter = word.slice(0, 1).toUpperCase();
        const remainingLetters = word.slice(1);
        const capitalizedWord = firstLetter + remainingLetters;
        capitalized.push(capitalizedWord);

    })

    const updatedWords = capitalized.join(" ");
    return updatedWords;
}

console.log(manipulate(someString));