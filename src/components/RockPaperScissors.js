import React, { useState } from 'react';
import './RockPaperScissors.css';

function RockPaperScissors() {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [resultText, setResultText] = useState('');
    const [showRematch, setShowRematch] = useState(false);

    const getComputerChoice = () => {
        const options = ["rock", "paper", "scissors"];
        return options[Math.floor(Math.random() * options.length)];
    };

    const handleClick = (playerChoice) => {
        const computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            setPlayerScore(prev => prev + 1);
            setComputerScore(prev => prev + 1);
            setResultText(`It's a Draw! Player's score: ${playerScore + 1}, Computer's score: ${computerScore + 1}`);
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {
            setPlayerScore(prev => prev + 1);
            setResultText(`You win! ${playerChoice} beats ${computerChoice}. Player's score: ${playerScore + 1}, Computer's score: ${computerScore}`);
        } else {
            setComputerScore(prev => prev + 1);
            setResultText(`You Lose! ${computerChoice} beats ${playerChoice}. Player's score: ${playerScore}, Computer's score: ${computerScore + 1}`);
        }

        if (playerScore + 1 >= 5 || computerScore + 1 >= 5) {
            setShowRematch(true);
        }
    };

    const handleRematch = () => {
        setPlayerScore(0);
        setComputerScore(0);
        setResultText('');
        setShowRematch(false);
    };

    return (
        <div>
            <div id="container">
                <button id="rock" onClick={() => handleClick('rock')}><img src="/Images/hand-rock_hires.png" alt="Rock" /></button>
                <button id="paper" onClick={() => handleClick('paper')}><img src="/Images/four-fingers_hires.png" alt="Paper" /></button>
                <button id="scissors" onClick={() => handleClick('scissors')}><img src="/Images/hand-scissors_hires.png" alt="Scissors" /></button>
            </div>
            <div id="results">{resultText}</div>
            {showRematch && <button id="rematch" onClick={handleRematch}>Rematch</button>}
        </div>
    );
}

export default RockPaperScissors;