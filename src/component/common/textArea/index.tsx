import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  id: string;
  label: string;
  rows?: number;
  value?: string;
};

const TextArea = (props: Props) => {
  const { onChange, id, label, rows, value } = props;
  const numberOfRows = rows ? rows : 3;
  return (
    <>
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          as="textarea"
          rows={numberOfRows}
          onChange={(e) => onChange(e)}
          value={value}
        />
      </Form.Group>
    </>
  );
};

export default TextArea;
