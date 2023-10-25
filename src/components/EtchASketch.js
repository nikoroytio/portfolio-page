import React, { useState } from 'react';
import './EtchASketch.css';

function EtchASketch() {
    const [squares, setSquares] = useState(Array(16 * 16).fill(false));
    const [gridSize, setGridSize] = useState(16);

    const handleMouseOver = (index) => {
        const updatedSquares = [...squares];
        updatedSquares[index] = true;
        setSquares(updatedSquares);
    };

    const resetSketchboard = () => {
        let userInput;
        while (true) {
            userInput = prompt("Set the new width as squares. The allowed maximum is 100 squares");
    
            if (!isNaN(userInput) && userInput.trim() !== "" && userInput > 0 && userInput <= 100) {
                break;  // Break out of the loop if valid input is provided
            } else {
                alert("Please enter a valid number between 1 and 100.");
            }
        }
    
        setGridSize(userInput);
        setSquares(Array(userInput * userInput).fill(false));
    };

    return (
        <div>
            <button id="reset" onClick={resetSketchboard}>MAKE NEW SKETCHBOARD</button>
            <div id="container" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
                {squares.map((isDrawn, index) => (
                    <div
                        key={index}
                        className={`square ${isDrawn ? 'drawn' : ''}`}
                        onMouseOver={() => handleMouseOver(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default EtchASketch;