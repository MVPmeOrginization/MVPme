import React from 'react';
import {Accordion, Panel, Image, Button, Grid, Row, Col, Jumbotron} from 'react-bootstrap';

const ProjectOwnerView = (props) => {


	
	return (
		<div>
		<Grid>
			<Jumbotron>
				<Col xs={6} xsOffset={3}>
				<h2>{props.project.name}</h2>
				</Col>
			</Jumbotron>
			<Row>

				<Col xs={6} xsOffset={3}>
				<image src={props.project.image}/>
				</Col>

				<Col xs={6} xsOffset={3}>
				<iframe src={props.project.videoUrl}></iframe>
				</Col>

				<Col xs={6} xsOffset={3}>
		 		<Accordion>
					<Panel header='Project Description' eventKey='1'>{props.project.description}</Panel>
				</Accordion>
				</Col>

				<Col xs={6} xsOffset={3}>
				<div>$ {props.project.bounty}</div>
				</Col>

				<Col xs={6} xsOffset={3}>
				<div>Submission period end date: {props.project.endDate}</div>
				</Col>
			</Row>

			<Row>
				<Col xs={6} xsOffset={3}>
				<h3> MVP Submissions </h3>
				</Col>
				<div>
				<Col xs={6} xsOffset={3}>
					<ul>
						{props.mvps.map((mvp, index) => {
							return (
								<li key={index}> 
									<div> {mvp.title}</div>
									<iframe src={mvp.videoLink}> {mvp.videoLink} </iframe>
									<div> {mvp.repoLink} </div>
									<div> {mvp.description} </div>
									<Button bsSize='lg' onClick={props.awardMVP} value={mvp.id}> Award the Bounty </Button>
								</li>
								)
						})}
					</ul>
				</Col>
				</div>
			</Row>
		</Grid>
		</div>
			
	)
};








export default ProjectOwnerView