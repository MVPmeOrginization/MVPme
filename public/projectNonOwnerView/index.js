import React, {Proptypes} from 'react';
import ProjectDescription from './ProjectDescriptionView';
import ProjectFooter from './ProjectFooter';
import service from '../config.js';

export default class ProjectNonOwnerView extends React.Component {
	constructor() {
		super();
		this.state = {
			projectId: 1,
			currentProject: {}
		}
	}

	componentDidMount() {

		service.projectsService.get(this.state.projectId)
		.then((project)=>{
			console.log(project);
			this.setState({
				currentProject: project
			});
		})
		.catch((error)=>{
			console.log(error);
		})

	}

	handleMVPSubmitRequest() {

	}

	render() {
		return (
			<div>
				<ProjectDescription project ={this.state.currentProject} />
			</div>
		)
	}
}