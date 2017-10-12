// Wrestling History Hangman Game
// 3rd Week UNC Coding Bootcamp
// Oct. 7-14, 2017
// By Charles Bowden

// resources: http://apprize.info/javascript/kids/7.html
//

// Possible Variables

// Word Bank Array
var superstar = ["Hulk Hogan", "Jim Cornette", "Rowdy Roddy Piper", "Jake The Snake Roberts", "Bret Hitman Hart", "Big Boss Man", "John Cena", "Ric Flair"];

var randomWord; // stores randomly selected word for hangman game

// Number of Lives aka misses
var lives = 6;

// empty array of guessed letters
var guessedLetters = [];

// incorrect guesses array to store wrong guesses
var wrongLetters = [];

// creating the answer blanks using an array with for loop
var mysteryWord = [];


// Setup Function
function setup() {
	randomWord = superstar[Math.floor(Math.random()*superstar.length)].toUpperCase();
	
	for (i = 0; i < randomWord.length; i++) {
		if (randomWord.charAt(i) === " ") {
			mysteryWord[i] = "!";
		}
		else{
			mysteryWord[i] = "_";
		}

	}

	for (i = 0; i < mysteryWord.length; i++) {
		document.getElementById("MysteryWrestler").innerHTML = document.getElementById("MysteryWrestler").innerHTML + "  " + mysteryWord[i];
	}
}

// Accept Key Press then assuming it's a letter then compare that letter to the letters already that have been entered, 
// then compare to the actual word probably a for loop and an if statement 

// Captures keyboard input
document.onkeyup = function(event) {
	//captures the key press, converts it to lowercase and saves it as variable named letter
	var letter = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(letter);
	// checks letter variable to ensure it's an acceptable character
	
// 	if (letter >= "a" && letter <= "z"){
// 		for (q=0; q < mysteryWord.length; q++) {
// 			if (mysteryWord.charAt(q) = letter) {
// 				mysteryWord.indexOf(q) = letter;
// 			}

// 		}
// 	}
// Check the array and fill blanks with chosen letters
	for (j = 0; j < randomWord.length; j++) {
		if (randomWord[j].charAt(0) === letter) {
			// update array with letter
			mysteryWord[j] = letter;
			// Update Hangman black spaces
			document.getElementById("MysteryWrestler").innerHTML = mysteryWord;
			} else {
				guessedLetters[j] = letter;
			}
	}

			// deduct a life
			lives--;
			
			// rewrite lives div
			document.getElementById("lives").innerHTML = lives;
			// update wrong letter variable
			

			// write to HTML the missed guesses
			document.getElementById("guessed").innerHTML = guessedLetters[j];
			

	

} 

setup();
