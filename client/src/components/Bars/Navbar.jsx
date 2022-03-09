import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import { HomeOutlined, SmileOutlined, TeamOutlined, GoldOutlined } from '@ant-design/icons/lib/icons';


const Navbar = () => {
  return (
    <div className="nav-container">
      <Menu theme="dark" className='main-menu'>
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