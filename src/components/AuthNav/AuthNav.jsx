import { useAuth } from 'hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthNav = () => {
  const { user } = useAuth();
  return (
    <div>
      <Link to="/login" className="me-3">
        SignIn
      </Link>
      <Link to="/register">SignUp</Link>
    </div>
  );
};
