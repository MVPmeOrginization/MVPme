import controller from './index.js';
import {Grid, Row, Col} from 'react-bootstrap';


const projectFormView = (props) => {
  return (
    <div> Create A New Project</div>
    <form>
      <FormGroup controlId = 'formControlsTitle' validationState = {controller.getValidationState}>
        <ControlLabel>Project Title</ControlLabel>
        <FormControl type='text' value={controller.state.title} placeholder='Enter your project title here' />
        <FormControl.Feedback />
        <HelpBlock>You must supply a title to the project.</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsDescription' validationState = {controller.getValidationState}>
        <ControlLabel>Project Vision and Description</ControlLabel>
        <FormControl componentClass='textarea' onChange={setDescription.bind(null, this.value)} placeholder='Enter your project vision/description here' />
        <FormControl.Feedback />
        <HelpBlock>You must supply at least a base description of the vision for your project to give those competing for your bounty something to go off of.</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsBounty' validationState = {controller.getValidationState}>
        <ControlLabel>Bounty Amount</ControlLabel>
        <FormControl type='number' value={controller.state.bounty} placeholder='0' />
        <FormControl.Feedback />
        <HelpBlock>You must supply a bounty to be awarded to the selected winner for your project, the bounty is the value of the contract to be awarded.</HelpBlock>
      </FormGroup>
      <FormGroup controlId = 'formControlsVideo'>
        <ControlLabel>Project Video (optional)</ControlLabel>
        <FormControl type='url' value={controller.state.value.video} placeholder='Project Description Video url(optional)' />
      </FormGroup>
      <FormGroup controlId = 'formControlsPhoto'>  
        <ControlLabel>Project Photo (optional)</ControlLabel>
        <FormControl type='file' value={controller.state.value.photo} />
      </FormGroup>
      <Button type='submit'> Submit </Button>
    </form>
  );
};



export default projectFormView;