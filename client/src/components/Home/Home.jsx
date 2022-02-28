import React from 'react';
import {Typography, Col, Row, Statistic} from 'antd';

const Home = () => {
  return (
    <>
    <Typography.Title level={2}>Dashboard</Typography.Title>
    <Row>
      <Col span="6"><Statistic title="Total Adult Females" value="25"/></Col>
      <Col span="6"><Statistic title="Total Adult Mails" value="8"/></Col>
      <Col span="6"><Statistic title="Total Baby Females" value="5"/></Col>
      <Col span="6"><Statistic title="Total Baby Males" value="3"/></Col>
    </Row>
    <Row>
      <Col span="6"><Statistic title="Total Hay" value="200kg"/></Col>
      <Col span="6"><Statistic title="Total Grains" value="300kg"/></Col>
      <Col span="6"><Statistic title="Total Pelleted Food" value="200kg"/></Col>
      <Col span="6"><Statistic title="Total Dry Straw" value="200kg"/></Col>
    </Row>
    </>
  )
}

export default Home