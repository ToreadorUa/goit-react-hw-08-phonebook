import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AddContactModal } from 'components/Form/AddContactModal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const ContactsPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleShowModal = () => setIsShowModal(true);
  const handleCloseModal = () => setIsShowModal(false);

  return (
    <>
      <Filter />
      <ContactList />
      <Button className="btn-danger" onClick={handleShowModal}>
        Add Contact
      </Button>
      {isShowModal && <AddContactModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default ContactsPage;
