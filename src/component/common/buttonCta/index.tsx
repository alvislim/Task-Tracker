import Button from "react-bootstrap/Button";

type Props = {
  onClick: () => void;
  text: string;
  variant: string;
};

const ButtonCTA = (props: Props) => {
  const { onClick, text, variant } = props;
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonCTA;
