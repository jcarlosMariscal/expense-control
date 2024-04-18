import { Modal } from 'flowbite-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { ModalFormAddContent } from './ModalFormAddContent';
import { alertTimer } from '../../utils/alerts';
import { createDocumentCollectionMain } from '../../firebase/firestore.service';
import { AuthContext } from '../../context/AuthContext';
import { ICollectionMain } from '../../interfaces/collections.interface';

export const ModalFormAddComponent = () => {
  const { user } = useContext(AuthContext);
  const { modalAdd } = useContext(AppContext);
  const { isModalAddOpen, toggleModalAdd, titleModalAdd } = modalAdd;
  // const hola = () => { }
  // const now = firebase.firestore.Timestamp.now();
  const sendData = async (document: ICollectionMain) => {
    if (!user) return;
    const response = await createDocumentCollectionMain("incomes", user?.uid, "incomesData", document);
    console.log(response);
    
    response.success ? alertTimer("Success", "success", 1500) : alertTimer("Error", "error", 1500);
    toggleModalAdd(false);

  }
  return (
    <>
      <Modal show={isModalAddOpen} onClose={() => toggleModalAdd(false)}>
        <Modal.Header>{ titleModalAdd }</Modal.Header>
        <Modal.Body>
          <ModalFormAddContent color='purple' sendData={sendData}  />
        </Modal.Body>
      </Modal>

    </>
  )
}
