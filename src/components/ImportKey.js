import React, { useState } from 'react';
import { Container, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';

const ImportKey = ({ setSecretKey, history }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleImportKey = () => {
        if (selectedFile) {
            // Read the file content (assuming it's a text file with the secret key)
            const reader = new FileReader();
            reader.onload = (e) => {
                const key = e.target.result;
                setSecretKey(key);
                // Redirect to the home screen or any other desired destination
                history.push('/home');
            };
            reader.readAsText(selectedFile);
        } else {
            alert('Please select a file');
        }
    };

    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="text-center mb-4">Import Secret Key</h1>
                <FormGroup>
                    <Label for="keyFile">Select Key File:</Label>
                    <Input type="file" accept='.txt' id="keyFile" onChange={handleFileChange} />
                </FormGroup>
                <div className="text-center mb-3">
                    <Button block color="primary" size="md" onClick={handleImportKey}>
                        Import Key
                    </Button>
                </div>
                <div className="text-center">
                    <Link to="/home">
                        <Button color="secondary">Home</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default ImportKey;
