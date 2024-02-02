import { useState } from "react";
import { useTrackerStore } from "../../../store/trackerStore";
import ButtonCTA from "../../../component/common/buttonCta";
import { generateTaskNumber, getCurrentDate } from "../../../services/common";
import ModalPrompt from "../../../component/common/modalPrompt";
import TaskFormField from "./taskFormField";
import "./index.scss";
import TaskDetailCardWrapper from "./taskDetailCardWrapper/indexs";
import { status } from "../../../services/constants";
import { useUserData } from "../../../hooks/useUserData";
import { userData } from "../../../dummydata";

const Landing = () => {
  const { input, currentUser, tasks, setTasks } = useTrackerStore();

  const { onChange } = useUserData();

  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const popUpCTA = () => {
    setShowPopUp(!showPopUp);
  };

  const onConfirm = () => {
    setShowPopUp(!showPopUp);
    const currentDate = getCurrentDate();
    const updateTaskWithId = {
      ...input,
      userId: currentUser?.id,
      dateCreation: currentDate,
      owner: currentUser?.name,
      taskNumber: generateTaskNumber(),
    };
    const currTasks = tasks || [];
    currTasks?.push(updateTaskWithId);
    setTasks(currTasks);
  };

  return (
    <div className="wrapper">
      <ButtonCTA text="Create Ticket" variant="primary" onClick={popUpCTA} />
      <ModalPrompt
        title="Ticket Creation"
        toShow={showPopUp}
        onClose={popUpCTA}
        onSave={onConfirm}
        closeButtonText="Close"
        saveButtonText="Save Changes"
        bodyContent={
          <TaskFormField onChange={onChange} status={status} users={userData} />
        }
      />
      <div className="tasks-wrapper">
        <TaskDetailCardWrapper category="To Do" tasks={tasks} />
        <TaskDetailCardWrapper category="In Progress" tasks={tasks} />
        <TaskDetailCardWrapper category="In Review" tasks={tasks} />
        <TaskDetailCardWrapper category="Done" tasks={tasks} />
        <TaskDetailCardWrapper category="Cancelled" tasks={tasks} />
      </div>
    </div>
  );
};

export default Landing;
