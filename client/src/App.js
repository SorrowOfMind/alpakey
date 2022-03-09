import React from 'react';

import { Navbar, Topbar } from './components';
import Routing from './routes/routes';

import './scss/main.scss';

const App = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="content-wrapper">
        <div className="navbar">
          <Navbar />
        </div>
        <main className="main">
            <Routing />
        </main>
      </div>
    </div>
  )
}

export default App;