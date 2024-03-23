import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

const CheckPassword = () => {
    const [showInstruction, setShowInstruction] = useState(true);
    const [password, setPassword] = useState('');
    const [leakCount, setLeakCount] = useState(0);
    const [isChecking, setIsChecking] = useState(false);

    const checkPasswordLeak = () => {
        setIsChecking(true);
        // TODO: Call API
        setLeakCount(1); // Placeholder logic for now
        setIsChecking(false);
        setShowInstruction(false);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value); // Update password state
    };

    return (
        <>
            <Header />
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col md={6}>
                        <h1 className='text-center mb-4'>Password Leak Checker</h1>
                        <Form>
                            <FormGroup>
                                <Label for='password'>Password:</Label>
                                <Input
                                    type='password' // Change input type to password
                                    id='password'
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='result'>Result:</Label>
                                <Input
                                    type='text'
                                    id='result'
                                    value={showInstruction ? "Click 'Check Password' to get started" : (leakCount === 0 ? 'No leaks found.' : `This password has been leaked ${leakCount} time(s).`)}
                                    readOnly
                                />
                            </FormGroup>
                            <div className="text-center mb-3">
                                <Button
                                    color='primary'
                                    block
                                    onClick={checkPasswordLeak}
                                    disabled={isChecking || !password} // Disable if checking or password is empty
                                >
                                    {isChecking ? 'Checking...' : 'Check Password'}
                                </Button>
                            </div>
                            <div className="text-center">
                                <Link to="/home">
                                    <Button color="secondary">Home</Button>
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CheckPassword;
