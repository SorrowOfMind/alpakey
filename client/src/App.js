import React from 'react';
import {Layout} from 'antd';

import { Navbar } from './components';
import Routing from './routes/routes';

import './scss/main.scss';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <main className="main">
        <Layout>
          <Routing />
        </Layout>
      </main>
    </div>
  )
}

export default App;