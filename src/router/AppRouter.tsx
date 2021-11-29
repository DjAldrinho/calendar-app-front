import React from "react";
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import CalendarComponent from "../components/calendar/CalendarComponent";
import {PrivateRouter} from "./PrivateRouter";
import AuthRouter from "./AuthRouter";
import {PublicRouter} from "./PublicRouter";


function AppRouter() {
    return (
        <Router>
            <Switch>
                <PublicRouter
                    path="/auth"
                    component={AuthRouter}/>

                <PrivateRouter
                    exact
                    path="/"
                    component={CalendarComponent}
                />

                <Redirect to="/auth/login"/>

            </Switch>
        </Router>
    )
}

export default AppRouter;
