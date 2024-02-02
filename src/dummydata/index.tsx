import { InputTypes } from "../store/trackerStore";

export type User = {
  name: string;
  id: number;
};

export const userData: User[] = [
  {
    name: "John",
    id: 123,
  },
  {
    name: "Lina",
    id: 124,
  },
  {
    name: "Daphne",
    id: 125,
  },
  {
    name: "Asher",
    id: 126,
  },
];

export const currentLoginUser: User = {
  name: "John",
  id: 123,
};

export const taskLists: InputTypes[] = [];
