import React, { useState, useRef, useEffect } from 'react';
import './Calculator.css';

//If you use this page as your base, I hope you will change projects to something of your own
// But here is an example of Calculator

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [storedValue, setStoredValue] = useState(null);
    const [storedOperator, setStoredOperator] = useState(null);
    const [lastOperationWasEqual, setLastOperationWasEqual] = useState(false);

    const displayRef = useRef(null);
    const [fontSize, setFontSize] = useState('100%');
    const DEFAULT_FONT_SIZE = '5rem';

    useEffect(() => {
        adjustFontSize();
    }, [displayValue]);

    const adjustFontSize = () => {
        setFontSize(DEFAULT_FONT_SIZE);
        const element = displayRef.current;
        const MAX_WIDTH = element.clientWidth;
    
        while (element.scrollWidth > MAX_WIDTH) {
            let currentSizePercentage = parseFloat(window.getComputedStyle(element).fontSize) / parseFloat(window.getComputedStyle(element.parentElement).fontSize) * 100;
            setFontSize((currentSizePercentage - 20) + "%");  // Decrease by 20% each iteration
        }
    };

    const isDisplayMaxLength = () => {
        return displayValue.length > 7;  
    };

    const currentNumberHasDot = () => {
        return displayValue.includes('.');
    };

    const resetFontSize = (element) => {
        setFontSize(DEFAULT_FONT_SIZE);  
    };

    const isOperator = (char) => {
        return ['+', '-', '*', '/'].includes(char);
    };

    const handleNumberInput = (numberstr) => {
        if (isDisplayMaxLength()) return;
        let newDisplayValue = displayValue;

        if (lastOperationWasEqual) {
            setLastOperationWasEqual(false);
            newDisplayValue = numberstr;
        }
        if (isOperator(displayValue)) {
            newDisplayValue = ""; // Clear the display if it currently shows an operator
            setLastOperationWasEqual(false); // Reset this flag as we're starting a new operation
        }
    
        if (numberstr === ".") {
            if (!currentNumberHasDot()) {
                newDisplayValue += ".";
            }
        }

        else {
            newDisplayValue = newDisplayValue === "0" ? numberstr : newDisplayValue + numberstr;
        }
    
        setDisplayValue(newDisplayValue); // Use the useState function to update the display value
    };

    const handleOperation = (operation) => {
        let newDisplayValue = displayValue;
        let newStoredValue = storedValue;
        let newStoredOperator = storedOperator;
    
        // If it's a mathematical operation (not equal sign)
        if (['+', '-', '*', '/'].includes(operation)) {
            if (!lastOperationWasEqual) {
                newStoredValue = displayValue;
                newStoredOperator = operation;
                newDisplayValue = operation; // Show the operation on the display
            } else {
                // If there's an operator right after pressing "="
                // This block can handle specific logic if needed, e.g., starting a new chain of operations
                newStoredOperator = operation;
                newDisplayValue = operation;
            }
        } else if (operation === "=") { 
            if (newStoredOperator && newStoredValue !== null) {
                const expression = `${newStoredValue} ${newStoredOperator} ${newDisplayValue}`;
                const result = calculateResult(expression).toString(); // ensure it's a string
                resetFontSize(displayRef.current);  // Adjust font size after calculation
                setLastOperationWasEqual(true);
                newStoredOperator = null;
                newStoredValue = result; // Store the result for possible further calculations
                newDisplayValue = result; 
            }
        }
    
        setDisplayValue(newDisplayValue); // Update the display value
        setStoredValue(newStoredValue); // Update the stored value if necessary
        setStoredOperator(newStoredOperator); // Update the stored operator if necessary
    };
    
    
    const calculateResult = (expression) => {
        try {
            let expressionArray = expression.split(" ");  

            // If we only have a single value, return it as the result
            if (expressionArray.length === 1) {
                return expressionArray[0];
            }

            let result = evaluateExpression(expressionArray);

            if (typeof result === "number" && result.toString().includes(".")) {
                return Math.round(result * 1000) / 1000;  
            }

            return result;
        } catch (error) {
            return "ERROR";
        }
    };

    const evaluateExpression = (expressionArray) => {
        let currentResult = parseFloat(expressionArray[0]);

        for (let i = 1; i < expressionArray.length; i += 2) {
            const operator = expressionArray[i];
            const number = parseFloat(expressionArray[i + 1]);

            switch (operator) {
                case '+':
                    currentResult += number;
                    break;
                case '-':
                    currentResult -= number;
                    break;
                case '*':
                    currentResult *= number;
                    break;
                case '/':
                    if (number !== 0) {
                        currentResult /= number;
                    } else {
                        return "ERROR"; // Unified error message
                    }
                    break;
                default:
                    return "ERROR"; // Unified error message
            }
        }

        return currentResult;
    };


    return (
        <div className="calculator">
            <div className="calculator_display" ref={displayRef} style={{ fontSize: fontSize }}>{displayValue}</div>
            <div className="calculator_keys">
                <button className="calculator_key calculator_key_operator" onClick={() => handleOperation('+')}>+</button>
                <button className="calculator_key calculator_key_operator" onClick={() => handleOperation('-')}>-</button>
                <button className="calculator_key calculator_key_operator" onClick={() => handleOperation('*')}>&times;</button>
                <button className="calculator_key calculator_key_operator" onClick={() => handleOperation('/')}>÷</button>
                <button className="calculator_key" onClick={() => handleNumberInput('7')}>7</button>
                <button className="calculator_key" onClick={() => handleNumberInput('8')}>8</button>
                <button className="calculator_key" onClick={() => handleNumberInput('9')}>9</button>
                <button className="calculator_key" onClick={() => handleNumberInput('4')}>4</button>
                <button className="calculator_key" onClick={() => handleNumberInput('5')}>5</button>
                <button className="calculator_key" onClick={() => handleNumberInput('6')}>6</button>
                <button className="calculator_key" onClick={() => handleNumberInput('1')}>1</button>
                <button className="calculator_key" onClick={() => handleNumberInput('2')}>2</button>
                <button className="calculator_key" onClick={() => handleNumberInput('3')}>3</button>
                <button className="calculator_key" onClick={() => handleNumberInput('0')}>0</button>
                <button className="calculator_key" onClick={() => handleNumberInput('.')}>.</button>
                <button className="calculator_key" onClick={() => {
                                                                    setDisplayValue('0');
                                                                    setStoredValue(null);
                                                                    setStoredOperator(null);
                                                                    setLastOperationWasEqual(false);
                                                                    }}>AC</button>
                <button className="calculator_key calculator_key_enter" onClick={() => handleOperation('=')}>=</button>
            </div>
        </div>
    );
};

export default Calculator;