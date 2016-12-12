import React, {Component} from 'react';
import Project from './ProjectOwnerView.js';
import service from '../config.js';

class ProjectOwnerContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			//dummy data
			project: {id: '5',
			name: 'test',
      description: 'testing this functionality',
      bounty: '1000000',
      videoUrl: 'someurl.com',
      image:'',
      endDate: ''
    },
      mvps: [{'id': '5', 'title': 'test', 'description': 'testing this', 'videoLink': 'someurl.com', 'repoLink': 'somerepo'}, {'id': '6', 'title': 'testy test', 'description': 'testing this as well', 'videoLink': 'someurl.com2', 'repoLink': 'somerepo2'}]
		}
		// this.populateState(props.id)
	};

	// populateState (project_id) {
	// 	//fetch the Project 
	// 	service.projectServices.get(project_id)
	// 	.then((err, proj) => {
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		this.setState({project: proj});
	// 		//fetch MVPs where the 'project_id' equals the project 'id'
	// 		service.submissionsServices.find({where: {'projectid': this.state.project.id}})
	// 		.then((err, results) => {
	// 			if(err) {
	// 				throw err;
	// 			}
	// 			this.setState({mvps: results});
	// 		});
	// 	});
	// };

	awardMVP (e) {
		console.log(e.target.value);
		//update selected MVP 'win' property and project 'awared' property to true

		//have not connected to database to test the syntax of the following functions
		// service.submissionsServices.update(e.target.id, {win:true}/*this may be the worng syntax to update 'win'*/)
		// .then((err, results) => {
		// 	if (err) {
		// 		alert('There has been an error: ', err);
		// 		throw err;
		// 	}
		// 	console.log('MVP win property updated as "true"')
		// 	service.projectServices.update(this.state.project.id, {awarded:true}this may be the worng syntax to update 'awarded')
		// 	.then((err, restuls) => {
		// 		if (err) {
		// 			alert('There has been an error: ', err);
		// 			throw err;
		// 		}
		// 		console.log('Project awarded property was changed to "true"');
		// 		alert('Congratulation! You have awarded the bounty and are on your way to building something amazing');
		// 	});
		// });
	};

	render() {
		return <Project mvps={this.state.mvps} project={this.state.project} awardMVP={this.awardMVP.bind(this)}/>
	};
}


export default ProjectOwnerContainer;