import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron} from 'react-bootstrap'
// react bootstrap is great and it makes it easy to format and style
const MvpForm = function(props) {
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
					    <FormControl onChange ={props.changeTitle} type='text' placeholder='MVP Title'/>
					  </FormGroup>
					</form>
				</Col>
				<Col xs={6} xsOffset={3}>
				<form>
					  <FormGroup>
					    <ControlLabel>Video Url</ControlLabel>
              <FormControl onChange ={props.changeUrl} type='text' placeholder='Video Url'/>
					  </FormGroup>
					</form>
				</Col>
				<Col xs={6} xsOffset={3}>
				<form>
					  <FormGroup>
							<ControlLabel>Repository Link</ControlLabel>
					    <FormControl onChange ={props.changeRepo} type='text' placeholder='Repo Link(Optional)'/>
					  </FormGroup>
					</form>
				</Col>
				<Col xs={6} xsOffset={3}>
					<form>
					  <FormGroup>
					  	<ControlLabel>Description</ControlLabel>
							<FormControl onChange ={props.changeDesc}  componentClass ='textarea' type='text' placeholder='Description'/>
					  </FormGroup>
					</form>
				</Col>
				<Col xs={12} xsOffset={5}>
					<Button onClick = {props.submit} bsStyle='primary'>Submit</Button>
				</Col>
			</Row>
		</Grid>
	</div>
	)
};


MvpForm.propTypes = {
  submit: React.PropTypes.func.isRequired,
  changeTitle: React.PropTypes.func.isRequired,
  changeUrl: React.PropTypes.func.isRequired,
	changeRepo: React.PropTypes.func.isRequired,
	changeDesc: React.PropTypes.func.isRequired
}

export default MvpForm