import React from "react";
import PropTypes from 'prop-types';
import {Redirect, Route} from "react-router-dom";
import IRouter from "../interfaces/IRouter";

export const PublicRouter = (
    {
        isAuthenticated,
        component,
        ...rest
    }: IRouter
) => {
    return (
        <Route {...rest}>
            {isAuthenticated
                ? <Redirect to="/"/>
                : React.createElement(component)
            }
        </Route>
    );
}

PublicRouter.propTypes = {
    // isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
