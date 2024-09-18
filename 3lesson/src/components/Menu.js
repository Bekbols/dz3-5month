import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand href='#home'>React-boostrap</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink to="/">Main Page</NavLink>
                        <NavLink to="/userRegisterPage">user Register Page</NavLink>
                        <NavLink to="/users">Users list Page</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Menu;
