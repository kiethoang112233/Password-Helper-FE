// PasswordEntry.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardText, Button, Alert } from 'reactstrap';
import Header from './Header';

const PasswordEntry = ({ secretKey }) => {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);
    const [decryptedPassword, setDecryptedPassword] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDecryptionErr, setIsDecryptionErr] = useState(false);

    const decryptPassword = async (encryptedPassword) => {
        try {
            const response = await axios.post('password/decrypt', { "secretKey": secretKey, "encryptedPassword": encryptedPassword });
            const { data } = response.data;
            return data.decryptedPassword;
        } catch (error) {
            console.error('Error fetching passwords:', error);
            return null;
        }
    };

    const handleDecryptPassword = async () => {
        if (!entry || entry.encryptedPassword === "") {
            setDecryptedPassword(null)
        }

        const decrypted = await decryptPassword(entry.password);
        setDecryptedPassword(decrypted);

        // an error happened in decrypting the password
        if (!decrypted) setIsDecryptionErr(true);

        setIsDisabled(true);  // Set 'decrypt' button to disabled when clicked
    };


    const fetchPasswordEntry = async () => {
        try {
            const response = await axios.get(`credential/${id}`);
            const { data } = response.data;
            setEntry(data);
        } catch (error) {
            console.error('Error fetching passwords:', error);
        }
    };

    useEffect(() => {
        fetchPasswordEntry();
    }, [id]);

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
                                <strong>Encrypted Password:</strong> {entry.password}
                            </CardText>
                            <div className="d-flex justify-content-between align-items-center">
                                <CardText>
                                    <strong>Decrypted Password:</strong> {decryptedPassword}
                                </CardText>
                                <Button color='primary' onClick={handleDecryptPassword} disabled={isDisabled}>Decrypt</Button>
                            </div>
                        </CardBody>
                    </Card>
                )}
                <div className="text-center">
                    {isDecryptionErr && (<Alert color='warning'>Unable to decrypt the password. Please check your key!</Alert>)}
                    <Link to="/password-vault">
                        <Button color="secondary">Password Vault</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default PasswordEntry;
