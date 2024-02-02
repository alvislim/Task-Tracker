import { Link } from "@tanstack/react-router";
import { useUserData } from "../../../hooks/useUserData";
import { Route } from "../../../routes/edit.$id.lazy";
import { InputTypes, useTrackerStore } from "../../../store/trackerStore";
import TaskFormField from "../landing/taskFormField";
import Button from "react-bootstrap/Button";
import { status } from "../../../services/constants";
import { userData } from "../../../dummydata";
import "./index.scss";
import StepsIndicator from "../../common/stepper";

const Edit = () => {
  const { id } = Route.useParams();
  const { tasks, input } = useTrackerStore();
  const { onChange, onEdit } = useUserData();
  const task = tasks?.filter((elem) => elem.taskNumber === id)[0];
  const inputValues: InputTypes = {
    region: input?.region ?? task?.region,
    description: input?.description ?? task?.description,
    dueDate: input?.dueDate ?? task?.dueDate,
    status: input?.status ?? task?.status,
    owner: input?.owner ?? task?.owner,
    userId: task?.userId,
    taskNumber: task?.taskNumber,
    dateCreation: task?.dateCreation,
  };

  const editEvent = () => {
    onEdit(inputValues, id);
  };

  const style = {
    activeBgColor: "green",
    activeTextColor: "white",
    completedBgColor: "green",
    completedTextColor: "white",
    inactiveBgColor: "grey",
    inactiveTextColor: "white",
    size: "2em",
    circleFontSize: "1rem",
    labelFontSize: "0.875rem",
    borderRadius: "50%",
    fontWeight: "500",
  };

  const activeStep = status.indexOf(task?.status || "");

  return (
    <div className="edit-wrapper">
      <StepsIndicator
        activeStep={activeStep}
        styleConfig={style}
        options={status}
        label="Progress"
      />
      <TaskFormField
        onChange={onChange}
        users={userData}
        status={status}
        values={inputValues}
      />
      <div className="button-wrapper">
        <Link to="/">
          <Button className="back-cta" variant="secondary">
            Back
          </Button>
        </Link>
        <Link to="/" onClick={editEvent}>
          <Button className="save-cta" variant="success">
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Edit;
