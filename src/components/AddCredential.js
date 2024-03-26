import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

const AddCredential = ({ secretKey }) => {
    const [platform, setPlatform] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [addCredError, setAddCredError] = useState(false);
    const [isCredentialAdded, setIsCredentialAdded] = useState(false);

    const createCredential = async () => {
        try {
            const response = await axios.post(`credential/create`,
                {
                    "secretKey": secretKey,
                    "password": password,  // send plaintext password for encryption
                    "platform": platform,
                    "username": username
                }
            );

            // unable to signup
            if (response.status != 200) {
                setAddCredError(true);
            }
            else {
                setIsCredentialAdded(true);
            }


        } catch (error) {
            setAddCredError(true); // Set sign-up error state to true
            console.error('Error creating credential:', error); // Log error to console
        }
    };

    const handleSubmit = async () => {
        await createCredential();
    };

    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="text-center mb-4">Add Credential</h1>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="platform">Platform:</Label>
                        <Input
                            type="text"
                            id="platform"
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username:</Label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">(Plaintext) Password:</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <div className="text-center mb-3">
                        {!secretKey || secretKey === "" ? <Alert color="warning">Please import a key before adding new credential!</Alert> : null}
                        {isCredentialAdded ? <Alert color="success">New Credential added!</Alert> : null}
                        <Button
                            onClick={createCredential}
                            color="primary"
                            block disabled={isCredentialAdded || !password || !secretKey || secretKey === ""}>
                            Save Credential
                        </Button>
                    </div>
                    <div className="text-center">
                        {addCredError && <Alert color="warning">Unable to create new Credential!</Alert>}
                        <Link to="/password-vault">
                            <Button color="secondary">Password Vault</Button>
                        </Link>
                    </div>

                </Form>
            </Container>
        </>
    );
};

export default AddCredential;
