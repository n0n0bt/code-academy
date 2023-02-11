let phrases = ["veterinary","zoologist","vegetables","laundry","whirlwind","quadruplets","xylophonist"];

const mainGame = {
    word: "",
    solution: "",
    pageElements: [],
    numOfLetters: 0
}

const gameArea = document.getElementsByClassName("gameArea");
const score = document.querySelector(".score");
const puzzle = document.querySelector(".puzzle");
const letters = document.querySelector(".letters");
const button = document.querySelector("button");

button.addEventListener("click", startGame); // launch a function called startGame()

function startGame() {
    if (phrases.length > 0) {
        button.style.display = "none";
        mainGame.pageElements = [];
        mainGame.numOfLetters = 0;
        mainGame.word = phrases.shift();
        mainGame.solution = mainGame.word.split("");
        builder();

    }
}

function builder() {
    puzzle.innerHTML = "";
    letters.innerHTML = "";
    for (const letter of mainGame.solution) {
        let element = generatePageEl("p", puzzle, "-", "boxE");
        if (letter === " ") {
            element.textContent = "";
            element.style.borderColor = "white";
        } else {
            mainGame.numOfLetters++; // or + 1
        }
        mainGame.pageElements.push(element);
        updateScore();
    }

    for (let i = 0; i < 26; i++) {
        const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
        let char = alphabet[i];
        // let char = String.fromCharCode(i);

        let myElement = generatePageEl("div", letters, char, "box");
        myElement.addEventListener("click", checker);
        
    }
}

function generatePageEl(tagName,parent,outputContent,classOfEl) {
    let myElement = document.createElement(tagName);
    myElement.classList.add(classOfEl);
    parent.append(myElement);
    myElement.textContent = outputContent;
    return myElement;
}

function checker() {
    this.classList.remove("box");
    this.classList.add("boxD");
    this.style.backgroundColor = "lightBlue";
    this.removeEventListener("click", checker);
    checkLetter(this.textContent);
}

function checkLetter(letter) {
    mainGame.solution.forEach((element, index) => {
        if (element.toUpperCase() === letter) {
            mainGame.pageElements[index].textContent = letter;
            mainGame.numOfLetters--;
            updateScore();
        }
    });
}

function updateScore() {
    if (mainGame.numOfLetters === 0) {
        score.textContent = "GAME OVER";
        puzzle.textContent = "";
        button.style.display = "block";
    } else {
        score.textContent = mainGame.numOfLetters;
    }
}

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.style.display = "none";
resetButton.addEventListener("click", resetGame);
gameArea[0].append(resetButton);

function resetGame() {
    puzzle.innerHTML = "";
    letters.innerHTML = "";
    score.textContent = "";
    mainGame.numOfLetters = 0;
    mainGame.word = "";
    mainGame.solution = "";
    mainGame.pageElements = [];
    resetButton.style.display = "none";
    button.style.display = "block";
}



