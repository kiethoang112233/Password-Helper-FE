// PasswordEntry.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PasswordEntry = () => {
    const { id } = useParams();
    //const [entry, setEntry] = useState(null);

    // TODO: fetch data from API
    // useEffect(() => {
    //     // Fetch password entry data based on ID
    //     axios.get(`/api/passwords/${id}`).then((response) => {
    //         setEntry(response.data);
    //     });
    // }, [id]);
    // TODO: remove this placeholder
    const entry = [
        { id: 1, platform: 'Instagram', username: 'user1', encryptedPassword: 'encrypted1' },
    ];

    return (
        <div className="container">
            <h1>Password Entry</h1>
            {entry && (
                <div>
                    <p>Platform: {entry.platform}</p>
                    <p>Username: {entry.username}</p>
                    <p>Encrypted Password: {entry.encryptedPassword}</p>
                    {/* Decrypt password using stored secret key */}
                    {/* Display decrypted password */}
                    <p>Decrypted Password: {entry.decryptedPassword}</p>
                </div>
            )}
        </div>
    );
};

export default PasswordEntry;
