import { currentLoginUser } from "../dummydata";
import { useTrackerStore } from "../store/trackerStore";

export const useUserData = () => {
  const { tasks: taskLists } = useTrackerStore();
  const tasks = taskLists.filter((elem) => elem.userId === currentLoginUser.id);

  return {
    tasks,
  };
};
