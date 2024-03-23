import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; // Import Link component
import Header from './Header';

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Row className="mt-5">
                    <Col xs={12} className="text-center">
                        <h1>Password Helper</h1>
                        <p className="lead">Your go-to solution for password management and security.</p>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/generate-password" color="primary" size="lg">
                            Generate Password
                        </Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/check-password" color="primary" size="lg">
                            Check Password Leak
                        </Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/password-vault" color="primary" size="lg">
                            Password Vault
                        </Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/import-key" color="primary" size="lg">
                            Import Key
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
