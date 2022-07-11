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

// Variable declaration
let sports = [];
let tvShows = ["bobs burgers", "the good place", "the walking dead",
"the young and the restless", "drake and josh", "icarly", "the boys"];
let movies = ["baby driver", "The Avengers", ""];
let secretWord = "";
let allArrays = [];
let chosenArray = [];

// Setting up extra arrays pulled from python file

let P = "bulbasaur ivysaur venusaur charmander charmeleon \
charizard squirtle wartortle blastoise caterpie metapod \
butterfree weedle kakuna beedril pidgey pidgeotto pidgeot \
rattatta raticate spearow fearow ekans arbok pikachu\
raichu sandshrew sandslash nidoran nidorina \
nidoqueen nidorino nidoking".split(" ");

let O ="ana ashe baptiste bastion \
brigitte dva doomfist genji hanzo junkrat lucio mccree mei mercy moira \
orisa pharah reaper reinhardt roadhog soldier sombra symmetra torbjorn tracer \
widowmaker winston hammond zarya zenyatta".split()

let U ="sans \
papyrus toriel flowey frisk mettaton napstablook alphys asriel kris ralsei lancer \
susie undyne gaster berdly catty bratty noelle temmie egg chara asgore muffet \
burgerpants".split();

allArrays.push(sports);
allArrays.push(tvShows);
allArrays.push(movies);
allArrays.push(P);
allArrays.push(O);
allArrays.push(U);
console.log(allArrays);

// Functions

start.addEventListener('click', function(){
    secretWord();

});


function wordSelect(){
    let chosenArray = [];
    let randIndex = Math.floor(Math.random()*chosenArray.length);
}
//function start(){

//}
//function start(){

//}