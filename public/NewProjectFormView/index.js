import React, {Component} from 'react';
import ProjectForms from './NewProjectFormView.js';
import {Button} from 'react-bootstrap';
import service from '../config.js';

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

  postProject(e) {
    //refactor when ready to have submission reroute user to Project Owner View

    e.preventDefault();
    if ((this.getValidation('title') === 'success'|| this.getValidation('title') === 'warning') &&
      (this.getValidation('description') === 'success'|| this.getValidation('description') === 'warning') &&
      (this.getValidation('bounty') === 'success'|| this.getValidation('bounty') === 'warning') &&
      (this.getValidation('endDate') === 'success'|| this.getValidation('endDate') === 'warning')
    ){
      service.projectsService.create(this.state)
      .then((data) => alert('Your Project was submitted'))
      .catch((err)=> console.error(err));
    }
    else {
      alert('Not all mandatory fields where complete, please fill in the form till all sections that are red at least turn yellow')
    }
  }

 render() {
   return <ProjectForms postProject={this.postProject.bind(this)} updateState={this.updateState.bind(this)} getValidation={this.getValidation} state={this.state} />;
 }
}



export default ProjectFormContainer;
