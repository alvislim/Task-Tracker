import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";
import TextField from "../../../common/textField";
import TextArea from "../../../common/textArea";
import DatePicker from "../../../common/datePicker";
import Select from "../../../common/select";
import { User } from "../../../../dummydata";
import { InputTypes } from "../../../../store/trackerStore";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  status: string[];
  users: User[];
  values?: InputTypes;
};

const TaskFormField = (props: Props) => {
  const { onChange, status, users, values } = props;
  const usersList = users && users.map((elem) => elem.name);
  return (
    <>
      <Form>
        <TextField
          onChange={onChange}
          label="Region"
          id="region"
          value={values?.region}
        />
        <TextArea
          onChange={onChange}
          label="Description"
          id="description"
          value={values?.description}
        />
        <DatePicker
          onChange={onChange}
          label="Due Date"
          id="dueDate"
          value={values?.dueDate}
        />
        <Select
          onChange={onChange}
          options={status}
          id="status"
          label="Status"
          value={values?.status}
        />
        <Select
          onChange={onChange}
          options={usersList}
          id="owner"
          label="Assignee"
          value={values?.owner}
        />
      </Form>
    </>
  );
};

export default TaskFormField;
