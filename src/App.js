import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './components/Login';
import SignUp from './components/Signup';
import ImportKey from './components/ImportKey';
import Landing from './components/Landing';
import PasswordVault from './components/PasswordVault';
import AddCredential from './components/AddCredential';
import PasswordEntry from './components/PasswordEntry';
import GeneratePassword from './components/GeneratePassword';
import CheckPassword from './components/CheckPassword';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage'
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [secretKey, setSecretKey] = useState('');

  // Set Secret key to localStorage. Must flush when user logout
  const handleSetSecretKey = (key) => {
    localStorage.setItem('secretKey', key);
    setSecretKey(key);
  };

  const handleRemoveSecretKey = () => {
    localStorage.removeItem('secretKey', secretKey);
    setSecretKey(null);
  };

  useEffect(() => {
    // Clear localStorage when closing tab/window
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <AuthProvider handleRemoveSecretKey={handleRemoveSecretKey}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
            <Route element={<PrivateRoute />}>
              <Route
                path='/home'
                element={<Home secretKey={secretKey} />}
              />
              <Route
                path="/import-key"
                element={<ImportKey handleSetSecretKey={handleSetSecretKey} />}
              />
              <Route path="/generate-password" element={<GeneratePassword />} />
              <Route path="/check-password" element={<CheckPassword />} />
              <Route path="/password-vault" element={<PasswordVault />} />
              <Route
                path="/add-credential"
                element={<AddCredential secretKey={secretKey} />}
              />
              <Route
                path="/password-entry/:id"
                element={<PasswordEntry secretKey={secretKey} />}
              />

            </Route>


          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
