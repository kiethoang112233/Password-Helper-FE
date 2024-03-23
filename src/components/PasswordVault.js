import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';
import Header from './Header';

const PasswordVault = () => {
    //  const [passwords, setPasswords] = useState([]);

    // useEffect(() => {
    //     fetchPasswords();
    // }, []);

    // const fetchPasswords = async () => {
    //     try {
    //         const response = await axios.get('your-api-url/passwords');
    //         setPasswords(response.data);
    //     } catch (error) {
    //         console.error('Error fetching passwords:', error);
    //     }
    // };
    // TODO: Mock password data
    const passwords = [
        { id: 1, platform: 'Instagram', username: 'user1', encryptedPassword: 'encrypted1' },
        { id: 2, platform: 'Facebook', username: 'user2', encryptedPassword: 'encrypted2' },
    ];

    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="mb-4 text-center">Password Vault</h1>
                <div className="d-flex flex-column align-items-center">
                    {passwords.map((password) => (
                        <Card key={password.id} className="mb-3 w-50">
                            <CardBody>
                                <CardTitle tag="h5" className="mb-3">{password.platform}</CardTitle>
                                <CardText className="mb-2">
                                    <strong>Username:</strong> {password.username}
                                </CardText>
                                <Link to={`/password-entry/${password.id}`}>
                                    <Button color="primary">View Details</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    ))}
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
