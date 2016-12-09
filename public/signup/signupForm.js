import React, { PropTypes } from 'react';
import {Button, FormGroup, Panel, ControlLabel, FormControl} from 'react-bootstrap';

const SignupForm = (props) => (
  <Panel className={'signup-form'} header={'Signup'} bsStyle="primary">
    <form method="post" action="/signup">
      <FormGroup controlId={'formControlsName'}>
        <ControlLabel>Full name</ControlLabel>
        <FormControl type={'text'} name={'userName'} />
      </FormGroup>
      <FormGroup controlId={'formControlsEmail'}>
        <ControlLabel>Email address</ControlLabel>
        <FormControl type={'email'} name={'email'} />
      </FormGroup>
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Bio</ControlLabel>
        <FormControl name={'bio'} componentClass="textarea" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <FormControl type={'password'} name={'password'} />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </form>
  </Panel>
);

export default SignupForm;
