import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PublicRoute from "./PublicRoute";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import CalendarRoute from "./CalendarRoute";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRoute/>
                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <CalendarRoute/>
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
