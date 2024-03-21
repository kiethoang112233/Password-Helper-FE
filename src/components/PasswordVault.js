import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PasswordVault = () => {
    //  const [passwords, setPasswords] = useState([]);

    // useEffect(() => {
    //     fetchPasswords();
    // }, []);

    // const fetchPasswords = async () => {
    //     try {
    //         const response = await axios.get('your-api-url/passwords');
    //         setPasswords(response.data);
    //     } catch (error) {
    //         console.error('Error fetching passwords:', error);
    //     }
    // };
    // TODO: Mock password data
    const passwords = [
        { id: 1, platform: 'Instagram', username: 'user1', encryptedPassword: 'encrypted1' },
        { id: 2, platform: 'Facebook', username: 'user2', encryptedPassword: 'encrypted2' },
    ];

    return (
        <div className="container">
            <h1>Password Vault</h1>
            <ul className="password-list">
                {passwords.map((password) => (
                    <li key={password.id}>
                        <Link to={`/password-entry/${password.id}`}>
                            {password.platform} - {password.username}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordVault;
