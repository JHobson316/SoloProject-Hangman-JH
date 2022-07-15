"use strict"

// Hello! This project is an improved version of a hangman script that I made in Python 3 years ago
// Some code is transferred from that file and reformatted to fit into js

// DOM Elements
let mainContainer = document.getElementById("main-container");
let hangmanDisplay = document.getElementById("hangman-display");
let guessField = document.getElementById("guess-field");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let guess = document.getElementById("guess");
let select = document.getElementById("select");
let usedLetters = document.getElementById("missedLetters");
let wordDisplay = document.getElementById("wordDisplay");
let lives = 6;
let keyboard = document.getElementById("keyboard");
let letter = document.getElementsByClassName("letter");
let canvas = document.getElementById("canvas");

// Variable declaration
let sports = "baseball basketball football badminton fencing jousting volleyball tennis cycling hurdles diving dodgeball nascar".split(" ");
let tvShows = ["bobs-burgers", "the-good-place", "the-walking-dead",
    "the young-and-the-restless", "drake-and-josh", "icarly", "the-boys"];
let movies = ["baby-driver", "the-avengers", "pulp-fiction", "inception",
    "interstellar", "forrest-gump", "parasite", "aliens", "terminator", "soul",
    "moana", "lion-king", "the-mitchells-vs-the-machines"];
let allArrays = [];
let letterArray = [];
let missedLetters = [];
let blanks = [];
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Setting up extra arrays pulled from python file

let p = "bulbasaur ivysaur venusaur charmander charmeleon \
charizard squirtle wartortle blastoise caterpie metapod \
butterfree weedle kakuna beedril pidgey pidgeotto pidgeot \
rattatta raticate spearow fearow ekans arbok pikachu \
raichu sandshrew sandslash nidoran nidorina \
nidoqueen nidorino nidoking".split(" ");

let o = "ana ashe baptiste bastion brigitte dva doomfist genji hanzo junkrat lucio\
 cassidy mei mercy moira orisa pharah reaper reinhardt roadhog soldier sombra symmetra\
 torbjorn tracer widowmaker winston hammond zarya zenyatta".split(" ");

let u = "sans papyrus toriel flowey frisk mettaton napstablook alphys asriel kris ralsei\
 lancer susie undyne gaster berdly catty bratty noelle temmie egg chara asgore muffet\
 burgerpants".split(" ");

// Pushing all of the arrays to a single array
// Probably made this more complicated than it needed to be
allArrays.push(sports);
allArrays.push(tvShows);
allArrays.push(movies);
allArrays.push(p);
allArrays.push(o);
allArrays.push(u);
console.log(allArrays);
//Canvas Sketching
if (canvas.getContext) {
    // if true
    // Sketching out gallows
    const ctx = canvas.getContext('2d');
    ctx.beginPath()
    ctx.rect(50, 380, 200, 150)
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(70, 380);
    ctx.lineTo(70, 120);
    ctx.lineTo(180, 120);
    ctx.lineTo(180, 200);
    ctx.lineTo(150, 200);
    ctx.lineTo(150, 150);
    ctx.lineTo(105, 150);
    ctx.lineTo(105, 380);
    ctx.fill();
}


// Using a canvas chart to display the pictures
// Hangman Pictures (Currently very much not working)
function hangmanBody(lives) {
    if (lives == 5) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(165, 225, 25, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    if (lives == 4) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(165, 250);
            ctx.lineTo(165, 310);
            ctx.stroke();
        }
    }
    if (lives == 3) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(165, 250);
            ctx.lineTo(195, 275);
            ctx.stroke();
        }
    }
    if (lives == 2) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(165, 250);
            ctx.lineTo(135, 275);
            ctx.stroke();
        }
    }
    if (lives == 1) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(165, 310);
            ctx.lineTo(195, 335);
            ctx.stroke();
        }
    }
    if (lives == 0) {
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(165, 310);
            ctx.lineTo(135, 335);
            ctx.stroke();
        }
        alert("Game over! The secret word was " + letterArray.join("") + "!")
    }
}
// Functions

function selectWord() {
    wordDisplay.innerHTML = " ";
    let chosenArray = select.value;
    console.log(select.value); // Works
    let selectedArray = allArrays[chosenArray];
    console.log(selectedArray) // Works
    let randIndex = Math.floor(Math.random() * selectedArray.length);
    let selectedWord = selectedArray[randIndex];
    letterArray = selectedWord.split("");
    console.log(selectedWord.split(""));
    displayWord(letterArray);
}

// Resets the html page and selects a new word
reset.addEventListener('click', function (e) {
    usedLetters.innerHTML = "Wrong Letters: ";
    e.preventDefault();
    lives = 6;
    selectWord();
});
function displayWord(wordArray) {
    blanks = [];
    wordArray.forEach(i => {
        if (alphabet.includes(i)) {
            blanks.push("_");
        }
        else if (alphabet.includes(i) == false) {
            blanks.push("-");
            console.log("Help");
        }
    })
    actualDisplay(blanks);
}
function actualDisplay(array) {
    console.log(array);
    wordDisplay.innerHTML = " "
    for (let i = 0; i < array.length; i++) {
        wordDisplay.innerHTML = wordDisplay.innerHTML + array[i] + " ";
    }
}
selectWord();
// Event listeners for the entire class of buttons
for (const character of letter) {
    character.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("Bop");
        console.log(character.value);
        if (letterArray.includes(character.value)) {
            for (let i = 0; i < letterArray.length; i++) {
                if (letterArray[i] == character.value) {
                    blanks.splice(i, 1, letterArray[i]);
                    // Tracking both arrays 
                    console.log("Word: " + letterArray);
                    console.log("Progress: " + blanks);
                    actualDisplay(blanks);
                    // Check for a game win here
                    let yes = 0;
                    for (let i = 0; i < blanks.length; i++) {
                        if (blanks[i] == letterArray[i]) {
                            yes++
                            if (yes == letterArray.length) {
                                alert("Congratulations! You won!")
                            }
                        }
                    }
                }
            }
        }
        else {
            usedLetters.innerHTML = usedLetters.innerHTML + character.value + ", ";
            --lives;
            hangmanBody(lives);
        }
    })
}