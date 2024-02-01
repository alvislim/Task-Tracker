import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  options: string[];
  id: string;
  label: string;
};

const Select = (props: Props) => {
  const { onChange, id, options, label } = props;
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select aria-label="Status" id={id} onChange={(e) => onChange(e)}>
        {options.map((elem, index) => {
          return (
            <option key={`${index}_${elem}`} value={elem}>
              {elem}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
};

export default Select;
