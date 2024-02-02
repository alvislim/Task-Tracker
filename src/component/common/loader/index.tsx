import Spinner from "react-bootstrap/Spinner";
import "./index.scss";

const Loader = () => {
  return (
    <>
      <Spinner animation="border" role="status" className="loader" />
    </>
  );
};

export default Loader;
