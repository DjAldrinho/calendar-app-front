import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LoginComponent from "../components/auth/LoginComponent";
import CalendarComponent from "../components/calendar/CalendarComponent";


function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/" component={CalendarComponent}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default AppRouter;
