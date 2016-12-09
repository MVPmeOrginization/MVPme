import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron} from 'react-bootstrap'
// react bootstrap is great and it makes it easy to format and style
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
const MvpForm = function(props) {
=======
const MvpForm = function(props){
>>>>>>> Add progress towards MVP submission form view and functionality.
	return (
	<div>
	<Col xs={6} xsOffset={3}>
		<Jumbotron>
			<h3 > MVP Submit Form </h3>
		</Jumbotron>
	</Col>

		<Grid>
			<Row>
				<Col xs={6} xsOffset={3}>
				<form>
					  <FormGroup>
					    <ControlLabel>Title</ControlLabel>
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
					    <FormControl onChange ={props.changeTitle} type='text' placeholder='MVP Title'/>
=======
					    <FormControl type='text' placeholder='MVP Title'/>
>>>>>>> Add progress towards MVP submission form view and functionality.
					  </FormGroup>
					</form>
				</Col>
				<Col xs={6} xsOffset={3}>
				<form>
					  <FormGroup>
					    <ControlLabel>Video Url</ControlLabel>
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
              <FormControl onChange ={props.changeUrl} type='text' placeholder='Video Url'/>
=======
              <FormControl type='text' placeholder='Video Url'/>
>>>>>>> Add progress towards MVP submission form view and functionality.
					  </FormGroup>
					</form>
				</Col>
				<Col xs={6} xsOffset={3}>
				<form>
					  <FormGroup>
							<ControlLabel>Repository Link</ControlLabel>
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
					    <FormControl onChange ={props.changeRepo} type='text' placeholder='Repo Link(Optional)'/>
=======
					    <FormControl type='text' placeholder='Repo Link(Optional)'/>
>>>>>>> Add progress towards MVP submission form view and functionality.
					  </FormGroup>
					</form>
				</Col>
				<Col xs={6} xsOffset={3}>
					<form>
					  <FormGroup>
					  	<ControlLabel>Description</ControlLabel>
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
							<FormControl onChange ={props.changeDesc}  componentClass ='textarea' type='text' placeholder='Description'/>
=======
							<FormControl componentClass ='textarea'type='text' placeholder='Description'/>
>>>>>>> Add progress towards MVP submission form view and functionality.
					  </FormGroup>
					</form>
				</Col>
				<Col xs={12} xsOffset={5}>
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
					<Button onClick = {props.submit} bsStyle='primary'>Submit</Button>
=======
					<Button bsStyle='primary'>Submit</Button>
>>>>>>> Add progress towards MVP submission form view and functionality.
				</Col>
			</Row>
		</Grid>
	</div>
	)
};


MvpForm.propTypes = {
<<<<<<< 9cb2e65f105ef5adc050acead913e0687d0dcd1f
  submit: React.PropTypes.func.isRequired,
  changeTitle: React.PropTypes.func.isRequired,
  changeUrl: React.PropTypes.func.isRequired,
	changeRepo: React.PropTypes.func.isRequired,
	changeDesc: React.PropTypes.func.isRequired
=======
  submit: React.PropTypes.func.isRequired
>>>>>>> Add progress towards MVP submission form view and functionality.
}

export default MvpForm