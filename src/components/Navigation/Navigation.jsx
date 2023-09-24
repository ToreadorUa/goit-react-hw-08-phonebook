import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo3.png';
import { Link, NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const Styles = styled.div`
  a {
    color: #7c7c7d;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: #1b1464;
    }
    &.active {
      color: #1b1464;
    }
  }
`;

export function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <Styles>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="logo" width="60" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item className="me-3">
                <NavLink to="/">Home</NavLink>
              </Nav.Item>
              {isLoggedIn && (
                <Nav.Item>
                  <NavLink to="/contacts">Contacts</NavLink>
                </Nav.Item>
              )}
            </Nav>
            <Nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}

export default Navigation;
