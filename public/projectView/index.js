import React, {Proptypes} from 'react';
import ProjectDescription from './ProjectDescriptionView';
import ProjectFooter from './ProjectFooter';
import service from '../config.js';
import { Link } from 'react-router';
import ProjectOwnerView from '../ProjectOwnerView/index.js';

export default class ProjectView extends React.Component {
	constructor(props) {
		super(props);
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
		// this.setState({
		// 	currentProject: JSON.parse(this.props.location.query.project)
		// })

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

	// }

	// handleMVPSubmitRequest() {
  //
	// }

	render() {

    return (
      <Grid>
        <ProjectDescription
          project={this.state.currentProject}
          />
        <ProjectFooter
          projectId={this.state.currentProject.id}
          />
      </Grid>
		)

	}
}
