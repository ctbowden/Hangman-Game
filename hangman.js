// Wrestling History Hangman Game
// 3rd Week UNC Coding Bootcamp
// Oct. 7-14, 2017
// By Charles Bowden


// Possible Variables

// Word Bank Array
var superstar = ["Hulk Hogan", "Jim Cornette", "Rowdy Roddy Piper", "Jake The Snake Roberts"]
};

// Way to Generate Random Word choice by computer
var randomWord = Math.floor(Math.random()*superstar.length);



// Code to watch for keypress:  http://unixpapa.com/js/key.html
// Code modified from Car Game
document.onkeypress = function(event) {
	event = event || window.event;
	var charCode = event.keyCode || event.which;
	var charStr = String.fromCharCode(charCode);
	alert(charStr);
}


// Way to Limit Choices to letters

// Function to Process a keystroke? This would update usedbank, apply letter to current word..


// Code to Initialize the Game


// Game Win condition





