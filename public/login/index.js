import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import LoginForm from './loginForm.js';
import LoginHeader from './loginHeader.js';

const LoginPage = (props) => (
  <Grid>
    <Row>
      <Col>
        <LoginHeader />
      </Col>
      <Col xs={4} xsOffset={4}>
        <LoginForm />
      </Col>
    </Row>
  </Grid>
);

export default LoginPage;
