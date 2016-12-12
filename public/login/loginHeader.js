import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

const LoginHeader = () => (
  <Jumbotron className={'login-header'}>
    <h1>MVPme</h1>
    <p>Your platform to have top developers compete by creating their best MVP to win your project!</p>
    <p><Button bsStyle="primary" href="/#/signup">Sign up!</Button></p>
  </Jumbotron>
);

export default LoginHeader;
