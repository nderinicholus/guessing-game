// Step 1: Declare the const: minNum, maxNum, result
const minNum = 23;
const maxNum = 103;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const numError = document.getElementById("numError");
const numSuccess = document.getElementById("numSuccess");
const textBox = document.getElementById("textBox");

// Step 2: Declare variables: attempts, guess & runing
let attempts = 0;
let guess;
let running = true;
const heading = document.getElementById("heading");
 heading.textContent = `Enter a number between ${minNum} - ${maxNum}`;

function submitGuess() {
  // while (running) {
  guess = Number(textBox.value);
  if (isNaN(guess)) {
    numError.textContent = "Guess not a NUMBER! Enter valid Number";
  } else if (guess < minNum) {
    numError.textContent = "Guess BELOW min number! Enter valid number.";
  } else if (guess > maxNum) {
    numError.textContent = "Guess ABOVE max number! Enter a valid number.";
  } else {
    attempts++;
    if (guess < answer) {
      numError.textContent = "Too LOW! Try again.";
    } else if (guess > answer) {
      numError.textContent = "Too HIGH! Try again.";
    } else {
      numSuccess.textContent = `CORRECT! Answer is ${answer}. You made ${attempts} attempts.`;
      numError.textContent = "";
      running = false;
    }
  }
}
// }
