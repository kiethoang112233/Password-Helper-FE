import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './Header';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your signup logic here
        console.log(formData);
    };

    const { username, fullName, email, password, confirmPassword } = formData;
    const isSignUpDisabled = password !== confirmPassword || !username || !fullName || !email || !password || !confirmPassword;

    return (
        <>
            <Header></Header>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="username">Username<sup className="text-danger">*</sup></Label>
                                <Input type="text" name="username" id="username" value={username} onChange={handleChange} placeholder="Enter your username" />
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
                                <Label for="confirmPassword">Confirm Password<sup className="text-danger">*</sup></Label>
                                <Input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
                            </FormGroup>
                            <Button color="primary" block disabled={isSignUpDisabled}>Sign Up</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default SignUp;
