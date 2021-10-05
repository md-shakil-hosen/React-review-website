import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <Navbar className="navbar" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <h3 className="brand-name">Sopno Online Academy</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light text-center" to="/home">Home</NavLink>
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light" to="/study">Study</NavLink>
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light" to="/services">Skills Development</NavLink>
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light" to="/about">About Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;