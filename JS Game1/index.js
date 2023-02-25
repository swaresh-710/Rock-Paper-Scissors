const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const WinnerResult = document.getElementById("results");
let userChoice;

const possibleChoices = document.querySelectorAll("button");

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // method --> using ternary operator here below
  // same as using all that if statments
  // this is chaining of ternary operators
  computerChoice =
    randomNumber === 1 ? "Rock" : randomNumber === 2 ? "Paper" : "Scissor";

  computerChoiceDisplay.innerHTML = computerChoice;
}

function Winner() {
  winner =
    userChoice == computerChoice
      ? "It is a tie"
      : userChoice == "Rock" && computerChoice == "Paper"
      ? "You Lose"
      : userChoice == "Rock" && computerChoice == "Scissor"
      ? "You Win"
      : userChoice == "Paper" && computerChoice == "Rock"
      ? "You Win"
      : userChoice == "Paper" && computerChoice == "Scissor"
      ? "You Lose"
      : userChoice == "Scissor" && computerChoice == "Rock"
      ? "You Lose"
      : "You Win";

  WinnerResult.innerHTML = winner;
}

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();

    Winner();
  })
);
