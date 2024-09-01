let randNumber;
let playAgainButton = document.getElementById('playAgainButton');
let submitButton = document.getElementById('submitButton');

// Start a new game
function startNewGame() {
    randNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    playAgainButton.style.display = 'none';
    submitButton.style.display = 'inline'; // Show the submit button
}

// Check the player's guess
function checkGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');

    if (isNaN(guess) || guess < 1 || guess > 20) {
        message.textContent = "Please enter a number between 1 and 20.";
        return;
    }

    if (guess < randNumber) {
        message.textContent = "The guess is too low!";
    } else if (guess > randNumber) {
        message.textContent = "The guess is too high!";
    } else {
        message.textContent = "Congratulations! You guessed the number!";
        playAgainButton.style.display = 'inline'; // Show the play again button
        submitButton.style.display = 'none'; // Hide the submit button
    }
}

// Event Listeners
submitButton.addEventListener('click', checkGuess);
playAgainButton.addEventListener('click', startNewGame);

// Initialize the game
startNewGame();
