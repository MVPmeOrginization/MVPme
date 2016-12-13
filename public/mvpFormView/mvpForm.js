import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron} from 'react-bootstrap'
// react bootstrap is great and it makes it easy to format and style

const MvpForm = function(props) {

	return (
		<Grid>
      <Row>
        <Col xs={12} className="text-center">
    			<h2> MVP Submit Form </h2>
      	</Col>
      </Row>
      <form>
		     <Row>
				  <Col xs={6} xsOffset={3}>
					  <FormGroup>
					    <ControlLabel>Title</ControlLabel>
					    <FormControl onChange ={props.changeTitle} type='text' placeholder='MVP Title'/>
					  </FormGroup>
		      </Col>
        </Row>
        <Row>
  				<Col xs={6} xsOffset={3}>
					  <FormGroup>
					    <ControlLabel>Video Url</ControlLabel>
              <FormControl onChange ={props.changeUrl} type='text' placeholder='Video Url: please use the "embed" url (example: "https://www.youtube.com/embed/tntOCGkgt98")'/>
					  </FormGroup>
  				</Col>
        </Row>
        <Row>
  				<Col xs={6} xsOffset={3}>
					  <FormGroup>
							<ControlLabel>Repository Link</ControlLabel>
					    <FormControl onChange ={props.changeRepo} type='text' placeholder='Repo Link(Optional)'/>
					  </FormGroup>
  				</Col>
        </Row>
        <Row>
  				<Col xs={6} xsOffset={3}>
					  <FormGroup>
					  	<ControlLabel>Description</ControlLabel>
							<FormControl onChange ={props.changeDesc}  componentClass ='textarea' type='text' placeholder='Description'/>
					  </FormGroup>
  				</Col>
        </Row>
        <Row>
  				<Col xs={12} xsOffset={5}>
  					<Button onClick = {props.submit} bsStyle='primary'>Submit</Button>
  				</Col>
		    </Row>
      </form>
	  </Grid>
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
