import { useTrackerStore } from "../store/trackerStore";

export const useUserData = () => {
  const { tasks: taskLists, currentLoginUser } = useTrackerStore();
  const tasks = taskLists?.filter(
    (elem) => elem.userId === currentLoginUser?.id
  );

  return {
    tasks,
  };
};
