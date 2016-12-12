import React, {Proptypes} from 'react';
import ProjectDescription from './ProjectDescriptionView';
import ProjectFooter from './ProjectFooter';
import service from '../config.js';
import { Link } from 'react-router';
import ProjectOwnerView from '../ProjectOwnerView/index.js';

export default class ProjectNonOwnerView extends React.Component {
	constructor() {
		super();
		this.state = {
			userid:1,
			project: {
				id: 1,
				userid: 1,
			},
			currentProject: {}
		}
	}

	// componentDidMount() {

	// 	service.projectsService.get(this.state.projectId)
	// 	.then((project)=>{
	// 		console.log(project);
	// 		this.setState({
	// 			currentProject: project
	// 		});
	// 	})
	// 	.catch((error)=>{
	// 		console.log(error);
	// 	})

	// }

	handleMVPSubmitRequest() {

	}

	render() {
		if (this.state.userid === this.state.project.userid) {
			return ( <ProjectOwnerView />)
		} else {
			return (
				<div>
					<ProjectDescription project ={this.state.currentProject} />
					<ProjectFooter />
				</div>
			)
		}
	}
}