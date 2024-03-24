import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = () => {
    const user = useAuth();

    // redirects back to login if no token found
    if (!user.token) return <Navigate to="/log-in" />;
    return <Outlet />;
};

export default PrivateRoute;
