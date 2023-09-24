import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/Contacts/thunk';
import { contactsSelector } from 'redux/Contacts/selectors';
import { nanoid } from 'nanoid';
import { schema } from 'components/yupSchema';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export function AddContactModal({ handleCloseModal }) {
  const dispatch = useDispatch();
  const { contacts } = useSelector(contactsSelector);

  const { Formik } = formik;

  const handleSubmit = ({ name, number }) => {
    console.log(name);
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already exist`);
      return;
    } else {
      const newContact = {
        name: name,
        number: number,
      };
      console.log(newContact);
      dispatch(addContactThunk(newContact));
      handleCloseModal();
    }
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        number: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Modal show={true} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
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
              {/* <Button type="submit" className="btn-danger">
                  Add
                </Button> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" className="btn-danger" onClick={handleSubmit}>
              Add Contact
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Formik>
  );
}
