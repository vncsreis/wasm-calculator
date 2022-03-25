import style from './Button.module.css';

interface ButtonProps {
  children: string;
  className: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={`${className} ${style.button}`}>{children}</button>;
}
