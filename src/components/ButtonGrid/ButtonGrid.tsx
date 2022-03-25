interface ButtonGridProps {
  children: JSX.Element | JSX.Element[];
}

export default function ButtonGrid({ children }: ButtonGridProps) {
  return <div>{children}</div>;
}
