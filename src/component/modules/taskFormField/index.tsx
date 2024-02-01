import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";
import { status } from "../../../services/constants";

interface Props {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const TaskFormField = (props: Props) => {
  const { onChange } = props;
  return (
    <>
      <Form>
        <Form.Group controlId="region">
          <Form.Label>Region</Form.Label>
          <Form.Control type="text" onChange={(e) => onChange(e)} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => onChange(e)} />
        </Form.Group>
        <Form.Group controlId="dueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" onChange={(e) => onChange(e)} />
        </Form.Group>
        <Form.Select
          aria-label="Status"
          id="status"
          onChange={(e) => onChange(e)}
        >
          {status.map((elem, index) => {
            return (
              <option key={`${index}_${elem}`} value={elem}>
                {elem}
              </option>
            );
          })}
        </Form.Select>
      </Form>
    </>
  );
};

export default TaskFormField;
