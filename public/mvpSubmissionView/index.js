import React, {Proptypes} from 'react';
import MvpForm from './mvpForm';
import service from '../config.js'

export default class MvpSubmission extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			user: undefined,
			title: undefined,
			url: undefined,
			repo: undefined,
			desc: undefined,
		}
	}

	componentDidMount() {
		this.setState({
			user: 1
		})
	}

	handleTitleChange(event){
		this.setState({
			title: event.target.value
		});
		console.log(this.state);
	}

	handleUrlChange(event){
		this.setState({
			url: event.target.value
		});
		console.log(this.state);
	}

	handleRepoChange(event){
		this.setState({
			repo: event.target.value
		});
		console.log(this.state);
	}

	handleDescChange(event){
		this.setState({
			desc: event.target.value
		});
		console.log(this.state);
	}

	submitForm(){
		console.log(this.state);
		if(this.state.title !== undefined &&
			this.state.url !== undefined &&
			this.state.user !== undefined){
			service.submissionsService.create({
				title: this.state.title,
				description: this.state.desc,
				videoLink: this.state.url,
				repoLink: this.state.repo,

				// dummy user id.
				userid: 1,
				projectid: this.props.location.query.projectId



			}).then((thing) => {
				console.log(thing);
				alert('MVP Submitted');
			})
			.catch((error)=> {
				console.log(error)
			});
		}
	}

	render() {
		return <MvpForm
			submit={this.submitForm.bind(this)}
			changeTitle={this.handleTitleChange.bind(this)}
			changeUrl={this.handleUrlChange.bind(this)}
			changeRepo={this.handleRepoChange.bind(this)}
			changeDesc={this.handleDescChange.bind(this)}
			  />
	}
};
