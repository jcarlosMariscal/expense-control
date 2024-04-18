import { Modal } from 'flowbite-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ModalFormAddContent } from './ModalFormAddContent';

export const ModalFormAddComponent = () => {
  const { modalAdd } = useContext(AppContext);
  const { isModalAddOpen, toggleModalAdd, titleModalAdd } = modalAdd;
  // const hola = () => { }
  // const now = firebase.firestore.Timestamp.now();
  return (
    <>
      <Modal show={isModalAddOpen} onClose={() => toggleModalAdd(false)}>
        <Modal.Header>{ titleModalAdd }</Modal.Header>
        <Modal.Body>
          <ModalFormAddContent color='purple'  />
        </Modal.Body>
      </Modal>

    </>
  )
}
