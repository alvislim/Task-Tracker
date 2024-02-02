import { Link } from "@tanstack/react-router";
import { InputTypes } from "../../../../../store/trackerStore";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

type Props = {
  task: InputTypes;
};

const TaskDetailCard = (props: Props) => {
  const { task } = props;

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
              {ListGroupItem("Region", task.region)}
              {ListGroupItem("Owner", task.owner)}
              {ListGroupItem("Deadline", task.dueDate)}
            </ListGroup>
          </div>
          <div className="desc-wrapper">
            <Card.Subtitle>Description</Card.Subtitle>
            <Card.Text>{task.description}</Card.Text>
          </div>
        </div>
        {task.taskNumber ? (
          <Link
            to="/edit/$id"
            params={{ id: task.taskNumber }}
            preload="intent"
          >
            <Button variant="success">Edit</Button>
          </Link>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default TaskDetailCard;
