import { useState } from "react";
import { useTrackerStore } from "../../../store/trackerStore";
import ButtonCTA from "../../../component/common/buttonCta";
import ModalPrompt from "../../../component/common/modalPrompt";
import TaskFormField from "./taskFormField";
import "./index.scss";
import TaskDetailCardWrapper from "./taskDetailCardWrapper/indexs";
import { status } from "../../../services/constants";
import { useFormEvent } from "../../../hooks/useFormEvent";
import { userData } from "../../../dummydata";
import { isEpicSection } from "../../../services/common";
import EpicDetails from "./epicDetails";

const Landing = () => {
  const { tasks, epics, view, setView } = useTrackerStore();

  const { onTaskInputChange, onTaskCreate, onEpicInputChange, onEpicCreate } =
    useFormEvent();

  const [showTaskPopUp, setShowTaskPopUp] = useState<boolean>(false);
  const [showEpicPopUp, setShowEpicPopUp] = useState<boolean>(false);

  const taskPopUpCTA = () => {
    setShowTaskPopUp(!showTaskPopUp);
  };

  const epicPopUpCTA = () => {
    setShowEpicPopUp(!showEpicPopUp);
  };

  const taskCreate = () => {
    setShowTaskPopUp(!showTaskPopUp);
    onTaskCreate();
  };

  const epicCreate = () => {
    setShowEpicPopUp(!showEpicPopUp);
    onEpicCreate();
  };

  const epicList = epics
    ? epics.map((elem) => (elem.epic ? elem.epic : ""))
    : undefined;

  const title = isEpicSection(view) ? "Epic" : "Task";
  const dataDisplay = isEpicSection(view) ? epics : tasks;

  return (
    <div className="wrapper">
      <div className="cta-wrapper">
        <div className="view-section-wrapper">
          <ButtonCTA
            text="Task"
            variant="primary"
            onClick={() => setView("task")}
          />
          <ButtonCTA
            text="Epic"
            variant="primary"
            onClick={() => setView("epic")}
          />
        </div>
        <div className="create-cta-wrapper">
          <ButtonCTA
            text="Create Task"
            variant="success"
            onClick={taskPopUpCTA}
          />
          <ButtonCTA
            text="Create Epic"
            variant="success"
            onClick={epicPopUpCTA}
          />
        </div>
        <p className="title">{title}</p>
        {isEpicSection(view) ? <EpicDetails /> : null}
      </div>
      <ModalPrompt
        title="Epic Creation"
        toShow={showEpicPopUp}
        onClose={epicPopUpCTA}
        onSave={epicCreate}
        closeButtonText="Close"
        saveButtonText="Save Changes"
        bodyContent={
          <TaskFormField
            onChange={onEpicInputChange}
            status={status}
            users={userData}
          />
        }
      />
      <ModalPrompt
        title="Task Creation"
        toShow={showTaskPopUp}
        onClose={taskPopUpCTA}
        onSave={taskCreate}
        closeButtonText="Close"
        saveButtonText="Save Changes"
        bodyContent={
          <TaskFormField
            onChange={onTaskInputChange}
            status={status}
            users={userData}
            epic={epicList}
          />
        }
      />
      <div className="tasks-wrapper">
        <TaskDetailCardWrapper category="To Do" tasks={dataDisplay} />
        <TaskDetailCardWrapper category="In Progress" tasks={dataDisplay} />
        <TaskDetailCardWrapper category="In Review" tasks={dataDisplay} />
        <TaskDetailCardWrapper category="Done" tasks={dataDisplay} />
        <TaskDetailCardWrapper category="Cancelled" tasks={dataDisplay} />
      </div>
    </div>
  );
};

export default Landing;
