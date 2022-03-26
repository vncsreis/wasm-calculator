import Button from '../Button';
import styles from './ButtonGrid.module.css';

interface ButtonGridProps {
  changeText: (e: React.MouseEvent) => void;
}

export default function ButtonGrid({ changeText }: ButtonGridProps) {
  return (
    <div className={styles.grid}>
      <Button onClick={changeText} className={styles.seven}>
        7
      </Button>
      <Button onClick={changeText} className={styles.eight}>
        8
      </Button>
      <Button onClick={changeText} className={styles.nine}>
        9
      </Button>
      <Button onClick={changeText} className={styles.divide}>
        /
      </Button>
      <Button onClick={changeText} className={styles.four}>
        4
      </Button>
      <Button onClick={changeText} className={styles.five}>
        5
      </Button>
      <Button onClick={changeText} className={styles.six}>
        6
      </Button>
      <Button onClick={changeText} className={styles.multiply}>
        *
      </Button>
      <Button onClick={changeText} className={styles.one}>
        1
      </Button>
      <Button onClick={changeText} className={styles.two}>
        2
      </Button>
      <Button onClick={changeText} className={styles.three}>
        3
      </Button>
      <Button onClick={changeText} className={styles.minus}>
        -
      </Button>
      <Button onClick={changeText} className={styles.zero}>
        0
      </Button>
      <Button onClick={changeText} className={styles.dot}>
        .
      </Button>
      <Button onClick={changeText} className={styles.plus}>
        +
      </Button>
      <Button onClick={changeText} className={styles.equals}>
        =
      </Button>
    </div>
  );
}
