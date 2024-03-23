import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

const AddCredential = () => {
    const [platform, setPlatform] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., make API call to save account data
        console.log({ platform, username, password });
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
                        <Label for="password">Password:</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <div className="text-center mb-3">
                        <Button type="submit" color="primary" block>Save Credential</Button>
                    </div>
                    <div className="text-center">
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
