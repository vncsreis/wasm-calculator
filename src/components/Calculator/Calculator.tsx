import ButtonGrid from '../ButtonGrid';
import Display from '../Display';
import style from './Calculator.module.css';

export default function Calculator() {
  return (
    <div className={style.calculator}>
      <Display />
      <ButtonGrid />
    </div>
  );
}
