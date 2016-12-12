import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Image, PageHeader, Panel, Accordion} from 'react-bootstrap';

const ProjectRow = function(props){
	return (
		<div>
			<Grid>
				<Row>
					<Col xs={6}>
				    <div>
				    <Image className='projectThumbnail' src='https://s-media-cache-ak0.pinimg.com/736x/cb/ce/7c/cbce7c291a892b70a84e08e2f8d4c0c0.jpg' rounded thumbnail/>
				    <PageHeader >
				    <small className="projectTitle">{props.project.name}</small><br/>
				    <small>Bounty: {props.project.bounty}.00</small>
				    </PageHeader>
				    </div>
					    <Accordion>
					    	<Panel bsStyle='success' header='Project Description' eventKey='1'> {props.project.description}</Panel>
					    </Accordion>
			    </Col>

				</Row>
			</Grid>
		</div>
	)
};

ProjectRow.proptypes = {
}

export default ProjectRow
