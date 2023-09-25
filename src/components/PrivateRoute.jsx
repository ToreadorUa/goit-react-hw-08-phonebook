import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const isRedirect = !isLoggedIn;
  console.log(isRedirect);

  return isRedirect ? <Navigate to={redirectTo} /> : Component;
};
