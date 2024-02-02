import { createLazyFileRoute } from "@tanstack/react-router";
import { useTrackerStore } from "../store/trackerStore";
import TaskFormField from "../component/modules/landing/taskFormField";
import { useUserData } from "../hooks/useUserData";
import { status } from "../services/constants";

export const Route = createLazyFileRoute("/edit/$id")({
  component: Index,
});

function Index() {
  const { id } = Route.useParams();
  const { tasks } = useTrackerStore();
  const { onChange, users } = useUserData();
  const task = tasks?.filter((elem) => elem.taskNumber === id)[0];
  return (
    <div>
      <TaskFormField onChange={onChange} users={users} status={status} />
      <h1>{task?.dateCreation}</h1>
      <h1>{task?.taskNumber}</h1>
    </div>
  );
}
