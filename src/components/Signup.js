import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import Header from './Header';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import axios from 'axios';
import { BASE_URL } from '../Config';

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: '',
        fullName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const [signUpError, setSignUpError] = useState(false);
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleResetFormData = () => {
        setFormData({
            userName: '',
            fullName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        });
    };

    const saveToken = (token) => {
        setToken(token); // set token to AuthProvider
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/auth/signup`, formData);
            const { token } = response.data; // Extract token from response
            saveToken(token); // Save token to AuthProvider
            navigate('/home'); // Redirect to home page after successful sign-up
        } catch (error) {
            setSignUpError(true); // Set sign-up error state to true
            handleResetFormData(); // Reset form data
            console.error('Error signing up:', error); // Log error to console
        }
    };

    const { userName, fullName, email, password, passwordConfirm } = formData;
    const isSignUpDisabled = password !== passwordConfirm || !userName || !fullName || !email || !password || !passwordConfirm;

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {signUpError && <Alert color="danger">Unable to sign up. Please try again.</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="userName">Username<sup className="text-danger">*</sup></Label>
                                <Input type="text" name="userName" id="userName" value={userName} onChange={handleChange} placeholder="Enter your username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="fullName">Full Name<sup className="text-danger">*</sup></Label>
                                <Input type="text" name="fullName" id="fullName" value={fullName} onChange={handleChange} placeholder="Enter your full name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email<sup className="text-danger">*</sup></Label>
                                <Input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter your email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password<sup className="text-danger">*</sup></Label>
                                <Input type="password" name="password" id="password" value={password} onChange={handleChange} placeholder="Enter your password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordConfirm">Confirm Password<sup className="text-danger">*</sup></Label>
                                <Input type="password" name="passwordConfirm" id="passwordConfirm" value={passwordConfirm} onChange={handleChange} placeholder="Confirm your password" />
                            </FormGroup>
                            <Button color="primary" block disabled={isSignUpDisabled}>Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SignUp;
