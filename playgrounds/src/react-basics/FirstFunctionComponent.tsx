interface FirstFunctionComponentProps {
  firstProp: string;
}

export const FirstFunctionComponent = ({
  firstProp,
}: FirstFunctionComponentProps): JSX.Element => {
  return <div>First Functional Component with the firstProp: {firstProp}</div>;
};
