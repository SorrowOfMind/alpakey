import React from 'react';
import {useDispatch} from 'react-redux';
import {Typography,Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom';
import {Formik} from 'formik';

import { SignUp } from '../../store/actions/authActions';

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="form-wrapper">
        <Typography.Title level={2} className="form-title">Employee registration</Typography.Title>
        <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={(values, {restForm}) => {
                // dispatch(LogIn(values));
            }}
        >
        {formik => (
            <Form
            className="auth-form"
            autoComplete="off"
            onFinish={formik.handleSubmit}
            >
              <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                >
                    <Input className="auth-input"/>
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your last name!' }]}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                >
                    <Input className="auth-input"/>
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                >
                    <Input className="auth-input"/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {required: true, message: 'Please input your password!'},
                        {min: 6, message: 'Password cannot be less than 6 characters'}
                    ]}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                >
                  <Input.Password className="auth-input"/>
                </Form.Item>
                <Form.Item
                    label="Repeat password"
                    name="password2"
                    rules={[
                        {required: true, message: 'Please repeat your password!'}
                    ]}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                >
                  <Input.Password className="auth-input"/>
                </Form.Item>
                <Form.Item className="auth-btn-wrapper">
                    <Button type="primary" htmlType="submit" className="auth-btn">Register</Button>
                </Form.Item>
            </Form>
        )}
        </Formik>
        
        <Link to="/login" className="auth-link">Already an employee? Log in here</Link>
    </div>
  )
}

export default Register