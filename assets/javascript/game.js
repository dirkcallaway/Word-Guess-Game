//Variables
var wordBank = [
    "eleven",
    "hawkins",
    "mike",
    "demogorgon",
    "hopper",
    "eggos",
    "will",
    "joyce",
    "jonathan",
    "steve",
    "upsidedown",
    "dustin",
    "compass",
    "lights"
];
var targetWord = "";
var targetWordArray = [];
var dashedWord = [];
var guessedLetters = "";
var userGuess = "";
var userGuessCode;
var numberOfGuesses;
var newGame = false;
var completedWords = [];

var soundYeah = new Audio("assets/yeah.mp3");

var dashes = document.getElementById("dashed-letters");
var gletters = document.getElementById("guessed-letters");
var remainingGuesses = document.getElementById("remaining-guesses");
var completedWordsList = document.getElementById("completed-words");


//Functions

//Selects a word from the word bank and sets # of guesses
//Also Resets game
var getNewWord = function () {
    console.log("I picked a new word.");
    var randomNumber = Math.floor((Math.random() * 14));
    targetWord = wordBank[randomNumber];
    targetWordArray = targetWord.split('');
    numberOfGuesses = 10;
    dashForLetters();
    dashes.textContent = dashedWord.join(" ");
    remainingGuesses.textContent = (numberOfGuesses);
    //Clears guessed letters when new word is chosen
    guessedLetters = "";
    gletters.textContent = guessedLetters;
}


//Creates an array of _'s the same length as the target word
var dashForLetters = function () {
    dashedWord = [];
    for (var i = 0; i < targetWord.length; i++) {
        dashedWord.push("_");
    }
}

//Only registers aplhabet keys pressed and adds them to guessed letters
var guessedLettersList = function () {
    if (userGuessCode >= 65 && userGuessCode <= 90) {
        numberOfGuesses--;
        guessedLetters += userGuess + ", ";
        gletters.textContent = guessedLetters;
        dashes.textContent = dashedWord.join(" ");
    }
}

//Function that compares if arrays are equal
var equalArrays = function () {
    var twStr = targetWordArray.toString();
    var dwStr = dashedWord.toString();
    if (twStr === dwStr) {
        soundYeah.play();
        //Add Target word to "Completed Words" div in HTML
        completedWords.push(targetWord);
        completedWordsList.textContent = completedWords;
        getNewWord();
        guessedLetters = "";
    }
}

//Checks user guess against target word and replaces _ with letter
var checkTargetWord = function () {
    for (var i = 0; i < targetWordArray.length; i++) {
        if (userGuess === targetWordArray[i]) {
            dashedWord[i] = userGuess;
        }
    }
    guessedLettersList();
    equalArrays();
    remainingGuesses.textContent = (numberOfGuesses);

}




//Calls
getNewWord();
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    userGuessCode = event.keyCode;

    if (numberOfGuesses > 1) {
        checkTargetWord();
    } else {
        getNewWord();
    }


}