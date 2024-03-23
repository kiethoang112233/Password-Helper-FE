// PasswordEntry.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Header from './Header';

const PasswordEntry = ({ secretKey }) => {
    const { id } = useParams();
    const [entry, setEntry] = useState(null);
    const [decryptedPassword, setDecryptedPassword] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);

    // TODO: calling API /decrypt
    const decryptPassword = (encrypted) => {
        console.log(encrypted)
        return "Hello world";
    }

    const handleDecryptPassword = () => {
        if (!entry || entry.encryptedPassword === "") {
            setDecryptedPassword(null)
        }

        // TODO: calls API to decrypt password + handle cases
        const decrypted = decryptPassword(entry.encryptedPassword);

        setDecryptedPassword(decrypted);
        setIsDisabled(true);  // Set 'decrypt' button to disabled when clicked
    };

    // TODO: remove placeholder
    const sample = { id: 1, platform: 'Instagram', username: 'user1', encryptedPassword: 'ebcf7be60571dad257b2020d6639a9aa34386e719cd82a9dbfe67842958c6613b338f1e6f3c6ecf67c31dbdea9609c90669b28dc0b80d9f8f09e111252800995ed80492a4bce5924aee1be6ecddd55fa17a6eb30ac3b78a3a93eb64e87e344c9ce1057d5d7988a6f09644830cc' }

    // TODO: fetch data from API
    useEffect(() => {
        // TODO: Fetch password entry data based on ID
        // axios.get(`/api/passwords/${id}`).then((response) => {
        //     setEntry(response.data);
        // });

        setEntry(sample)
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
                                <strong>Encrypted Password:</strong> {entry.encryptedPassword}
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
                    <Link to="/password-vault">
                        <Button color="secondary">Password Vault</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default PasswordEntry;
