// Wrestling History Hangman Game
// 3rd Week UNC Coding Bootcamp
// Oct. 7-14, 2017
// By Charles Bowden

// resources: http://apprize.info/javascript/kids/7.html
//

// Possible Variables

// Word Bank Array
var superstar = ["Hulk Hogan", "Jim Cornette", "Rowdy Roddy Piper", "Jake The Snake Roberts", "Bret Hitman Hart", "Big Boss Man",
				 "John Cena", "Ric Flair", "The Miz", "Seth Rollins", "Dean Ambrose", "Dusty Rhodes", "Arn Anderson", "Charlotte", "Sasha Banks"
				 "Vince McMahon", "Magnum TA", "Degeneration X", "Hardy Boyz", "Jeff Hardy", "Matt Hardy", "Rock N Roll Express", "Road Warriors", 
				 "Stone Cold Steve Austin", "The Rock", "Mick Foley", "Triple H", "Chris Jericho", "Jimmy Valiant", "Gordon Sole", "Jerry The King Lawler",
				 "Lita", "Junkyard Dog", "Macho Man Randy Savage", "Miss Elizabeth", "Dudley Boyz", "Edge and Christian", "Roman Reigns", "Braun Strowman", 
				 "Brock Lesnar", "Paul Heyman", "The Undertaker", "Booker T", "Ricky The Dragon Steamboat", "Tully Blanchard", "Ole Anderson", "Bobby Eaton", 
				 "Mr Fuji", "Terry Funk"];

var randomWord; // stores randomly selected word for hangman game
var lives = 9; // variable to hold Number of Lives aka invalid guesses
var guessedLetters = []; // empty array of guessed letters
var wrongLetters = []; // incorrect guesses array to store wrong guesses
var mysteryWord = [];// creating the answer blanks using an array with for loop
var wins = 0; // tracking wins
var losses = 0; // tracking losses

// Setup Function
function setup() {
	// generates random word for the hangman game to use taken from superstar array of possible choices
	randomWord = superstar[Math.floor(Math.random()*superstar.length)].toUpperCase();
	// set starting lives
	document.getElementById("lives").innerHTML = lives;
	// Span the randomWord array, then write "!" where that string has empty spaces and fill characters with "_" to create mysteryWord variable
	for (i = 0; i < randomWord.length; i++) {
		if (randomWord.charAt(i) === " ") {
			mysteryWord[i] = "!";
		}
		else{
			mysteryWord[i] = "_";
		}

	}
	// Display the mysteryWord array on the HTML page with spaces separating the characters
	for (i = 0; i < mysteryWord.length; i++) {
		document.getElementById("MysteryWrestler").innerHTML = document.getElementById("MysteryWrestler").innerHTML + "  " + mysteryWord[i];
	}
}

// Captures keyboard input
document.onkeyup = function(event) 
{
	//captures the key press, converts it to lowercase and saves it as variable named letter
	var letter = String.fromCharCode(event.keyCode).toUpperCase();
	// Check to see if keystroke is valid
	if (randomWord.indexOf(letter) === -1 && wrongLetters.indexOf(letter) === -1){
		// Add to guessedLetters
		guessedLetters.push(letter);
		// Add guess to wrong guesses
		wrongLetters.push(letter);
		// Write to Missed Letters Bank on HTML
		document.getElementById("guessed").innerHTML = wrongLetters;
		// deduct life
		lives = lives - 1;
		// check win condition
		if (lives === 0){
			// Alert to Game Loss
			alert("you lose");
			// Increase Losses
			losses = losses + 1;
			// update HTML with Losses
			document.getElementById("losses").innerHTML = losses;
			// Start New Game
			newGame();
		}
			//update lives to reflect lost life
		document.getElementById("lives").innerHTML = lives;
	} else {
		// update guesses
		guessedLetters.push(letter);
		// Check the array and fill blanks with chosen letters
		for (j = 0; j < randomWord.length; j++) {
			if (randomWord[j].charAt(0) === letter) 
				{
				// update array with letter
				mysteryWord[j] = letter;
				// Update Hangman black spaces
				document.getElementById("MysteryWrestler").innerHTML = mysteryWord;
				} 
			}
		// Check for Win here?
		if (mysteryWord.indexOf("_") === -1){
			alert("You're a Winner");
			//increase wins
			wins = wins + 1;
			// Write Wins to HTML
			document.getElementById("wins").innerHTML = wins;
			// setup new game
			newGame();
		}
	}
}
	
function newGame() {
	randomWord = []; // stores randomly selected word for hangman game
	lives = 9; // variable to hold Number of Lives aka invalid guesses
	guessedLetters = []; // empty array of guessed letters
	wrongLetters = []; // incorrect guesses array to store wrong guesses
	mysteryWord = [];// creating the answer blanks using an array with for loop
	document.getElementById("MysteryWrestler").innerHTML = "";
	document.getElementById("guessed").innerHTML = "";
	setup();
}

setup();
