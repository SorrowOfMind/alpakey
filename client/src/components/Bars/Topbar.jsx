import React from 'react';
import {Avatar, Layout, Menu, Typography} from 'antd';
import {Link} from 'react-router-dom';

import icon from '../../images/logo.png';

const Topbar = () => {
  return (
    <Layout>
        <Layout.Header theme="dark" className="topbar">
        <div className="logo-container">
            <Avatar shape="square" size="large" src={icon}/>
            <Typography.Title level={2} className="logo">
                <Link to="/" className="logo-link">AlpaKEY</Link>
            </Typography.Title>
        </div>
            <Menu theme="dark" className="auth-menu">
                <Menu.Item>
                    <Link to="/register">Register</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            <Avatar size="large" className="topbar-avatar">??</Avatar>  
            </Menu>
        </Layout.Header>
    </Layout>
  )
}

export default Topbar;