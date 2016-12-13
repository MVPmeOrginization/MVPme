import React from 'react';
import {Link} from 'react-router';
import {Jumbotron, Button} from 'react-bootstrap';

const LoginHeader = () => (
  <Jumbotron className={'login-header'}>
    <h1>MVPme</h1>
    <p>Your platform to have top developers compete by creating their best MVP to win your project!</p>
    <div>
      <Link to='/login'>
        <Button bsStyle="primary">Login</Button>
      </Link>
    </div>
    <div>
      <Link to='/signup'>
        <Button bsStyle="primary">Sign up!</Button>
      </Link>
    </div>
  </Jumbotron>
);

export default LoginHeader;
