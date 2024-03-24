import React from 'react';
import { Container, Navbar as BootstrapNavbar, NavbarBrand, Button } from 'reactstrap';
import { useAuth } from "./AuthProvider";

const Header = () => {
    const auth = useAuth();
    return (
        <BootstrapNavbar color="dark" dark expand="md" className="mb-4">
            <Container className="d-flex justify-content-between">
                <NavbarBrand href="/">Password Helper</NavbarBrand>
            </Container>
            {
                auth.token && (
                    <Button variant="outline-light" onClick={() => auth.logOut()}>
                        Sign Out
                    </Button>
                )
            }
        </BootstrapNavbar >
    );
}

export default Header;
