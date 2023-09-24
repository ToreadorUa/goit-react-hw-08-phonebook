import { useAuth } from 'hooks/useAuth';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import logoutImg from '../../images/logout.png';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(logout());

  return (
    <div className="hstack gap-3">
      <span style={{ fontWeight: 500, color: '#7C7C7D' }}>{user.name}</span>
      <img
        src={logoutImg}
        alt="logout"
        onClick={handleSubmit}
        width="45"
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};
