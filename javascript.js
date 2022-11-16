const hands = ['Rock', 'Papers', 'Scisors']


function getComputerChoice() {
    let randHands = hands[Math.floor(Math.random() * hands.length)]
    return randHands
}

function getPalyerSelection(nb) {
    if (nb == 1) {
        return "Rock"

    } else if (nb == 2) {
        return "Papers"

    } else {
        return "Scisors"

    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection == "Rock") || (playerSelection === "Papers" && computerSelection == "Papers") || (playerSelection === "Scisors" && computerSelection == "Scisors")) {
        return ("Draw ! "  + playerSelection + " equals " + computerSelection)

    } else if ((playerSelection === "Papers" && computerSelection == "Rock") || (playerSelection === "Scisors" && computerSelection == "Papers") || (playerSelection === "Rock" && computerSelection == "Scisors")) {
        return ("You win ! " + playerSelection + " beats " + computerSelection)

    } else {
        return ("You lost :(, " + computerSelection + " beats " + playerSelection)
    }
}


let playerSelectionPrompt // = undefined
let playerSelection // = undefined

let computerSelection // = undefined

const choices = ["1", "2", "3", "Exit"]



while (playerSelectionPrompt != "Exit") {
    
    playerSelectionPrompt = prompt("Please submit your choice : \n 1 : Rock \n 2 : Papers \n 3 : Scisors \n\n Submit Exit to quit")

    while (!playerSelectionPrompt ) {
        alert("Wrong input ! You must submit a number between 1 and 3 !!")
        playerSelectionPrompt = prompt("Please submit your choice : \n 1 : Rock \n 2 : Papers \n 3 : Scisors")
    }

    playerSelection = getPalyerSelection(playerSelectionPrompt)
    computerSelection = getComputerChoice()


    alert("Computer's choice was : ", computerSelection)
    alert(playRound(playerSelection, computerSelection))

}

alert("Bye Bye !")



