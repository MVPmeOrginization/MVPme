import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, InputGroup} from 'react-bootstrap';
import React from 'react';


const ProjectFormView = (props) => {
  return (
    <div> Create A New Project
    <form onSubmit={props.postProject}>
      <FormGroup controlId = 'formControlsTitle' validationState = {props.getValidation('title')}>
        <ControlLabel>Project Title</ControlLabel>
        <FormControl type='text' onChange={(event) => {props.updateState(event, 'title')}} placeholder='Enter your project title here' />
        <FormControl.Feedback />
        <HelpBlock>Supply a title to the project.</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsDescription' validationState = {props.getValidation('description')}>
        <ControlLabel>Project Vision and Description</ControlLabel>
        <FormControl componentClass='textarea' onChange={(event) => {props.updateState(event, 'description')}} placeholder='Enter your project vision/description here' />
        <FormControl.Feedback />
        <HelpBlock>Supply at least a base description of the vision for your project to give those competing for your bounty something to go off of.</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsBounty' validationState = {props.getValidation('bounty')}>
        <ControlLabel>Bounty Amount</ControlLabel>
        <InputGroup>
          <InputGroup.Addon>$</InputGroup.Addon>
          <FormControl type='number' onChange={(event) => {props.updateState(event, 'bounty')}} placeholder='0' />
          <InputGroup.Addon>.00</InputGroup.Addon>
        </InputGroup>
        <FormControl.Feedback />
        <HelpBlock>Supply a bounty to be awarded to the selected winner for your project. The bounty is the value of the contract to be awarded.</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsEndDate' validationState = {props.getValidation('endDate')}>
        <ControlLabel>Project End Date</ControlLabel>
        <FormControl type='text' onChange={(event) => {props.updateState(event, 'endDate')}} placeholder='mm/dd/yy' />
        <FormControl.Feedback />
        <HelpBlock>Please provide a cut off date for submission in mm/dd/yyyy format</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsVideo'>
        <ControlLabel>Project Video (optional): use embed video url (example: https://www.youtube.com/embed/tntOCGkgt98)</ControlLabel>
        <FormControl type='url' onChange={props.updateState}  placeholder='Project Description Video url(optional)' />
      </FormGroup>
      <FormGroup controlId = 'formControlsPhoto'>  
        <ControlLabel>Project Photo (optional)</ControlLabel>
        <FormControl type='file' onChange={props.updateState}  />
      </FormGroup>
      <Button type='submit'> Submit </Button>
    </form>
    </div>
  )
};



export default ProjectFormView;