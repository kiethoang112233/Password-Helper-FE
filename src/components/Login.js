import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'; // Import Bootstrap components
import Header from './Header';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const LogIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { setToken } = useAuth();

    const [loginError, setLoginError] = useState(false);

    let navigate = useNavigate();
    const navigateHome = () => {
        let path = "/home"
        navigate(path);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveToken = (token) => {
        setToken(token) // set token to AuthProvider
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Placeholder login logic (replace with actual API call)
        const mockUser = { username: 'test', password: 'test' };
        // TODO: actually look at API call response + set JWT token
        if (formData.username === mockUser.username && formData.password === mockUser.password) {
            setLoginError(false)
            console.log('Login successful'); // Placeholder success message
            // save JWT token
            // TODO: parse token out of response
            saveToken("SECRET_TOKEN")

            // Navigates to home screen
            navigateHome()

        } else {
            console.log('Login failed'); // Placeholder failure message
            // Handle login failure (e.g., display error message to user)
            setLoginError(true)
        }
    };


    const { username, password } = formData;
    const isLoginDisabled = !username || !password;

    return (
        <>
            <Header></Header>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Login</h2>
                        {loginError && <Alert color="danger">Invalid username or password. Please try again.</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="username">Username<sup className="text-danger">*</sup></Label>
                                <Input type="text" name="username" id="username" value={username} onChange={handleChange} placeholder="Enter your username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password<sup className="text-danger">*</sup></Label>
                                <Input type="password" name="password" id="password" value={password} onChange={handleChange} placeholder="Enter your password" />
                            </FormGroup>
                            <Button color="primary" block disabled={isLoginDisabled}>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LogIn;
