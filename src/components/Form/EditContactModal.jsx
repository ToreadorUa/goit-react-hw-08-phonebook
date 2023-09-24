import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk, editContactThunk } from 'redux/Contacts/thunk';
import { contactsSelector } from 'redux/Contacts/selectors';
import { nanoid } from 'nanoid';
import { schema } from 'components/yupSchema';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';

export function EditContactModal({ userToEdit, handleCloseModal }) {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactsSelector);

  useEffect(() => console.log(userToEdit), []);

  const { Formik } = formik;

  const handleSubmit = ({ name, number }) => {
    console.log(name);
    const editedContact = {
      id: userToEdit.id,
      name: name,
      number: number,
    };
    console.log(editedContact);
      dispatch(editContactThunk(editedContact));
    handleCloseModal();
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: userToEdit.name,
        number: userToEdit.number,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Modal show={true} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Contact Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    isValid={touched.number && !errors.number}
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Formik>
  );
}
