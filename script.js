const result = document.querySelector('.result');
const score = document.querySelector('#humanScore');
const computerScore = document.querySelector('#computerScore');
const drawScore = document.querySelector('#drawScore');

let humanScoreNumber = 0
let computerScoreNumber = 0
let drawScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "It's a Draw!";
        drawScoreNumber++
        drawScore.innerHTML = drawScoreNumber
        return;
    }

    const humanBeats = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (humanBeats[human] === machine) {
        result.innerHTML = "You Win!";
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "You Lose!";
        computerScoreNumber++
        computerScore.innerHTML = computerScoreNumber
    }
};

/*
Papel => Pedra => Tesoura
*/

