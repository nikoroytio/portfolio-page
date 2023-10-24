import React, { useState, useRef, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [storedValue, setStoredValue] = useState(null);
    const [storedOperator, setStoredOperator] = useState(null);
    const [lastOperationWasEqual, setLastOperationWasEqual] = useState(false);

    const displayRef = useRef(null);

    useEffect(() => {
        adjustFontSize(displayRef.current);
    }, [displayValue]);

    const handleNumberInput = (numberstr) => {
        if (isDisplayMaxLength()) return;

        let newDisplayValue = displayValue;

        if (isOperator(displayValue.trim())) {
            newDisplayValue = ""; // Clear the display if it currently shows an operator
            setLastOperationWasEqual(false); // Reset this flag as we're starting a new operation
        }
    
        if (numberstr === ".") {
            if (!currentNumberHasDot()) {
                newDisplayValue += ".";
            }
        }
        
        else if(lastOperationWasEqual){
            return;
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

        if (operation !== "=") {
            if (operation !== "=") {
                if (!lastOperationWasEqual) {
                    newStoredValue = newDisplayValue;
                }
                newStoredOperator = operation;
                setDisplayValue(operation); // Show the operation on the display

        }else {
            if (newStoredOperator && newStoredValue !== null) {
                const expression = `${newStoredValue} ${newStoredOperator} ${newDisplayValue}`;
                newDisplayValue = calculateResult(expression).toString(); // ensure it's a string
                resetFontSize(displayRef.current);  // Adjust font size after calculation
                setLastOperationWasEqual(true);
                newStoredOperator = null;
                newStoredValue = newDisplayValue; // Store the result for possible further calculations
            }
        }
    
        setDisplayValue(updatedValue); // Update the display value
        setStoredValue(updatedStoredValue); // Update the stored value if necessary
        setStoredOperator(updatedStoredOperator); // Update the stored operator if necessary
        };
    }

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

    const adjustFontSize = (element) => {
        const MAX_WIDTH = element.clientWidth;
    

        while (element.scrollWidth > MAX_WIDTH) {
            let currentSizePercentage = parseFloat(window.getComputedStyle(element).fontSize) / parseFloat(window.getComputedStyle(element.parentElement).fontSize) * 100;
            element.style.fontSize = (currentSizePercentage - 20) + "%";  // Decrease by 10% each iteration
        }
    };

    return (
        <div className="calculator">
            <div className="calculator_display" ref={displayRef}>{displayValue}</div>
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
                <button className="calculator_key" onClick={() => setDisplayValue('0')}>AC</button>
                <button className="calculator_key calculator_key_enter" onClick={() => handleOperation('=')}>=</button>
            </div>
        </div>
    );
};

export default Calculator;