import { Modal } from "flowbite-react";
import { ReactNode } from "react";
type TModalComponent = {
  controlsModal: {
    openModal: boolean;
    toggleModal: (param: boolean) => void;
  };
  title?: string;
  children: ReactNode;
  btnText?: string | boolean;
  handleClick?: () => void;
  color?: string;
  dismissible?: boolean;
  size?: string;
  className?: string;
};

export const ModalCategory = ({
  controlsModal,
  title,
  children,
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
      <Modal.Header>{title || "Modal Component"}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
// 60