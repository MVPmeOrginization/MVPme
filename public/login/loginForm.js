import React, { PropTypes } from 'react';
import {Button, FormGroup, Panel, ControlLabel, FormControl} from 'react-bootstrap';

const LoginForm = (props) => (
  <Panel header={'Login'} bsStyle="primary">
    <form action="/auth/local">
      <FormGroup controlId={'formControlsEmail'}>
        <ControlLabel>Email address</ControlLabel>
        <FormControl type={'email'} name={'email'} />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <FormControl type={'password'} name={'password'} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </form>
  </Panel>
);

export default LoginForm;
