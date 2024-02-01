import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, currentLoginUser, taskLists } from "../dummydata";

export type InputTypes = {
  region?: string;
  description?: string;
  dateCreation?: string;
  owner?: string;
  taskNumber?: string;
  userId?: number;
  dueDate?: string;
  status?: string;
};

type TrackerDetails = {
  input?: InputTypes;
  setInput: (input: InputTypes) => void;
  tasks: InputTypes[];
  currentLoginUser?: User;
  setCurrentLoginUser: (id: User) => void;
};

export const useTrackerStore = create<TrackerDetails>()(
  persist(
    (set) => ({
      input: undefined,
      tasks: taskLists.tasks,
      currentLoginUser: currentLoginUser,
      setInput: (obj) => set({ input: obj }),
      setCurrentLoginUser: (id) => set({ currentLoginUser: id }),
    }),
    {
      name: "tracker-data",
    }
  )
);
