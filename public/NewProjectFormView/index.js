import React, {Component} from 'react';
import projectForm from './NewProjectFormView.js';


class ProjectFormContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      Description: '',
      Bounty: '',
      video: '',
      photo:''
    }
  }

  getValidationState(value) {
    const length = this.state.title.length;
    if (length > 0) {
      return 'success';
    }
  }


 render() {
   return <projectForm getValidationState={getValidationState} />
 }
}




export default ProjectFormContainer