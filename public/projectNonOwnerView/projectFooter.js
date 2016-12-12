import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router';

const ProjectFooter = function(props) {
	return(
	<Grid>
		<Row>
			<Col xs={6} xsOffset={3}>
				<Link to='/MvpForm' bsStyle='primary'>Submit MVP</Link>
			</Col>
		</Row>
	</Grid>
	)
};

ProjectFooter.propTypes = {
}

export default ProjectFooter

