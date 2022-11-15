let hands = ['Rock', 'Papers', 'Scisors']


function getComputerChoice() {
    let randHands = hands[Math.floor(Math.random() * hands.length)]
    return randHands
}

console.log(getComputerChoice())

// function playRound(playerSelection, computerSelection) {
//     // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));