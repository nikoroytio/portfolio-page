import React, { useState, useEffect } from 'react';
import './EtchASketch.css';

//If you use this page as your base, I hope you will change projects to something of your own
// But here is an example of EtchASketch game

function EtchASketch() {
    //set initial grid size
    const [squares, setSquares] = useState(Array(16 * 16).fill(false));
    const [gridSize, setGridSize] = useState(16);
    const [isDrawing, setIsDrawing] = useState(false); // To track if mouse button is pressed
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        const container = document.getElementById('containerSketch');
        // Attach the event listener
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
      
        // Clean up the event listener
        return () => {
          container.removeEventListener('touchmove', handleTouchMove, { passive: false });
        };
      }, [isDrawing]); // Dependencies array to re-bind the event listener if isDrawing changes

    const handleMouseOver = (index) => {
        if (isDrawing) {
            const updatedSquares = [...squares];
            if (isErasing) {
                updatedSquares[index] = false; // Erase
            } else {
                updatedSquares[index] = true;  // Draw
            }
            setSquares(updatedSquares);
        }
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

    const handleTouchMove = (event) => {
        if (isDrawing) {
            // prevent page scrolling
            event.preventDefault();
            // Get the touch coordinates
            const touch = event.touches[0];
            // Convert touch coordinates to local (x, y) within the grid
            const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

            // Proceed only if the touched element is one of the squares
            if (targetElement && targetElement.classList.contains('square')) {
                const index = Array.from(targetElement.parentNode.children).indexOf(targetElement);
                handleMouseOver(index);
            }
        }
    };

    // Use this function to start drawing
    const handleTouchStart = (event) => {
        event.preventDefault();
        setIsDrawing(true);
        // Also handle the case where user starts by touching
        handleTouchMove(event);
    };

    // Call this function to stop drawing
    const handleTouchEnd = () => {
        setIsDrawing(false);
    };

    return (
        <div>
            <div className='sketchButtons'>
                <button id="reset" onClick={resetSketchboard}>Make new sketchboard</button>
                <button onClick={() => setIsErasing(!isErasing)}> {isErasing ? "Switch to Draw Mode" : "Switch to Erase Mode"}</button>
            </div>
            <div id="containerSketch"
                style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
                onMouseDown={() => setIsDrawing(true)}  // Start drawing when mouse button is pressed
                onMouseUp={() => setIsDrawing(false)}  // Stop drawing when mouse button is released
                onMouseLeave={() => setIsDrawing(false)}  // Stop drawing if mouse leaves the container
                onTouchStart={handleTouchStart}  // Handle touch start
                onTouchMove={handleTouchMove}    // Handle touch move
                onTouchEnd={handleTouchEnd}      // Handle touch end
            >
                {squares.map((isDrawn, index) => (
                    <div
                        key={index}
                        className={`square ${isDrawn ? 'drawn' : ''}`}
                        onMouseOver={() => handleMouseOver(index)}
                    ></div>
                ))}
            </div>
            <div className='clicktodraw'>
                <p>click to draw</p>
            </div>
        </div>
    );
}

export default EtchASketch;