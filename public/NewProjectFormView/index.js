import React, {Component} from 'react';
import ProjectForms from './NewProjectFormView.js';
import {Button} from 'react-bootstrap';
import Service from '../config.js';

class ProjectFormContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      bounty: '',
      videoUrl: '',
      image:'',
      endDate:''
    }
  }

  getValidation(value) {
    console.log(value)
    if (value === 'title') {
      var length = this.state.name.length;
      if (length > 5) {
        return 'success';
      } else if (length >=1) {
        return 'warning'
      } else {
        return 'error'
      }
    } 
    else if (value === 'description') {
      var length = this.state.description.length;
      if (length >= 250) {
        return 'success';
      } else if (length >=50) {
        return 'warning'
      } else {
        return 'error'
      } 
    }
    else if (value === 'bounty') {
      if (this.state.bounty >= 250) {
        return 'success';
      } else if (this.state.bounty >=50) {
        return 'warning' 
      } else {
        return 'error'
      }
    }
    else if (value === 'endDate') {
      console.log('why hello there sir, welcome to the regex')
      var dateReg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
      if (dateReg.test(this.state.endDate)) {
        return 'success'
      } else {
        return 'error'
      }
    }
  }

  updateState(e, string) {
    if (string === 'title') {
      this.setState({ name: e.target.value });
    }
    if (string === 'description') {
      this.setState({ description: e.target.value });
    }
    if (string === 'bounty') {
      this.setState({ bounty: e.target.value });
    }
    if (string === 'video') {
      this.setState({ videoUrl: e.target.value });
    }
    if (string === 'photo') {
      this.setState({ image: e.target.value });
    }
    if (string === 'endDate') {
      this.setState({ endDate: e.target.value });
    }
  }

  postProject() {
    //refactor when ready to have submission reroute user to Project Owner View
    Service.projectService.create(this.state)
    .then((data) => alert('Your Project was submitted'))
    .catch((err)=> console.error(err));
  }

 render() {
   return <ProjectForms postProject={this.postProject.bind(this)} updateState={this.updateState.bind(this)} getValidation={this.getValidation} state={this.state} />;
 }
}



export default ProjectFormContainer;