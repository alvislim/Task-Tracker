import { createLazyFileRoute } from "@tanstack/react-router";
import { ChangeEvent, useState } from "react";
import { useTrackerStore } from "../store/trackerStore";
import ButtonCTA from "../component/common/buttonCta";
import { getCurrentDate } from "../services/common";
import ModalPrompt from "../component/common/modalPrompt";
import TaskFormField from "../component/modules/taskFormField";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { input, setInput, currentLoginUser, tasks } = useTrackerStore();

  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const popUpCTA = () => {
    setShowPopUp(!showPopUp);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const id = target.id as string;
    const value = target.value as string;
    const currentDate = getCurrentDate();
    console.log(target.value);
    console.log(target.id);
    id && setInput({ ...input, [id]: value, dateCreation: currentDate });
  };

  const onConfirm = () => {
    setShowPopUp(!showPopUp);
    const updateTaskWithId = { ...input, userId: currentLoginUser?.id };
    input && tasks.push(updateTaskWithId);
  };

  console.log(tasks);

  return (
    <div>
      <ButtonCTA text="Create Ticket" variant="primary" onClick={popUpCTA} />
      <ModalPrompt
        title="Ticket Creation"
        toShow={showPopUp}
        onClose={popUpCTA}
        onSave={onConfirm}
        closeButtonText="Close"
        saveButtonText="Save Changes"
        bodyContent={<TaskFormField onChange={onChange} />}
      />
    </div>
  );
}
