let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let chancesLeft = 5;

document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = document.getElementById('guessInput').value;
    attempts++;
    chancesLeft--;
    let feedbackMessage = '';

    if (!userGuess || isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackMessage = 'Please enter a valid number between 1 and 100.';
        chancesLeft++;  // Do not count invalid guesses
    } else if (userGuess < randomNumber) {
        feedbackMessage = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        feedbackMessage = 'Too high! Try again.';
    } else {
        feedbackMessage = `Correct! You guessed the number in ${attempts} attempts.`;
        document.getElementById('restartGame').style.display = 'inline-block';
        document.getElementById('submitGuess').disabled = true;
    }

    if (chancesLeft <= 0 && userGuess != randomNumber) {
        feedbackMessage = `Out of chances! The correct number was ${randomNumber}.`;
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('restartGame').style.display = 'inline-block';
    }

    document.getElementById('feedback').innerText = feedbackMessage;
    document.getElementById('attempts').innerText =` Attempts: ${attempts}`;
    document.getElementById('chances').innerText = `Chances Left: ${chancesLeft}`;
});

document.getElementById('restartGame').addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    chancesLeft = 5;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('attempts').innerText = 'Attempts: 0';
    document.getElementById('chances').innerText = 'Chances Left: 5';
    document.getElementById('submitGuess').disabled = false;
    this.style.display = 'none';
});