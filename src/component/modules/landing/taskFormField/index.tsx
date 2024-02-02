import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";
import TextField from "../../../common/textField";
import TextArea from "../../../common/textArea";
import DatePicker from "../../../common/datePicker";
import Select from "../../../common/select";
import { User } from "../../../../dummydata";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  status: string[];
  users: User[];
};

const TaskFormField = (props: Props) => {
  const { onChange, status, users } = props;
  const usersList = users && users.map((elem) => elem.name);
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
        <Select
          onChange={onChange}
          options={usersList}
          id="owner"
          label="Assignee"
        />
      </Form>
    </>
  );
};

export default TaskFormField;
