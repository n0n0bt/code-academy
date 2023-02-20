let love = "I love JavaScript";

// let replacedLove = love.replace("I love JavaScript", "2 l3v1 j0v0scr2pt");
// console.log(replacedLove);

let lowerCaseLove = love.toLowerCase();

let vowels = ["a","e","i","o","u"];

for (let i = 0; i < vowels.length; i++) {
    lowerCaseLove = lowerCaseLove.replaceAll(vowels[i], i)
    
}

console.log(lowerCaseLove);


