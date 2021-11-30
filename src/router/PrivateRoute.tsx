import React from "react";
import {Navigate} from "react-router-dom";

function PrivateRoute(
    {
        children
    }: any
) {

    const isAuthenticated = false;

    return isAuthenticated
        ? children
        : <Navigate to="/auth/login"/>
}

export default PrivateRoute;
