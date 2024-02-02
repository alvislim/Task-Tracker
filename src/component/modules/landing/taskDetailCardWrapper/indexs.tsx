import { InputTypes } from "../../../../store/trackerStore";
import "./index.scss";
import TaskDetailCard from "./taskDetailCard";

type Props = {
  tasks?: InputTypes[];
  category: string;
};

const TaskDetailCardWrapper = (props: Props) => {
  const { tasks, category } = props;

  return (
    <div className="task-detail-card-wrapper">
      <h3>{category}</h3>
      <div className="cards-container">
        {tasks
          ? tasks.map((elem, index) => {
              if (elem.status === category) {
                return (
                  <TaskDetailCard
                    task={elem}
                    key={`${elem.taskNumber}_${index}`}
                  />
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default TaskDetailCardWrapper;
