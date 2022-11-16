const hands = ['Rock', 'Papers', 'Scisors']
const choices = ["1", "2", "3", "Exit"]

let playerSelectionPrompt // = undefined
let playerSelection // = undefined

let computerSelection // = undefined

let round = 1

let computerScore = 0
let playerScore = 0

// Get random hand choice (Computer)
function getComputerChoice() {
    let randHands = hands[Math.floor(Math.random() * hands.length)]
    return randHands
}

// Get hand from the player's input
function getPalyerSelection(nb) {
    if (nb == 1) {
        return "Rock"

    } else if (nb == 2) {
        return "Papers"

    } else {
        return "Scisors"

    }
}

// Determines the winner
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection == "Rock") || (playerSelection === "Papers" && computerSelection == "Papers") || (playerSelection === "Scisors" && computerSelection == "Scisors")) {
        return ("Draw ! "  + playerSelection + " equals " + computerSelection)

    } else if ((playerSelection === "Papers" && computerSelection == "Rock") || (playerSelection === "Scisors" && computerSelection == "Papers") || (playerSelection === "Rock" && computerSelection == "Scisors")) {
        playerScore ++
        return ("You win ! " + playerSelection + " beats " + computerSelection)

    } else {
        computerScore ++
        return ("You lost ! " + computerSelection + " beats " + playerSelection)
    }
}


// Main
function game(playerInputPrompt) {

    // Verifies that player submitted the right typo
    while (!choices.includes(playerInputPrompt)) {
        alert("Wrong input ! You must submit a number between 1 and 3, or Exit !")
        playerInputPrompt = prompt("Round " + round + "\nPlease submit your choice : \n   1 : Rock \n   2 : Papers \n   3 : Scisors \n   Exit : to quit game \n\nYour score : " + playerScore + "\nComputer's score : " + computerScore + "\n\n")
    }
    // Run the game while the player's input != Exit
    while (playerInputPrompt != "Exit") {

        playerSelection = getPalyerSelection(playerInputPrompt)
        computerSelection = getComputerChoice()

        alert("The computer played " + computerSelection)
        alert(playRound(playerSelection, computerSelection))

        // Restart
        round++
        playerInputPrompt = prompt("Round " + round + "\nPlease submit your choice : \n   1 : Rock \n   2 : Papers \n   3 : Scisors \n   Exit : to quit game \n\nYour score : " + playerScore + "\nComputer's score : " + computerScore + "\n\n")
        while (!choices.includes(playerInputPrompt)) {
            alert("Wrong input ! You must submit a number between 1 and 3, or Exit !")
            playerInputPrompt = prompt("Round " + round + "\nPlease submit your choice : \n   1 : Rock \n   2 : Papers \n   3 : Scisors \n   Exit : to quit game \n\nYour score : " + playerScore + "\nComputer's score : " + computerScore + "\n\n")
        }

    }

    alert("Bye bye !")

}


game(prompt("Round " + round + "\nPlease submit your choice : \n   1 : Rock \n   2 : Papers \n   3 : Scisors \n   Exit : to quit game \n\nYour score : " + playerScore + "\nComputer's score : " + computerScore + "\n\n"))




