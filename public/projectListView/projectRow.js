import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Image, PageHeader, Panel, Accordion, Well, Label, Thumbnail} from 'react-bootstrap';
import { Link } from 'react-router';

const ProjectRow = function(props){
  const title = (
    <Link to={{pathname: '/projectview', query:{ project: JSON.stringify(props.project) }}} ><h4>{props.project.name}</h4></Link>
  );

	return (
    <Col xs={6} md={4}>
      <Thumbnail src="https://s-media-cache-ak0.pinimg.com/736x/cb/ce/7c/cbce7c291a892b70a84e08e2f8d4c0c0.jpg">
        <h3>
          <Label bsStyle="success">
            ${props.project.bounty}
          </Label>
        </h3>
        <h3>{props.project.name}</h3>
        <p>{props.project.description}</p>
        <p>
          <Link to={'/projectview/' + props.project.id}>
            <Button bsStyle="primary">
            View More
            </Button>&nbsp;
          </Link>
          <Link to={'/mvpform/' + props.project.id}>
            <Button bsStyle="default">
              Submit an MVP
            </Button>
          </Link>
        </p>
      </Thumbnail>
    </Col>
  )
};

ProjectRow.proptypes = {
}

export default ProjectRow
