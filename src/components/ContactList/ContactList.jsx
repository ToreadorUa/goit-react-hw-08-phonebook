import { EditContactModal } from 'components/Form/EditContactModal';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Rings } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/Contacts/selectors';
import { delContactThunk, getContactsThunk } from 'redux/Contacts/thunk';
import { styled } from 'styled-components';
import editImg from '../../images/edit.png';
import deleteImg from '../../images/delete.png';
import phone from '../../images/phone.png';

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
              backgroundColor: idx % 2 === 0 ? '#F8F9FA' : 'e7e7e6',
            }}
          >
            <span style={{ width: '200px' }}>{name}:</span>
            <span>
              <img
                src={phone}
                alt="phone"
                width="33"
                style={{ verticalAlign: 'sub' }}
              />
              - {number}
            </span>
            <div>
              <img
                src={editImg}
                alt="edit"
                width="45"
                style={{ cursor: 'pointer' }}
                onClick={() => handleEditOpen({ id, name, number })}
              />
              <img
                src={deleteImg}
                alt="delete"
                width="45"
                style={{ cursor: 'pointer' }}
                onClick={() => handleDelete(id)}
              />
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

const Li = styled(ListGroupItem)`
  display: flex;
  justify-content: space-between;
  background: bisque;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  padding-left: 0;
`;
