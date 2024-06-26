import { Button, Modal } from "flowbite-react";
import { ReactNode } from "react";
type TModalComponent = {
  controlsModal: {
    openModal: boolean;
    toggleModal: (param: boolean) => void;
  };
  title?: string;
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
  btnText?: string | boolean;
  handleClick?: () => void;
  color?: string;
  dismissible?: boolean;
  size?: string;
  className?: string;
};

export const ModalComponent = ({
  controlsModal,
  title,
  children,
  footer = true,
  header = true,
  btnText,
  handleClick,
  color,
  dismissible = false,
  size = "2xl",
  className = "",
}: TModalComponent) => {
  const { openModal, toggleModal } = controlsModal;
  return (
    <Modal
      dismissible={dismissible}
      show={openModal}
      size={size}
      onClose={() => toggleModal(false)}
      className={className}
    >
      {header && <Modal.Header>{title || "Modal Component"}</Modal.Header>}
      <Modal.Body>{children}</Modal.Body>
      {footer && (
        <Modal.Footer>
          {handleClick && (
            <Button color={color} pill onClick={() => handleClick()}>
              {btnText || "Button"}
            </Button>
          )}

          <Button color="dark" pill onClick={() => toggleModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};
// 60