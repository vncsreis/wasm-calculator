import Button from '../Button';
import styles from './ButtonGrid.module.css';

export default function ButtonGrid() {
  return (
    <div className={styles.grid}>
      <Button className={styles.seven}>7</Button>
      <Button className={styles.eight}>8</Button>
      <Button className={styles.nine}>9</Button>
      <Button className={styles.divide}>/</Button>
      <Button className={styles.four}>4</Button>
      <Button className={styles.five}>5</Button>
      <Button className={styles.six}>6</Button>
      <Button className={styles.multiply}>X</Button>
      <Button className={styles.one}>1</Button>
      <Button className={styles.two}>2</Button>
      <Button className={styles.three}>3</Button>
      <Button className={styles.minus}>-</Button>
      <Button className={styles.zero}>0</Button>
      <Button className={styles.dot}>.</Button>
      <Button className={styles.plus}>+</Button>
      <Button className={styles.equals}>=</Button>
    </div>
  );
}
