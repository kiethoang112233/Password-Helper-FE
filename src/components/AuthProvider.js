import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../Config';

const AuthContext = createContext();

const AuthProvider = ({ children, handleRemoveSecretKey }) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();

    // save token to localStorage + state
    const setToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken_(newToken);
    };

    const logOut = () => {
        setToken(null);

        // flush token + importer secret key
        localStorage.removeItem("token");
        handleRemoveSecretKey();

        navigate("/");
    };

    useEffect(() => {
        if (token) {
            // set default header + baseURL for AXIOS requests
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            axios.defaults.baseURL = BASE_URL
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
