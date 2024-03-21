// PasswordGenerator.js
import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [passwordSize, setPasswordSize] = useState(8);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const generateRandomPassword = () => {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';
        let password = '';
        for (let i = 0; i < passwordSize; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        setGeneratedPassword(password);
    };

    const handleChangeSize = (e) => {
        setPasswordSize(parseInt(e.target.value));
    };

    return (
        <div className="container">
            <h1>Password Generator</h1>
            <div className="form-group">
                <label>Password Size:</label>
                <input
                    type="number"
                    value={passwordSize}
                    min={8}
                    max={20}
                    onChange={handleChangeSize}
                />
            </div>
            <div className="form-group">
                <label>Generated Password:</label>
                <input type="text" value={generatedPassword} readOnly />
            </div>
            <button onClick={generateRandomPassword}>Generate Password</button>
        </div>
    );
};

export default PasswordGenerator;
