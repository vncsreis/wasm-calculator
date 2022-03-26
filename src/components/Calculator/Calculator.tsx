import React, { useState } from 'react';
import ButtonGrid from '../ButtonGrid';
import Display from '../Display';
import style from './Calculator.module.css';

export default function Calculator() {
  const [text, setText] = useState('');

  function handleChangeText(e: React.MouseEvent) {
    const newText = e.currentTarget.innerHTML;
    setText((oldText) => oldText + ' ' + newText);
  }

  return (
    <div className={style.calculator}>
      <Display text={text} />
      <ButtonGrid changeText={handleChangeText} />
    </div>
  );
}
