import React, { useState } from 'react';

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
        <div className="container">
            <h1>Import Secret Key</h1>
            <div className="form-group">
                <label>Select Key File:</label>
                <input type="file" onChange={handleFileChange} />
            </div>
            <button onClick={handleImportKey}>Import Key</button>
        </div>
    );
};

export default ImportKey;
