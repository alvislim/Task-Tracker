import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";
import TextArea from "../../../common/textArea";
import DatePicker from "../../../common/datePicker";
import Select from "../../../common/select";
import { User } from "../../../../dummydata";
import { InputTypes } from "../../../../store/trackerStore";
import TextField from "../../../common/textField";

type Props = {
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  status: string[];
  users: User[];
  values?: InputTypes;
  epic?: string[];
};

const TaskFormField = (props: Props) => {
  const { onChange, status, users, values, epic } = props;
  const usersList = users && users.map((elem) => elem.name);

  return (
    <>
      <Form>
        {epic ? (
          <Select
            onChange={onChange}
            options={epic}
            id="epic"
            label="Epic"
            value={values?.epic}
          />
        ) : (
          <TextField
            onChange={onChange}
            label="Epic"
            id="epic"
            value={values?.epic}
          />
        )}

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
