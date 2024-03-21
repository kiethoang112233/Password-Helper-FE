import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <h1>Home Screen</h1>
            {/* Add top bar with About, Home, Signout button */}
            <div className="top-bar">
                <button>About</button>
                <button>Home</button>
                <button>Sign Out</button>
            </div>
            {/* Add list of main options */}
            <div className="main-options">
                <div>
                    <h3>Main Options:</h3>
                    <ul>
                        <li>Password Generator</li>
                        <li>Password Vault</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
