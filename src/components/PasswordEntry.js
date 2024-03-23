// PasswordEntry.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Header from './Header';

const PasswordEntry = () => {
    const { id } = useParams();
    //const [entry, setEntry] = useState(null);

    // TODO: fetch data from API
    // useEffect(() => {
    //     // Fetch password entry data based on ID
    //     axios.get(`/api/passwords/${id}`).then((response) => {
    //         setEntry(response.data);
    //     });
    // }, [id]);
    // TODO: remove this placeholder
    const entry = [
        { id: 1, platform: 'Instagram', username: 'user1', encryptedPassword: 'encrypted1' },
    ];

    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="mb-4 text-center">Password Entry</h1>
                {entry && (
                    <Card className="w-50 mx-auto mb-4">
                        <CardBody>
                            <CardTitle tag="h5">{entry.platform}</CardTitle>
                            <CardText>
                                <strong>Username:</strong> {entry.username}
                            </CardText>
                            <CardText>
                                <strong>Encrypted Password:</strong> {entry.encryptedPassword}
                            </CardText>
                            {/* Decrypt password using stored secret key */}
                            {/* Display decrypted password */}
                            <CardText>
                                <strong>Decrypted Password:</strong> {entry.decryptedPassword}
                            </CardText>
                        </CardBody>
                    </Card>
                )}
                <div className="text-center">
                    <Link to="/password-vault">
                        <Button color="secondary">Password Vault</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default PasswordEntry;
