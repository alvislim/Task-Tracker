import { createLazyFileRoute } from "@tanstack/react-router";
import { InputTypes, useTrackerStore } from "../store/trackerStore";
import TaskFormField from "../component/modules/landing/taskFormField";
import { useUserData } from "../hooks/useUserData";
import { status } from "../services/constants";
import { userData } from "../dummydata";

export const Route = createLazyFileRoute("/edit/$id")({
  component: Index,
});

function Index() {
  const { id } = Route.useParams();
  const { tasks, input } = useTrackerStore();
  const { onChange } = useUserData();
  const task = tasks?.filter((elem) => elem.taskNumber === id)[0];
  const inputValues: InputTypes = {
    region: input?.region ?? task?.region,
    description: input?.description ?? task?.description,
    dueDate: input?.dueDate ?? task?.dueDate,
    status: input?.status ?? task?.status,
    owner: input?.owner ?? task?.owner,
  };
  return (
    <div>
      <TaskFormField
        onChange={onChange}
        users={userData}
        status={status}
        values={inputValues}
      />
    </div>
  );
}
