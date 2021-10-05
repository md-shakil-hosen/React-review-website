import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory as useRegistration } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const registration = useRegistration()
    const Reg = () => {
        registration.push('/Reg')
    }
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
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light" to="/skill-dev">Study</NavLink>
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light" to="/services">Skills Development</NavLink>
                        <NavLink className=" nabLink text-decoration-none mx-3 text-light" to="/about">About Us</NavLink>
                    </Nav>
                    <Button id='reg' onClick={Reg} className="mx-1">Registration</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;