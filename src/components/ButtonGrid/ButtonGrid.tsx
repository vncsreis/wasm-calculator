import Button from '../Button';
import { CalculatorFunctions } from '../Calculator/Calculator';
import styles from './ButtonGrid.module.css';

interface ButtonGridProps {
  calculator: CalculatorFunctions;
}

export default function ButtonGrid({ calculator }: ButtonGridProps) {
  const {
    handleAddOperator,
    handleClearText,
    handleDelete,
    handleAddNumber,
    handleToggleNegative,
  } = calculator;

  return (
    <div className={styles.grid}>
      <Button onClick={handleClearText} className={styles.clear}>
        C
      </Button>
      <Button onClick={handleToggleNegative} className={styles.negative}>
        +/-
      </Button>
      <Button onClick={handleAddOperator} className={styles.divide}>
        /
      </Button>
      <Button onClick={handleAddOperator} className={styles.multiply}>
        *
      </Button>
      <Button onClick={handleAddNumber} className={styles.seven}>
        7
      </Button>
      <Button onClick={handleAddNumber} className={styles.eight}>
        8
      </Button>
      <Button onClick={handleAddNumber} className={styles.nine}>
        9
      </Button>
      <Button onClick={handleAddOperator} className={styles.minus}>
        -
      </Button>
      <Button onClick={handleAddNumber} className={styles.four}>
        4
      </Button>
      <Button onClick={handleAddNumber} className={styles.five}>
        5
      </Button>
      <Button onClick={handleAddNumber} className={styles.six}>
        6
      </Button>
      <Button onClick={handleAddOperator} className={styles.plus}>
        +
      </Button>
      <Button onClick={handleAddNumber} className={styles.one}>
        1
      </Button>
      <Button onClick={handleAddNumber} className={styles.two}>
        2
      </Button>
      <Button onClick={handleAddNumber} className={styles.three}>
        3
      </Button>
      <Button onClick={handleAddNumber} className={styles.zero}>
        0
      </Button>
      <Button
        onClick={(e) => {
          console.log('Add dot');
        }}
        className={styles.dot}
      >
        .
      </Button>
      <Button onClick={handleDelete} className={styles.delete}>
        DEL
      </Button>
      <Button
        onClick={(e) => {
          console.log('Calculate result');
        }}
        className={styles.equals}
      >
        =
      </Button>
    </div>
  );
}
