import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const LoginForm = lazy(() => import('../pages/Login'));
const RegisterForm = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const { token, isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              !!token ? <ContactsPage /> : <Navigate to="/" />
              // <PrivateRoute component={<ContactsPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterForm />}
                redirectTo="/contacts"
              />
            }
          />
        </Route>
      </Routes>
    )
  );
};
