import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const navigate = useNavigate();
    const setToken = (newToken) => {
        setToken_(newToken);
    };

    const logOut = () => {
        setToken(null);
        localStorage.removeItem("token");
        navigate("/log-in");
    };

    useEffect(() => {
        if (token) {
            // set default header for AXIOS requests
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token');
        }
    }, [token]);

    // persist value of the authentication context
    // const contextValue = useMemo(
    //     () => ({
    //         token,
    //         setToken,
    //     }),
    //     [token]
    // );

    return (
        <AuthContext.Provider value={{ token, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
