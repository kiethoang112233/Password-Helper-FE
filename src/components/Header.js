import React from 'react';
import { Container, Navbar as BootstrapNavbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <BootstrapNavbar color="dark" dark expand="md" className="mb-4">
            <Container className="d-flex justify-content-between">
                <NavbarBrand href="/">Password Helper</NavbarBrand>
            </Container>
        </BootstrapNavbar>
    );
}

export default Header;
