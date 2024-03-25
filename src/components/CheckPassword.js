import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { BASE_URL } from '../Config';

const CheckPassword = () => {
    const [showInstruction, setShowInstruction] = useState(true);
    const [password, setPassword] = useState('');
    const [leakCount, setLeakCount] = useState(0);
    const [isChecking, setIsChecking] = useState(false);
    const [error, setError] = useState('');

    const checkPasswordLeak = async () => {
        setIsChecking(true);
        try {
            const response = await axios.post(`${BASE_URL}/password/check-leak`, { password });
            setLeakCount(response.data.leakCount);
            setShowInstruction(false);
        } catch (error) {
            setError('Error checking password leak.');
        } finally {
            setIsChecking(false);
        }
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
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
                                    type='text'
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
                            {error && <p className="text-danger">{error}</p>}
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
