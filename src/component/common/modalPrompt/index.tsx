import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type Props = {
  title: string;
  toShow: boolean;
  bodyContent: JSX.Element | string;
  onClose: () => void;
  onSave: () => void;
  closeButtonText?: string;
  saveButtonText?: string;
};

const ModalPrompt = (props: Props) => {
  const {
    title,
    toShow,
    bodyContent,
    onClose,
    onSave,
    saveButtonText,
    closeButtonText,
  } = props;
  return (
    <Modal show={toShow} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyContent}</Modal.Body>
      <Modal.Footer>
        {closeButtonText ? (
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        ) : null}
        {saveButtonText ? (
          <Button variant="primary" onClick={onSave}>
            {saveButtonText}
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPrompt;
