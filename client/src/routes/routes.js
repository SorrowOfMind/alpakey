import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Home, Alpacas, Employees, Supplies} from '../components/index';

const Routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
        </Routes>
    );
}