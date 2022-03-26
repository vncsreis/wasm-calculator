import style from './Display.module.css';

interface DisplayProps {
  text: string;
}

export default function Display({ text }: DisplayProps) {
  return <div className={style.display}>{text}</div>;
}
