import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap'; // Import Bootstrap components

const ErrorPage = () => {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <h1 className="display-4">404 - Page Not Found</h1>
                    <p className="lead">The page you are looking for does not exist.</p>
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;
