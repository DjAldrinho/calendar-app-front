import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import LoginComponent from "../components/auth/LoginComponent";
import RegisterComponent from "../components/auth/RegisterComponent";


function AuthRouter() {
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/auth/login"
                    component={LoginComponent}
                />

                <Route
                    exact
                    path="/auth/register"
                    component={RegisterComponent}
                />

                <Redirect to="/auth/login"/>

            </Switch>
        </div>
    )
}

export default AuthRouter;
