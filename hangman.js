// Wrestling History Hangman Game
// 3rd Week UNC Coding Bootcamp
// Oct. 7-14, 2017
// By Charles Bowden

// resources: http://apprize.info/javascript/kids/7.html
//

// Possible Variables

// Word Bank Array
var superstar = ["Hulk Hogan", "Jim Cornette", "Rowdy Roddy Piper", "Jake The Snake Roberts"];

// Way to Generate Random Word choice by computer
var randomWord = superstar[Math.floor(Math.random()*superstar.length)];

// creating the answer blanks using an array
var mysteryWord = [];

for (var i = 0; i < randomWord.length; i++) {
	mysteryWord[i] = "_";
}

//Display Blanks for MysteryWord



var remainingLetters = randomWord.length;

// Game Loop
while (remainingLetters > 0) {
	// Game Code
	// Update Progress
	document.querySelector("#randomWord").innerHTML = mysteryWord.join(" ");

	// Take input from player
	document.onkeypress = function(event){
		var guess = String.fromCharCode(event.keyCode).toLowerCase();
	}
	
		if (lives > 0) {
			//update the game state
			for (var j = 0; j < randomWord.length; j++) {
			if (randomWord[j] === guess) {
				mysteryWord[j] = guess;
				remainingLetters--;
				}
			}
		}

	// Update mysteryWord and remainingLetters for every guess


};

// Number of Chances Variable
var lives = 10;

// Variables for scores
var wins = 0;
var losses = 0;


var guessedLetters = [];




// Code to watch for keypress:  http://unixpapa.com/js/key.html
// Code modified from Car Game
document.onkeypress = function(event) {
	event = event || window.event;
	var charCode = event.keyCode || event.which;
	var charStr = String.fromCharCode(charCode);
	alert(charStr);
}


// Function that updates the score...
function updateScore() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

// Way to Limit Choices to letters

// Function to Process a keystroke? This would update usedbank, apply letter to current word..


// Code to Initialize the Game


// Game Win condition





