import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../hooks';
import logo from '../logo.svg';
import { Home } from '../pages/Home';
import './admin.css';
export function AdminLayout(props) {

    const { children } = props;
    const { logout, auth } = useAuth()
    if (!auth) return <Home />

    return (
        <div>
            <Navbar collapseOnSelect expand="md" className='navBarAdmin'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Laureate - Admin
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/admin/empleados">Empleados</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => logout()}>Cerrar sesión</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='conteinerBody'>
                {children}
            </div>
        </div>
    )
}
