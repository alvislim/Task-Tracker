import { ChangeEvent } from "react";
import { InputTypes, useTrackerStore } from "../store/trackerStore";
import { generateTaskNumber, getCurrentDate } from "../services/common";

export const useUserData = () => {
  const { setInput, input, currentUser, tasks, setTasks } = useTrackerStore();

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const id = target.id as string;
    const value = target.value as string;
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
      taskNumber: input?.taskNumber ?? generateTaskNumber(),
    };
    const currTasks = tasks || [];
    currTasks?.push(updateTaskWithId);
    setTasks(currTasks);
  };

  const onEdit = (input: InputTypes, id: string) => {
    if (tasks) {
      console.log("hey");
      const inputIndex = tasks.findIndex((obj) => obj.taskNumber === id);
      if (inputIndex >= 0 && input) {
        let taskLists = [...tasks];
        taskLists[inputIndex] = input;
        setTasks(taskLists);
      }
    }
  };

  return {
    onChange,
    onConfirm,
    onEdit,
  };
};
