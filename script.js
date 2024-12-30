const min = 1;
const max = 10; // Updated the range to 1-10
let randomNumber = generateRandomNumber(min, max);
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const playAgainButton = document.getElementById("play-again");

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

submitButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    feedback.textContent = "⛔ Please enter a valid number!";
    feedback.style.color = "red";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    feedback.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    feedback.style.color = "limegreen";
    submitButton.classList.add("hidden");
    playAgainButton.classList.remove("hidden");
  } else if (guess < randomNumber) {
    feedback.textContent = "📉 Too low! Try again.";
    feedback.style.color = "yellow";
  } else {
    feedback.textContent = "📈 Too high! Try again.";
    feedback.style.color = "yellow";
  }
});

playAgainButton.addEventListener("click", () => {
  attempts = 0;
  randomNumber = generateRandomNumber(min, max);
  guessInput.value = "";
  feedback.textContent = "";
  submitButton.classList.remove("hidden");
  playAgainButton.classList.add("hidden");
});
