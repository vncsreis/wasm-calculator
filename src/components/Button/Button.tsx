import style from './Button.module.css';

interface ButtonProps {
  children: string;
  className: string;
  onClick: (e: React.MouseEvent) => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${style.button} ${
        children === '=' ? style.equals : ''
      }`}
    >
      {children}
    </button>
  );
}
