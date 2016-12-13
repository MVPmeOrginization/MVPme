import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron, Image, PageHeader, Panel, Accordion} from 'react-bootstrap';

const ProjectDescription = function(props) {
	return(
		<Row>
      <Col xs={6} xsOffset={6} className="text-center">
      <Image className='projectImage' src='https://s-media-cache-ak0.pinimg.com/736x/cb/ce/7c/cbce7c291a892b70a84e08e2f8d4c0c0.jpg' rounded />
      <PageHeader>
        <small className='projectTitle'>
          {props.project.name}
        </small>
      </PageHeader>
        <Panel bsStyle='success'>
          {props.project.description}
        </Panel>
      </Col>
		</Row>
	)
};

ProjectDescription.propTypes = {
}

export default ProjectDescription
