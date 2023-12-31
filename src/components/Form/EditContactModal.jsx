import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import { useDispatch } from 'react-redux';
import { editContactThunk } from 'redux/Contacts/thunk';
import { schema } from 'components/yupSchema';
import { Modal } from 'react-bootstrap';

export function EditContactModal({ userToEdit, handleCloseModal }) {
  const dispatch = useDispatch();

  const { Formik } = formik;

  const handleSubmit = ({ name, number }) => {
    const editedContact = {
      id: userToEdit.id,
      name: name,
      number: number,
    };
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
              <Col className="mb-3">
                <Form.Group as={Col} controlId="validationFormik01">
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
                <Form.Group as={Col} controlId="validationFormik02">
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
              </Col>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" className="btn-danger" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Formik>
  );
}
