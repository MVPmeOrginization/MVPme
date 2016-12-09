import React, {Proptypes} from 'react';
import MvpForm from './mvpForm';
import { projectsService } from '../config.js'


export default class MvpSubmission extends React.Component {
	constructor() {
		super();
		this.state ={
			title: '',
			url: '',
			repo: '',
			desc: '',
		}

	}

	componentDidMount() {

	}

	handleFormChange(){


	}

	submitForm(){
		console.log('hello');
	}

	render() {
		return <MvpForm submit={this.submitForm.bind(this)} handleChange={this.handleFormChange.bind(this)} / >
	}
};
