import React, { useState } from 'react';
import { Container, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from "react-router-dom";

const ImportKey = ({ handleSetSecretKey }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [importKeyError, setImportKeyError] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    let navigate = useNavigate();
    const navigateHome = () => {
        let path = "/home"
        navigate(path);
    }

    const handleImportKey = () => {
        if (selectedFile) {
            // Read the file content, a text file with the secret key
            const reader = new FileReader();
            reader.onload = (e) => {
                const key = e.target.result;

                if (key) {
                    console.log("Key", key)

                    // set global state state
                    handleSetSecretKey(key, selectedFile);
                }
                // content is null
                else {
                    setImportKeyError(true)
                }
            };
            reader.readAsText(selectedFile);
            // Success read + redirect to the home screen
            navigateHome();
        } else {
            alert('Please select a file');
        }
    };

    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="text-center mb-4">Import Secret Key</h1>
                {importKeyError && <Alert color="danger">Unable to import key. Try another file</Alert>}
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
