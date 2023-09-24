import { EditContactModal } from 'components/Form/EditContactModal';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/Contacts/selectors';
import {
  delContactThunk,
  editContactThunk,
  getContactsThunk,
} from 'redux/Contacts/thunk';
import { styled } from 'styled-components';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';

export const ContactList = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const { contacts, isLoading, error } = useSelector(contactsSelector);
  const filter = useSelector(state => state.filter);

  const filterArray = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(delContactThunk(id));
  };
  const handleEditOpen = user => {
    setUserToEdit(user);
    console.log(userToEdit);
    setIsModalShow(true);
    // setEditUser(user);
    // dispatch(editContactThunk(user));
  };
  const handleEdit = (id, name, number) => {
    // const userEdited = { id, name, number };
    console.log(id);
    // dispatch(editContactThunk(userEdited));
  };
  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  return (
    <>
      {isLoading && (
        <Loader>
          <Rings />
        </Loader>
      )}

      <Ul>
        {filterArray.map(({ name, number, id }, idx) => (
          <Li
            className="hstack gap-3"
            key={id}
            id={id}
            style={{
              backgroundColor: idx % 2 === 0 ? '#f0e5e5' : '#c6afaf',
            }}
          >
            <span>
              {name}: {number}
            </span>
            <div>
              <img
                src={editImg}
                alt="edit"
                width="50"
                style={{ cursor: 'pointer' }}
                onClick={() => handleEditOpen({ id, name, number })}
              />
              <img
                src={deleteImg}
                alt="delete"
                width="50"
                style={{ cursor: 'pointer' }}
                onClick={() => handleDelete(id)}
              />
              {/* <Button onClick={() => handleEditOpen({ id, name, number })}>
                Edit
              </Button>
              <Button onClick={() => handleDelete(id)}> Delete</Button> */}
            </div>
          </Li>
        ))}
      </Ul>
      {error && <div>{error}</div>}
      {isModalShow && (
        <EditContactModal
          userToEdit={userToEdit}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  background: bisque;
  font-size: 18px;
  font-weight: 500;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;
