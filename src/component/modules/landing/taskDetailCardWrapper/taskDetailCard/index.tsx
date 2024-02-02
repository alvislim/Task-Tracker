import { Link } from "@tanstack/react-router";
import { InputTypes, useTrackerStore } from "../../../../../store/trackerStore";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

type Props = {
  task: InputTypes;
};

const TaskDetailCard = (props: Props) => {
  const { task } = props;
  const { setSection } = useTrackerStore();

  const ListGroupItem = (title: string, detail?: string) => {
    return (
      <ListGroup.Item>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
      </ListGroup.Item>
    );
  };

  return (
    <Card className="card-container">
      <Card.Body>
        <div className="card-wrapper">
          <div className="list-wrapper">
            <ListGroup variant="flush">
              {ListGroupItem("Task Number", task.taskNumber)}
              {ListGroupItem("Epic", task.epic)}
              {ListGroupItem("Owner", task.owner)}
              {ListGroupItem("Deadline", task.dueDate)}
              {ListGroupItem("Description", task.description)}
            </ListGroup>
          </div>
        </div>
        {task.taskNumber ? (
          <Link
            to="/edit/$id"
            params={{ id: task.taskNumber }}
            preload="intent"
          >
            <Button variant="success" onClick={() => setSection("task")}>
              Edit
            </Button>
          </Link>
        ) : null}
        {task.epicNumber ? (
          <Link
            to="/edit/$id"
            params={{ id: task.epicNumber }}
            preload="intent"
          >
            <Button variant="success" onClick={() => setSection("epic")}>
              Edit
            </Button>
          </Link>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default TaskDetailCard;
