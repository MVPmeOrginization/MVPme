import React from 'react';
import {Accordion, Panel, Image, Button} from 'react-bootstrap';

const ProjectOwnerView = (props) => {


	
	return (
		<div>
			<image src={props.project.image}/>

			<span>{props.project.name}</span>

			<div>Need to embed this {props.project.videoUrl}</div>
			 <Accordion>
				<Panel header='Project Description' eventKey='1'>{props.project.description}</Panel>
			 </Accordion>
			<div>$ {props.project.bounty}</div>
			<div>Submission period end date: {props.project.endDate}</div>
			<div> MVP Submissions </div>
			<div>
				List of MVPs
				<ul>
					{props.mvps.map((mvp, index) => {
						return (
							<li key={index}> 
								<div> {mvp.title}</div>
								<div> {mvp.videoLink} </div>
								<div> {mvp.repoLink} </div>
								<div> {mvp.description} </div>
								<Button bsSize='lg' onClick={props.awardMVP} value={mvp.id}> Award the Bounty </Button>
							</li>
							)
					})}
				</ul>
			</div>
		</div>
			
	)
};








export default ProjectOwnerView