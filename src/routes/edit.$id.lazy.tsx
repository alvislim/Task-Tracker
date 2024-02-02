import { createLazyFileRoute } from "@tanstack/react-router";
import { useTrackerStore } from "../store/trackerStore";

export const Route = createLazyFileRoute("/edit/$id")({
  component: Index,
});

function Index() {
  const { id } = Route.useParams();
  const { tasks } = useTrackerStore();
  const task = tasks?.filter((elem) => elem.taskNumber === id)[0];
  return (
    <div>
      <h1>{task?.dateCreation}</h1>
      <h1>{task?.taskNumber}</h1>
    </div>
  );
}
