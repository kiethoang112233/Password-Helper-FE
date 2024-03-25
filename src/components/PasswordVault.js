import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardText, Button, Row, Col, Alert } from 'reactstrap';
import Header from './Header';

const PasswordVault = ({ secretKey }) => {
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        fetchPasswords();
    }, []);

    const fetchPasswords = async () => {
        try {
            const response = await axios.get('credential/');
            const { data } = response.data;
            setPasswords(data);
        } catch (error) {
            console.error('Error fetching passwords:', error);
        }
    };

    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="mb-4 text-center">Password Vault</h1>
                <div className="d-flex flex-column align-items-center">
                    {passwords.length !== 0 && passwords.map((password) => (
                        <Card key={password.id} className="mb-3 w-50">
                            <CardBody>
                                <CardTitle tag="h5" className="mb-3">{password.platform}</CardTitle>
                                <CardText className="mb-2">
                                    <strong>Username:</strong> {password.username}
                                </CardText>
                                <Link to={`/password-entry/${password._id}`}>
                                    <Button color="primary">View Details</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    ))}

                    {passwords.length === 0 && <Alert color='warning'>No credentials are available in the vault</Alert>}
                </div>
                <Row className="mt-4 justify-content-center">
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/add-credential" color="primary" size="md">
                            Add Credential
                        </Button>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <Button tag={Link} to="/home" color="secondary" size="md">
                            Home
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PasswordVault;
