import { Link } from "@tanstack/react-router";
import { useFormEvent } from "../../../hooks/useFormEvent";
import { Route } from "../../../routes/edit.$id.lazy";
import { InputTypes, useTrackerStore } from "../../../store/trackerStore";
import TaskFormField from "../landing/taskFormField";
import Button from "react-bootstrap/Button";
import { status } from "../../../services/constants";
import { userData } from "../../../dummydata";
import "./index.scss";
import StepsIndicator from "../../common/stepper";
import { isEpicSection } from "../../../services/common";
import { ChangeEvent } from "react";

const Edit = () => {
  const { id } = Route.useParams();
  const {
    tasks,
    taskInput,
    section,
    epicInput,
    epics,
    setEpicInput,
    setTaskInput,
  } = useTrackerStore();
  const { onTaskInputChange, onTaskEdit, onEpicEdit, onEpicInputChange } =
    useFormEvent();

  const data = isEpicSection(section) ? epicInput : taskInput;
  const storeValue = isEpicSection(section) ? epics : tasks;
  const task = storeValue?.filter((elem) =>
    isEpicSection(section) ? elem.epicNumber === id : elem.taskNumber === id
  )[0];

  const clearInput = () => {
    isEpicSection(section) ? setEpicInput(undefined) : setTaskInput(undefined);
  };

  const inputValues: InputTypes = {
    epic: data?.epic ? data?.epic : task?.epic,
    description: data?.description ? data?.description : task?.description,
    dueDate: data?.dueDate ? data?.dueDate : task?.dueDate,
    status: data?.status ? data?.status : task?.status,
    owner: data?.owner ? data?.owner : task?.owner,
    userId: task?.userId,
    taskNumber: task?.taskNumber,
    dateCreation: task?.dateCreation,
  };

  const editEvent = () => {
    if (isEpicSection(section)) {
      onEpicEdit(inputValues, id);
    } else {
      onTaskEdit(inputValues, id);
    }
  };

  const inputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    return isEpicSection(section)
      ? onEpicInputChange(e, id)
      : onTaskInputChange(e, id);
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

  const epicList = epics
    ? epics.map((elem) => (elem.epic ? elem.epic : ""))
    : undefined;

  return (
    <div className="edit-wrapper">
      <StepsIndicator
        activeStep={activeStep}
        styleConfig={style}
        options={status}
        label="Progress"
      />
      <TaskFormField
        onChange={(e) => inputChange(e)}
        users={userData}
        status={status}
        values={inputValues}
        epic={epicList}
      />
      <div className="button-wrapper">
        <Link to="/">
          <Button className="back-cta" variant="secondary" onClick={clearInput}>
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
