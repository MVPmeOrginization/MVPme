import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import SignupForm from './signupForm.js';

const SignupPage = (props) => (
  <Grid>
    <Row>
      <Col xs={8} xsOffset={2}>
        <SignupForm />
      </Col>
    </Row>
  </Grid>
);

export default SignupPage;
