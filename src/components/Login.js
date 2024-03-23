import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'; // Import Bootstrap components
import Header from './Header';


const LogIn = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your login logic here
        console.log(formData);
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
