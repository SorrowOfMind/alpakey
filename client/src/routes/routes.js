import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Home, Alpacas, Employees, Supplies, Login, Register} from '../components/index';
import ProtectedRoute from './ProtectedRoute';

const Routing = () => {
    const logged = false;
    return (
        <Routes>
            <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route exact path="/alpacas" element={<Alpacas/>} />
            <Route exact path="/employees" element={<Employees/>} />
            <Route exact path="/supplies" element={<Supplies/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
        </Routes>
    );
}

export default Routing;