import React from 'react'
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const logged = false;
    return logged ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
