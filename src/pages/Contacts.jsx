import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AddContactModal } from 'components/Form/AddContactModal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ContactsPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleShowModal = () => setIsShowModal(true);
  const handleCloseModal = () => setIsShowModal(false);

  return (
    <>
      <Filter />
      <ContactList />
      <Button variant="primary" onClick={handleShowModal}>
        Add Contact
      </Button>
      {isShowModal && <AddContactModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default ContactsPage;

{
  /* <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AddContact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormContact handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </> */
}
