import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginComponent from "../components/auth/LoginComponent";
import RegisterComponent from "../components/auth/RegisterComponent";


function AuthRoute() {
    return (
        <>
            <Routes>
                <Route
                    path="/login"
                    element={<LoginComponent/>}
                />

                <Route
                    path="/register"
                    element={<RegisterComponent/>}
                />
            </Routes>
        </>
    )
}

export default AuthRoute;
