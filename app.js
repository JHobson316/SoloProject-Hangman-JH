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
let usedLetters = document.getElementById("usedLetters");
let wordDisplay = document.getElementById("wordDisplay");
let lives = 6;

// Variable declaration
let sports = "baseball basketball football badminton fencing jousting volleyball tennis cycling hurdles diving dodgeball nascar".split(" ");
let tvShows = ["bobs-burgers", "the-good-place", "the-walking-dead",
    "the young-and-the-restless", "drake-and-josh", "icarly", "the-boys"];
let movies = ["baby driver", "the-avengers", "pulp-fiction", "inception",
    "interstellar", "forrest-gump", "parasite", "aliens", "terminator", "soul",
    "moana", "lion-king", "the-mitchells-vs-the-machines"];
let allArrays = [];

// Setting up extra arrays pulled from python file

let p = "bulbasaur ivysaur venusaur charmander charmeleon \
charizard squirtle wartortle blastoise caterpie metapod \
butterfree weedle kakuna beedril pidgey pidgeotto pidgeot \
rattatta raticate spearow fearow ekans arbok pikachu\
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


// Insporation and solution from https://github.com/SimonLeclere/discord-hangman
// Credit where credit is due
// Hangman Pictures (Currently very much not working)
function selectWord(){
    wordDisplay.innerHTML = " ";
    let chosenArray = select.value;
    console.log(select.value); // Works
    let selectedArray = allArrays[chosenArray];
    console.log(selectedArray) // Works
    let randIndex = Math.floor(Math.random() * selectedArray.length);
    let selectedWord = selectedArray[randIndex];
    let letterArray = selectedWord.split("");
    console.log(selectedWord.split(""));
    displayWord(letterArray);
}


// Functions
reset.addEventListener('click', function (e) {
    e.preventDefault();
    selectWord();
});
start.addEventListener('click', function (e) {
    e.preventDefault();
    if (letterArray.includes(guess)){
        
    }

})
function displayWord(wordArray) {
    let blanks = [];
    wordArray.forEach(i => {
        if (wordArray[i]=="-"){
            blanks.push("-");
        }
        else{
            blanks.push("_");
        }
    })
    console.log(blanks);
    for (let i = 0; i<blanks.length; i++){
    wordDisplay.innerHTML = wordDisplay.innerHTML + blanks[i] +" ";
    }
}
selectWord();
//function start(){

//}