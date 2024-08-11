import React from 'react';
import { Container, DropdownButton, Nav, Navbar, Dropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../Images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
                    <Navbar.Brand as={Link} to="/">
                         <img className="logo" src={ logo } alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                         <Nav className="ms-auto">
                              {
                                   user?.email &&
                                   <Nav.Link as={Link} to="/control-all-booking"><i class="fas fa-folder-open"></i> Control All Booking</Nav.Link>
                              }
                              {
                                   user?.email &&
                                   <Nav.Link as={Link} to="/add-plan"><i class="fas fa-folder-plus"></i> Add Tour Package</Nav.Link>
                              }

                              {user?.email ?
                                   <DropdownButton className="nav-user" align="end" title={user.displayName} id="dropdown-menu-align-end">
                                        <Dropdown.Item as={Link} to="/profile" eventKey="1"><i class="far fa-user-circle"></i> Profile</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/my-booking" eventKey="2"><i class="fas fa-bookmark"></i> My Booking</Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><i class="fas fa-cog"></i> Settings</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={logOut} eventKey="4">
                                             <i className="fas fa-sign-out-alt"></i> Log Out
                                        </Dropdown.Item>
                                   </DropdownButton>
                                   : <Link to="/login" className='btn my-bg-color'><i className="fas fa-sign-in-alt"></i> Login</Link>}
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};

export default Header;