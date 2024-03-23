import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './Header';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Container className="mt-5">
                <h1 className="display-4 text-center mb-4">Welcome to Password Helper</h1>
                <p className="lead text-center mb-4">
                    Password Helper is your all-in-one solution for managing your passwords and enhancing your online security. With Password Helper, you can:
                </p>
                <ul className="lead mb-4">
                    <li>Generate strong and secure passwords that meet industry standards recommended by OWASP (Open Web Application Security Project).</li>
                    <li>Check if your passwords have been compromised in any data breaches.</li>
                    <li>Securely store your credentials and sensitive information in a password vault, accessible only to you.</li>
                </ul>
                <Row className="mt-4 justify-content-center">
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/sign-up" color="primary" size="lg">
                            Sign Up
                        </Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/log-in" color="primary" size="lg">
                            Log In
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
