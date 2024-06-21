import React from 'react';
import Button from './Button';
import './Keypad.css';

const Keypad = ({ onButtonClick }) => {
  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '±', '%', '÷',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
    '¹/x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '−',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <Button key={index} label={btn} onClick={onButtonClick} className={btn === '=' ? 'button-equal' : ''} />
      ))}
    </div>
  );
};

export default Keypad;
