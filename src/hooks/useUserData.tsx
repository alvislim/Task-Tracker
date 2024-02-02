import { ChangeEvent } from "react";
import { useTrackerStore } from "../store/trackerStore";
import { generateTaskNumber, getCurrentDate } from "../services/common";

export const useUserData = () => {
  const { setInput, input, currentUser, tasks, setTasks } = useTrackerStore();

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const id = target.id as string;
    const value = target.value as string;
    console.log(`${id}__${value}`);
    id &&
      setInput({
        ...input,
        [id]: value,
      });
  };

  const onConfirm = () => {
    const currentDate = getCurrentDate();
    const updateTaskWithId = {
      ...input,
      userId: currentUser?.id,
      dateCreation: currentDate,
      owner: input?.owner,
      taskNumber: input?.taskNumber ?? generateTaskNumber(),
    };
    const currTasks = tasks || [];
    currTasks?.push(updateTaskWithId);
    setTasks(currTasks);
  };

  return {
    onChange,
    onConfirm,
  };
};
