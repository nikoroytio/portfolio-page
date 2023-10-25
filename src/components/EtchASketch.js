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
        do {
            userInput = prompt("Set the new width as squares. The allowed maximum is 100 squares");
        } while (isNaN(userInput) || userInput.trim() === "" || userInput > 100);

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