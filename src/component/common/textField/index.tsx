import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  id: string;
  label: string;
};

const TextField = (props: Props) => {
  const { onChange, id, label } = props;
  return (
    <>
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="text" onChange={(e) => onChange(e)} />
      </Form.Group>
    </>
  );
};

export default TextField;
