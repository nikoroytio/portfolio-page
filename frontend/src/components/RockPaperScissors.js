import React, { useState } from 'react';
import rockImage from '../assets/image/rock.webp';
import paperImage from '../assets/image/paper.webp';
import scissorsImage from '../assets/image/scissors.webp';
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
        if (playerScore === 5 || computerScore === 5){
            return;
        }
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
            <div id="containerRps">
                <button id="rock" onClick={() => handleClick('rock')}><img src={rockImage} alt="Rock" /></button>
                <button id="paper" onClick={() => handleClick('paper')}><img src={paperImage} alt="Paper" /></button>
                <button id="scissors" onClick={() => handleClick('scissors')}><img src={scissorsImage} alt="Scissors" /></button>
            </div>
            <div id="results">{resultText}</div>
            {showRematch && <button id="rematch" onClick={handleRematch}>Rematch</button>}
        </div>
    );
}

export default RockPaperScissors;