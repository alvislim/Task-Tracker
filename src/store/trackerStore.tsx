import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../dummydata";

export type InputTypes = {
  epic?: string;
  description?: string;
  dateCreation?: string;
  owner?: string;
  taskNumber?: string;
  userId?: number;
  dueDate?: string;
  status?: string;
  epicNumber?: string;
};

export type selectedEpic = {
  name: string;
  id: string;
};

type TrackerDetails = {
  taskInput?: InputTypes;
  setTaskInput: (input: InputTypes | undefined) => void;
  epicInput?: InputTypes;
  setEpicInput: (input: InputTypes | undefined) => void;
  tasks?: InputTypes[];
  currentUser?: User;
  setCurrentUser: (id: User) => void;
  userList?: User[];
  setUserList: (list: User[]) => void;
  setTasks: (data: InputTypes[]) => void;
  epics?: InputTypes[];
  setEpics: (obj: InputTypes[]) => void;
  setSection: (e: string) => void;
  section?: string;
  setView: (e: string) => void;
  view: string;
  selectedEpic?: selectedEpic;
  setSelectedEpic: (e: selectedEpic) => void;
};

export const useTrackerStore = create<TrackerDetails>()(
  persist(
    (set) => ({
      taskInput: undefined,
      tasks: undefined,
      currentUser: undefined,
      epicInput: undefined,
      setEpicInput: (obj) => set({ epicInput: obj }),
      setTaskInput: (obj) => set({ taskInput: obj }),
      setCurrentUser: (id) => set({ currentUser: id }),
      userList: undefined,
      setUserList: (list) => set({ userList: list }),
      setTasks: (data) => set({ tasks: data }),
      epics: undefined,
      setEpics: (obj) => set({ epics: obj }),
      section: undefined,
      setSection: (e) => set({ section: e }),
      view: "task",
      setView: (e) => set({ view: e }),
      selectedEpic: undefined,
      setSelectedEpic: (e) => set({ selectedEpic: e }),
    }),
    {
      name: "tracker-storee",
    }
  )
);
