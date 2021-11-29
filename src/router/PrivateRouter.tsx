import React from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import IRouter from "../interfaces/IRouter";


export const PrivateRouter = (
    {
        isAuthenticated,
        component,
        ...rest
    }: IRouter
) => {
    return (
        <Route {...rest}>
            {isAuthenticated
                ? React.createElement(component)
                : <Redirect to="/auth/login"/>
            }
        </Route>
    );
}

PrivateRouter.propTypes = {
    //isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
