import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";
import { status } from "../../../services/constants";
import TextField from "../../common/textField";
import TextArea from "../../common/textArea";
import DatePicker from "../../common/datePicker";
import Select from "../../common/select";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

const TaskFormField = (props: Props) => {
  const { onChange } = props;
  return (
    <>
      <Form>
        <TextField onChange={onChange} label="Region" id="region" />
        <TextArea onChange={onChange} label="Description" id="description" />
        <DatePicker onChange={onChange} label="Due Date" id="dueDate" />
        <Select
          onChange={onChange}
          options={status}
          id="status"
          label="Status"
        />
      </Form>
    </>
  );
};

export default TaskFormField;
