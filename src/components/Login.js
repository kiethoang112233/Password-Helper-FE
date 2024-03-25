import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'; // Import Bootstrap components
import Header from './Header';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import axios from 'axios';
import { BASE_URL } from '../Config';

const LogIn = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const { setToken } = useAuth();

    const [loginError, setLoginError] = useState(false);

    let navigate = useNavigate();
    const navigateHome = () => {
        let path = "/home";
        navigate(path);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveToken = (token) => {
        setToken(token); // set token to AuthProvider
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, formData);
            const { token } = response.data;
            setLoginError(false);
            console.log('Login successful');
            // save JWT token
            saveToken(token);
            // Navigates to home screen
            navigateHome();
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError(true);
        }
    };


    const { userName, password } = formData;
    const isLoginDisabled = !userName || !password;

    return (
        <>
            <Header></Header>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Login</h2>
                        {loginError && <Alert color="danger">Unable to Log in. Please try again.</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="userName">Username<sup className="text-danger">*</sup></Label>
                                <Input type="text" name="userName" id="userName" value={userName} onChange={handleChange} placeholder="Enter your username" />
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
