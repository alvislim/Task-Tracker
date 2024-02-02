import { ChangeEvent } from "react";
import { InputTypes, useTrackerStore } from "../store/trackerStore";
import { generateTaskNumber, getCurrentDate } from "../services/common";

export const useFormEvent = () => {
  const {
    setTaskInput,
    taskInput,
    currentUser,
    tasks,
    setTasks,
    epicInput,
    setEpicInput,
    epics,
    setEpics,
  } = useTrackerStore();

  const onTaskInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    dataId?: string
  ) => {
    const target = e.target as HTMLInputElement;
    const id = target.id as string;
    const value = target.value as string;
    const obj = dataId
      ? tasks?.filter((e) => e.taskNumber === dataId)[0]
      : taskInput;
    id &&
      setTaskInput({
        ...obj,
        [id]: value,
      });
  };

  const onEpicInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    dataId?: string
  ) => {
    const target = e.target as HTMLInputElement;
    const id = target.id as string;
    const value = target.value as string;
    const obj = dataId
      ? epics?.filter((e) => e.epicNumber === dataId)[0]
      : epicInput;

    id &&
      setEpicInput({
        ...obj,
        [id]: value,
      });
  };

  const onTaskCreate = () => {
    const currentDate = getCurrentDate();
    const updateTaskWithId = {
      ...taskInput,
      userId: currentUser?.id,
      dateCreation: currentDate,
      taskNumber: taskInput?.taskNumber ?? generateTaskNumber(),
    };
    updateTaskWithId.status
      ? updateTaskWithId.status
      : (updateTaskWithId.status = "To Do");
    const currTasks = tasks || [];
    currTasks?.push(updateTaskWithId);
    setTasks(currTasks);
    setTaskInput(undefined);
  };

  const onEpicCreate = () => {
    const currentDate = getCurrentDate();
    const updateEpicWithId = {
      ...epicInput,
      userId: currentUser?.id,
      dateCreation: currentDate,
      epicNumber: epicInput?.epicNumber ?? generateTaskNumber(),
    };
    updateEpicWithId.status
      ? updateEpicWithId.status
      : (updateEpicWithId.status = "To Do");
    const currEpic = epics || [];
    currEpic?.push(updateEpicWithId);
    setEpics(currEpic);
    setEpicInput(undefined);
  };

  const onTaskEdit = (input: InputTypes, id: string) => {
    if (tasks) {
      const inputIndex = tasks.findIndex((obj) => obj.taskNumber === id);
      if (inputIndex >= 0 && input) {
        let taskLists = [...tasks];
        taskLists[inputIndex] = { ...taskLists[inputIndex], ...input };
        setTasks(taskLists);
        setTaskInput(undefined);
      }
    }
  };

  const onEpicEdit = (input: InputTypes, id: string) => {
    if (epics) {
      const inputIndex = epics.findIndex((obj) => obj.epicNumber === id);
      if (inputIndex >= 0 && input) {
        let epicLists = [...epics];
        epicLists[inputIndex] = { ...epicLists[inputIndex], ...input };
        console.log(input);
        setEpics(epicLists);
        setEpicInput(undefined);
      }
    }
  };

  return {
    onTaskInputChange,
    onTaskCreate,
    onTaskEdit,
    onEpicInputChange,
    onEpicCreate,
    onEpicEdit,
  };
};
