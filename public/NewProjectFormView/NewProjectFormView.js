import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup, Jumbotron} from 'react-bootstrap';
import React from 'react';

const ProjectFormView = (props) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2 className="text-center"> Create A New Project </h2>
        </Col>
      </Row>
      <Row>
        <form onSubmit={props.postProject}>
          <Row>
            <Col xs={6} xsOffset={3}>
            <FormGroup controlId = 'formControlsTitle' validationState = {props.getValidation('title')}>
              <ControlLabel>Project Title</ControlLabel>
              <FormControl type='text' onChange={(event) => {props.updateState(event, 'title')}} placeholder='Enter your project title here' />
              <FormControl.Feedback />
              <HelpBlock>Supply a title to the project.</HelpBlock>
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3}>
            <FormGroup controlId = 'formControlsDescription' validationState = {props.getValidation('description')}>
              <ControlLabel>Project Vision and Description</ControlLabel>
              <FormControl componentClass='textarea' onChange={(event) => {props.updateState(event, 'description')}} placeholder='Enter your project vision/description here' />
              <FormControl.Feedback />
              <HelpBlock>Supply at least a base description of the vision for your project to give those competing for your bounty something to go off of.</HelpBlock>
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3}>
            <FormGroup controlId = 'formControlsBounty' validationState = {props.getValidation('bounty')}>
              <ControlLabel>Bounty Amount</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type='number' onChange={(event) => {props.updateState(event, 'bounty')}} placeholder='0.00' />
              </InputGroup>
              <FormControl.Feedback />
              <HelpBlock>Supply a bounty to be awarded to the selected winner for your project. The bounty is the value of the contract to be awarded.</HelpBlock>
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3}>
            <FormGroup controlId = 'formControlsEndDate' validationState = {props.getValidation('endDate')}>
              <ControlLabel>Project End Date</ControlLabel>
              <FormControl type='text' onChange={(event) => {props.updateState(event, 'endDate')}} placeholder='mm/dd/yy' />
              <FormControl.Feedback />
              <HelpBlock>Please provide a cut off date for submission in mm/dd/yyyy format</HelpBlock>
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3}>
            <FormGroup controlId = 'formControlsVideo'>
              <ControlLabel>Project Description Video (optional)</ControlLabel>
              <FormControl type='url' onChange={props.updateState}  placeholder='embed url' />
              <FormControl.Feedback />
              <HelpBlock>Please use embed url (example: https://www.youtube.com/embed/tntOCGkgt98)</HelpBlock>
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3}>
            <FormGroup controlId = 'formControlsPhoto'>
              <ControlLabel>Project Photo (optional)</ControlLabel>
              <FormControl type='file' onChange={props.updateState}  />
            </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={6} xsOffset={3} className='text-center'>
            <Button type='submit'> Submit </Button>
            </Col>
          </Row>
        </form>
      </Row>
    </Grid>
  )
};



export default ProjectFormView;
