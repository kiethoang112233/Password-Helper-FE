import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { BASE_URL } from '../Config';

const GeneratePassword = () => {
    const [passwordSize, setPasswordSize] = useState(12);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const generateRandomPassword = async () => {
        setIsGenerating(true);

        const requestBody = {
            length: passwordSize
        };

        try {
            const response = await axios.post(`${BASE_URL}/password/generate`, requestBody);
            setGeneratedPassword(response.data.password);
        } catch (error) {
            console.error('Error generating password:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleChangeSize = (e) => {
        setPasswordSize(parseInt(e.target.value));
    };

    return (
        <>
            <Header></Header>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <h1 className='text-center mb-4'>Password Generator</h1>
                        <Form>
                            <FormGroup>
                                <Label for='passwordSize'>Password Size:</Label>
                                <Input
                                    type='number'
                                    id='passwordSize'
                                    value={passwordSize}
                                    min={12}
                                    max={20}
                                    onChange={handleChangeSize}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='generatedPassword'>Generated Password:</Label>
                                <Input
                                    type='text'
                                    id='generatedPassword'
                                    value={generatedPassword}
                                    readOnly
                                    placeholder="Click 'Generate Password' to get started"
                                />
                            </FormGroup>
                            <div className="text-center mb-3">
                                <Button
                                    color='primary'
                                    block
                                    onClick={generateRandomPassword}
                                    disabled={isGenerating}
                                >
                                    {isGenerating ? 'Generating...' : 'Generate Password'}
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

export default GeneratePassword;
