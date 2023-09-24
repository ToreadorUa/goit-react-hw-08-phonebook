// import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Rings } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { Loader } from './Loader/Loader';
import { Container } from 'react-bootstrap';

const Layout = () => (
  <Container>
    <Navigation />
    <main>
      <Suspense
        fallback={
          <Loader>
            <Rings />
          </Loader>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  </Container>
);

export default Layout;
