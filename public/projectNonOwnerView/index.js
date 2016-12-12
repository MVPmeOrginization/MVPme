import React, {Proptypes} from 'react';
import ProjectDescription from './ProjectDescriptionView';
import ProjectFooter from './ProjectFooter';
import service from '../config.js';

export default class ProjectNonOwnerView extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}

	componentDidMount() {

	}

	handleMVPSubmitRequest() {

	}

	render() {
		return (
			<div>
				<ProjectDescription />
				<ProjectFooter awarded={this.state.awarded} />
			</div>
		)
	}
}