import React, { useState } from 'react';
import ButtonGrid from '../ButtonGrid';
import Display from '../Display';
import style from './Calculator.module.css';

export interface CalculatorFunctions {
  handleAddOperator: (e: React.MouseEvent) => void;
  handleClearText: (e: React.MouseEvent) => void;
  handleDelete: (e: React.MouseEvent) => void;
  handleAddNumber: (e: React.MouseEvent) => void;
  handleToggleNegative: (e: React.MouseEvent) => void;
}

export default function Calculator() {
  const [text, setText] = useState('');

  const calculatorFunctions: CalculatorFunctions = {
    handleAddNumber(e: React.MouseEvent) {
      const newText = e.currentTarget.innerHTML;
      setText((oldText) => oldText + newText);
    },

    handleAddOperator(e: React.MouseEvent) {
      const newText = e.currentTarget.innerHTML;
      setText((oldText) => oldText + ' ' + newText + ' ');
    },

    handleClearText(e: React.MouseEvent) {
      setText('');
    },

    handleDelete(e: React.MouseEvent) {
      const textArray = text.split(' ');
      textArray.pop();
      const newText = textArray.join(' ');
      setText(newText);
    },

    handleToggleNegative(e: React.MouseEvent) {
      const textArray = text.split(' ');
      const finalIndex = textArray.length - 1;
      const lastNumber = textArray[finalIndex];
      if (lastNumber.indexOf('-') !== -1) {
        textArray[finalIndex] = lastNumber.replace('-', '');
      } else {
        textArray[finalIndex] = '-' + lastNumber;
      }

      const newText = textArray.join(' ');
      setText(newText);
    },
  };

  return (
    <div className={style.calculator}>
      <Display text={text} />
      <ButtonGrid calculator={calculatorFunctions} />
    </div>
  );
}
