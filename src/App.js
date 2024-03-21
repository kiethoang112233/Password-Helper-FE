import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ImportKey from './components/ImportKey';
import Home from './components/Home';
import PasswordVault from './components/PasswordVault';
import AddAccount from './components/AddAccount';
import PasswordEntry from './components/PasswordEntry';
import PasswordGenerator from './components/PasswordGenerator';

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
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />

          // implement import key
          <Route path="/import-key" component={ImportKey} />
          <Route path="/password-generator" component={PasswordGenerator} />
          <Route path="/home" component={Home} />
          <Route path="/password-vault" component={PasswordVault} />
          <Route path="/add-account" component={AddAccount} />
          <Route path="/password-entry/:id" component={PasswordEntry} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
