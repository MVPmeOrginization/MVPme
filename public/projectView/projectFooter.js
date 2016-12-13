import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { Link } from 'react-router';

const ProjectFooter = function(props) {
	return(
	<Row>
		<Col xs={6} xsOffset={3}>
      <Panel className="text-center">
        <Link to={{pathname: '/mvpform/', query:{ projectId: props.projectId }}} ><Button>Submit MVP</Button></Link>
      </Panel>
		</Col>
	</Row>
	)
};

ProjectFooter.propTypes = {
}

export default ProjectFooter
