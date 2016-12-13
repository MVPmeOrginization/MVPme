import React, {Proptypes} from 'react';
import {Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron} from 'react-bootstrap';
import ProjectRow from './projectRow';
import service from '../config';

export default class ProjectList extends React.Component {
	constructor() {
		super();
		this.state = {
      projects: []
		}
	}

	// componentDidMount() {
	// 		/* This was used to populate the DB with dummy projects during development*/
	// 	// service.projectsService.create({
	// 	// 	name: 'test project2',
	// 	// 	description: 'test project2 this is a test of the emergency broadcasting system. nothing is going wrong, don;t worry about anything. ignore the giant creature in the bay. Have a nice day',
	// 	// 	bounty: 10000,
	// 	// 	userId: 1
	// 	// })
	// 	// .then((project)=>{
	// 	// 	console.log(project);
	// 	// })
	// 	// .catch((error) =>{
	// 	// 	console.log(error);
	// 	// });

	// 	var context = this;
	// 	service.projectsService.find().then((allProjects) =>{
	// 		console.log(allProjects.data)
	// 		this.setState({
	// 			projects: allProjects.data
	// 		});

	// 		}).catch((error)=>{
	// 			console.log(error);
	// 		})

	// 		// service.projectsService.on('created', (project)=>{

	// 		// })
	// }

	render() {
		var projects = this.state.projects.map((project, index)=>{
			return <ProjectRow key={index} project={project} />
		});
		return (
			<Grid>
        <Row>
          <Col xs={12} className="text-center">
            <h1 className='projectListHeader'> Open Projects </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            {projects}
          </Col>
        </Row>
			</Grid>
		);
	}
};
