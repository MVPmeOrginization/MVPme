import React, {Proptypes} from 'react';
import ProjectDescription from './ProjectDescriptionView';
import ProjectFooter from './ProjectFooter';
import service from '../config.js';

export default class ProjectNonOwnerView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projectId: 1,
			currentProject: {}
		}
	}

	componentDidMount() {

		this.setState({
			currentProject: JSON.parse(this.props.location.query.project)
		})
		// service.projectsService.get(this.state.projectId)
		// .then((project)=>{
		// 	console.log(project);
		// 	this.setState({
		// 		currentProject: project
		// 	});
		// })
		// .catch((error)=>{
		// 	console.log(error);
		// })

	}

	handleMVPSubmitRequest() {

	}

	render() {
		return (
			<div>
				<ProjectDescription project ={this.state.currentProject} />
				<ProjectFooter projectId = {this.state.currentProject.id}/>
			</div>
		)
	}
}