import React from "react";
import {Navigate} from "react-router-dom";

function PublicRoute(
    {
        children
    }: any
) {

    const isAuthenticated = false;

    return isAuthenticated
        ? <Navigate to="/calendar"/>
        : children
}

export default PublicRoute;


