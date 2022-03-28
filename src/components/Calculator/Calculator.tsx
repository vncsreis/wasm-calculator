import React, { useEffect, useState } from 'react';
import init, { calculate } from '../../lib/pkg/wasm_calc_lib.js';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import Display from '../Display';
import style from './Calculator.module.css';

export interface CalculatorFunctions {
  handleAddOperator: (e: React.MouseEvent) => void;
  handleClearText: (e: React.MouseEvent) => void;
  handleDelete: (e: React.MouseEvent) => void;
  handleAddNumber: (e: React.MouseEvent) => void;
  handleToggleNegative: (e: React.MouseEvent) => void;
  handleCalculation: (e: React.MouseEvent) => void;
  handleAddDot: (e: React.MouseEvent) => void;
}

export default function Calculator() {
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => await init())();
  });

  const calculatorFunctions: CalculatorFunctions = {
    handleAddNumber(e: React.MouseEvent) {
      const inputNumber = e.currentTarget.innerHTML;
      const textArray = text.split(' ').filter((e) => e !== '');
      if (textArray.length === 0) {
        textArray.push('');
      }
      const finalIndex = textArray.length - 1;
      if (textArray[finalIndex].indexOf('.0') !== -1) {
        textArray[finalIndex] =
          textArray[finalIndex].split('.')[0] + '.' + inputNumber;
      } else if (
        textArray[finalIndex] === '+' ||
        textArray[finalIndex] === '-' ||
        textArray[finalIndex] === '*' ||
        textArray[finalIndex] === '/'
      ) {
        textArray.push(inputNumber);
      } else {
        textArray[finalIndex] = textArray[finalIndex] + inputNumber;
      }

      const newText = textArray.join(' ');

      setText(newText);
    },

    handleAddOperator(e: React.MouseEvent) {
      const textArray = text.split(' ').filter((e) => e !== '');
      const finalIndex = textArray.length - 1;
      if (textArray.length < 3 && textArray.length > 0) {
        if (
          textArray[finalIndex] === '+' ||
          textArray[finalIndex] === '-' ||
          textArray[finalIndex] === '*' ||
          textArray[finalIndex] === '/'
        ) {
          textArray[finalIndex] = e.currentTarget.innerHTML;
          const newText = textArray.join(' ');
          setText(newText);
        } else {
          const newOperator = e.currentTarget.innerHTML;
          const newText = text + ' ' + newOperator;
          setText(newText);
        }
      }
    },

    handleClearText(e: React.MouseEvent) {
      setText('');
    },

    handleDelete(e: React.MouseEvent) {
      const textArray = text.split(' ').filter((e) => e !== '');
      textArray.pop();
      const newText = textArray.join(' ');
      setText(newText);
    },

    handleToggleNegative(e: React.MouseEvent) {
      const textArray = text.split(' ').filter((e) => e !== '');
      const finalIndex = textArray.length - 1;
      const lastNumber = textArray[finalIndex];

      if (textArray.length > 0 && lastNumber) {
        const testingForZero = [...new Set(lastNumber.split(''))];
        if (
          lastNumber !== '' &&
          lastNumber !== '+' &&
          lastNumber !== '-' &&
          lastNumber !== '*' &&
          lastNumber !== '/' &&
          (testingForZero[0] !== '0' || testingForZero.length > 1)
        ) {
          if (lastNumber.indexOf('-') !== -1) {
            textArray[finalIndex] = lastNumber.replace('-', '');
          } else {
            textArray[finalIndex] = '-' + lastNumber;
          }

          const newText = textArray.join(' ');
          setText(newText);
        }
      }
    },

    handleAddDot(e: React.MouseEvent) {
      const textArray = text.split(' ').filter((e) => e !== '');
      const finalIndex = textArray.length - 1;
      const lastNumber = textArray[finalIndex];
      if (lastNumber.indexOf('.') === -1) {
        textArray[finalIndex] = lastNumber + '.0';
      }

      const newText = textArray.join(' ');
      setText(newText);
    },

    handleCalculation(e: React.MouseEvent) {
      const textArray = text.split(' ').filter((e) => e !== '');
      if (textArray.length === 3) {
        try {
          const result = calculate(text);
          setText(`${result}`);
        } catch (e) {
          alert('Oops! Something went wrong');
        }
      }
    },
  };

  return (
    <div className={style.calculator}>
      <Display text={text} />
      <ButtonGrid calculator={calculatorFunctions} />
    </div>
  );
}
