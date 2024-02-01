import { Link } from "@tanstack/react-router";
import { InputTypes } from "../../../../store/trackerStore";
import "./index.scss";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

type Props = {
  tasks: InputTypes[];
  category: string;
};

const TaskDetailCard = (props: Props) => {
  const { tasks, category } = props;

  return (
    <div className="task-detail-card-wrapper">
      <h3>{category}</h3>
      {tasks.map((elem) => {
        if (elem.status === category) {
          return (
            <Card className="card-container" key={elem.taskNumber}>
              <Card.Body>
                <div className="card-wrapper">
                  <div className="list-wrapper">
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Card.Title>Task Number</Card.Title>
                        <Card.Text>{elem.taskNumber}</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Card.Subtitle>Region</Card.Subtitle>
                        <Card.Text>{elem.region}</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Card.Subtitle>Owner</Card.Subtitle>
                        <Card.Text>{elem.owner}</Card.Text>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Card.Subtitle>Deadline</Card.Subtitle>
                        <Card.Text>{elem.dueDate}</Card.Text>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="desc-wrapper">
                    <Card.Subtitle>Description</Card.Subtitle>
                    <Card.Text>{elem.description}</Card.Text>
                  </div>
                </div>
                {elem.taskNumber ? (
                  <Link to="/edit/$id" params={{ id: elem.taskNumber }}>
                    Edit
                  </Link>
                ) : null}
              </Card.Body>
            </Card>
          );
        }
      })}
    </div>
  );
};

export default TaskDetailCard;
