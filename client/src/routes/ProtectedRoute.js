import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';


const ProtectedRoute = ({component: Component, ...rest}) => {
    const isLogged = false;

    return (
        <>
            {isLogged && (
                <Route />
            )}
        </>
    );

}

export default ProtectedRoute;
