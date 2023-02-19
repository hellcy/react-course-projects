interface ChildProps {
  color: string;
  onClick?: () => void;
  children?: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
