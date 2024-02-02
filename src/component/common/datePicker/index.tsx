import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  id: string;
  label: string;
  value?: string;
};

const DatePicker = (props: Props) => {
  const { onChange, id, label, value } = props;
  return (
    <>
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control type="date" onChange={(e) => onChange(e)} value={value} />
      </Form.Group>
    </>
  );
};

export default DatePicker;
