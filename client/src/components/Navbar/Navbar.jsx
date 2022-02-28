import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Menu, Avatar} from 'antd';
import { HomeOutlined, SmileOutlined, TeamOutlined, GoldOutlined } from '@ant-design/icons/lib/icons';

import icon from '../../images/logo.png';

const Navbar = () => {

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar shape="square" size="large" src={icon}/>
        <Typography.Title level={2} className="logo">
          <Link to="/" className="logo-link">AlpaKEY</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined/>} >
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<SmileOutlined/>} >
              <Link to="/alpacas">Alpacas</Link>
            </Menu.Item>
            <Menu.Item icon={<TeamOutlined/>} >
              <Link to="/employees">Employees</Link>
            </Menu.Item>
            <Menu.Item icon={<GoldOutlined/>} >
              <Link to="/supplies">Supplies</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar