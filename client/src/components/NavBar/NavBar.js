import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {



    const location = useLocation();
    let pathname = location.pathname;

    const selectedPath = "text-dark";


    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Tomato</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={pathname === "/" ? selectedPath: ""}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/my-profile"  className={pathname === "/my-profile" ? selectedPath: ""}>My profile</Nav.Link>
                        <Nav.Link as={Link} to="/friends-profile"  className={pathname === "/friends-profile" ? selectedPath: ""}>Friend's profile</Nav.Link>
                        <Nav.Link as={Link} to="/login"  className={pathname === "/login" ? selectedPath: ""}>Login</Nav.Link>
                        <Nav.Link as={Link} to="/sign-up"  className={pathname === "/sign-up" ? selectedPath: ""}>Signup</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
