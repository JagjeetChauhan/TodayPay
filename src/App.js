import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import { evaluateExpression, factorial, random } from './utils/mathUtils';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      handleEqual();
    } else if (value === 'C') {
      handleClear();
    } else if (value === 'x!') {
      handleFactorial();
    } else if (value === 'Rand') {
      handleRandom();
    } else if (value === '-') {
      handleOperator('-');
    } else if (value === 'x') {
      handleOperator('*');
    } else if (value === '/') {
      handleOperator('/');
    } else {
      setInput(input + value);
    }
  };

  const handleOperator = (operator) => {
    setInput(input + ` ${operator} `);
  };

  const handleEqual = () => {
    const result = evaluateExpression(input);
    setInput(result.toString());
  };

  const handleClear = () => {
    setInput('');
  };

  const handleFactorial = () => {
    const result = factorial(parseInt(input, 10));
    setInput(result.toString());
  };

  const handleRandom = () => {
    const result = random();
    setInput(result.toString());
  };

  return (
    <div className="App">
      <header className="App-header">
        <Display value={input} />
        <Keypad onButtonClick={handleButtonClick} />
      </header>
    </div>
  );
}

export default App;
