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
var targetWordArray=[];
var dashedWord = [];
var guessedLetters = "";
var userGuess = "";
var userGuessCode;
var numberOfGuesses;
var newGame = false;



//Functions

//Selects a word from the word bank and sets # of guesses
var getNewWord = function(){
    var randomNumber = Math.floor((Math.random() * 14));
    targetWord = wordBank[randomNumber];
    targetWordArray = targetWord.split('');
    numberOfGuesses = 10;
}

//Creates an array of _'s the same length as the target word
var dashForLetters = function(){
    for(var i=0; i < targetWord.length; i++){
        dashedWord.push("_");
    }
}

//Only registers aplhabet keys pressed
var guessedLettersList = function(){
    if(userGuessCode >= 65 && userGuessCode <= 90)
    guessedLetters += userGuess + ", ";
}

//Function that compares if arrays are equal
var equalArrays = function(){
    var twStr = targetWordArray.toString();
    var dwStr = dashedWord.toString();
    if(twStr === dwStr){
        console.log(twStr);
        console.log(dwStr);
        newGame = true;
        
    } else{
        console.log(twStr);
        console.log(dwStr);
        newGame = false;
    }
}

//Checks user guess against target word and replaces _ with letter
var checkTargetWord = function(){
    numberOfGuesses--;
    for(var i = 0; i < targetWordArray.length; i++){
        if(userGuess === targetWordArray[i]){
            dashedWord[i] = userGuess;
        }
    }
    equalArrays();
    if(newGame = true){
        getNewWord();
        console.log("I picked a new word.");
    }
    // targetWordArray.forEach(function(letter){
    //     if(userGuess === letter){
    //         var dashIndex = targetWordArray.indexOf(letter);
    //         dashedWord[dashIndex] = letter;
    //         if(targetWordArray === dashedWord){
    //             getNewWord();
    //         }
    //     }
    // });
}




//Calls
getNewWord();
dashForLetters();
document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    userGuessCode = event.keyCode;

    checkTargetWord();
    guessedLettersList();
    
}