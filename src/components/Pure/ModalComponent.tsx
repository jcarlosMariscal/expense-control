import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";
type TModalComponent = {
  controlsModal: {
    openModal: boolean;
    setOpenModal: (param: boolean) => void;
  };
  title: string;
  children: ReactNode;
  footer: boolean;
  btnText: string | boolean;
  handleClick: () => void;
  color: string;
};

export const ModalComponent = ({
  controlsModal,
  title,
  children,
  footer,
  btnText,
  handleClick,
  color,
}: TModalComponent) => {
  const { openModal, setOpenModal } = controlsModal;
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && (
        <Modal.Footer>
          <Button color={color} pill onClick={() => handleClick()}>
            {btnText}
          </Button>

          <Button color="dark" pill onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};
