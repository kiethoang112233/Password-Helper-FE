import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ImportKey from './components/ImportKey';
import Landing from './components/Landing';
import PasswordVault from './components/PasswordVault';
import AddCredential from './components/AddCredential';
import PasswordEntry from './components/PasswordEntry';
import GeneratePassword from './components/GeneratePassword';
import CheckPassword from './components/CheckPassword';
import Home from './components/Home';


const App = () => {
  const [secretKey, setSecretKey] = useState('');

  const handleSetSecretKey = (key) => {
    localStorage.setItem('secretKey', key);
    setSecretKey(key);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path='/home' element={<Home />} />
          <Route path="/import-key" element={<ImportKey />} />
          <Route path="/generate-password" element={<GeneratePassword />} />
          <Route path="/check-password" element={<CheckPassword />} />
          <Route path="/password-vault" element={<PasswordVault />} />
          <Route path="/add-credential" element={<AddCredential />} />
          <Route path="/password-entry/:id" element={<PasswordEntry />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
