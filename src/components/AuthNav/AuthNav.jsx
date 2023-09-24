import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/login" className="me-3">
        SignIn
      </Link>
      <Link to="/register">SignUp</Link>
    </div>
  );
};
