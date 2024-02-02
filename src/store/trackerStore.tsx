import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../dummydata";

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
  tasks?: InputTypes[];
  currentLoginUser?: User;
  setCurrentLoginUser: (id: User) => void;
  userList?: User[];
  setUserList: (list: User[]) => void;
  setTasks: (data: InputTypes[]) => void;
};

export const useTrackerStore = create<TrackerDetails>()(
  persist(
    (set) => ({
      input: undefined,
      tasks: undefined,
      currentLoginUser: undefined,
      setInput: (obj) => set({ input: obj }),
      setCurrentLoginUser: (id) => set({ currentLoginUser: id }),
      userList: undefined,
      setUserList: (list) => set({ userList: list }),
      setTasks: (data) => set({ tasks: data }),
    }),
    {
      name: "tracker-data",
    }
  )
);
