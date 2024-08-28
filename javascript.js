playerInput = "rock";

score = 0;
// forgot to put () after Math.random and forgot to put * 3 into () of Math.floor
computerRandom = Math.floor(Math.random() * 3);
/* Set up for the computer's random answers.
Takes randomize integer from 0-2 and assigns intergers to string
*/
computerInput = ["Rock","Paper","Scissors"][computerRandom];

console.log(` player: ${playerInput} VS cpu: ${computerInput}`)

// function to check for winner between player and computer

const checkWinner = (playerInput, computerInput) => {
    playerInput = playerInput.toUpperCase();
    computerInput = computerInput.toUpperCase();
    if ((playerInput === "ROCK" && computerInput === "SCISSORS") || ((playerInput === "SCISSORS" && computerInput === "PAPER") || (playerInput === "PAPER" && computerInput === "ROCK"))) {
        console.log("Player wins");
        
    } else if (playerInput === computerInput) {
        console.log("Draw");

    } else {
        console.log("CPU wins!");
    }
}

checkWinner(playerInput, computerInput)