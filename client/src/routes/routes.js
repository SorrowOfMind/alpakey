import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Home, Alpacas, Employees, Supplies} from '../components/index';

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/alpacas" element={<Alpacas/>} />
            <Route exact path="/employees" element={<Employees/>} />
            <Route exact path="/supplies" element={<Supplies/>} />
        </Routes>
    );
}

export default Routing;