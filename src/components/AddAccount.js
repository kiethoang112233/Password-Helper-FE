// AddAccount.js
import React, { useState } from 'react';

const AddAccount = () => {
    const [platform, setPlatform] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., make API call to save account data
        console.log({ platform, username, password });
    };

    return (
        <div className="container">
            <h1>Add Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Platform:</label>
                    <input type="text" value={platform} onChange={(e) => setPlatform(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Save Account</button>
            </form>
        </div>
    );
};

export default AddAccount;
