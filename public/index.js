import React, {Component} from 'react';
import {render} from 'react-dom';
import app from './config.js';
// import react router code...
// Import other components...
require('./styles.css');

// Implements webpack HMR
if (module.hot) {
  module.hot.accept();
}

class Root extends Component {
  constructor(){
    super();
    this.state = {
      user: [],
      projects: [],
      submissions: []
    };
  };

  componentDidMount() {
    app.submissionsService.find()
      .then((submissions) => {
        this.setState({
          submissions: submissions
        })
      })
      .catch((error) => {
        console.log(error);
      });

    app.submissionsService.on('created', (submission) => {
      // this.setState({
      //   submissions: this.state.submissions.concat(submission)
      // });
    });
  };

  render () {
    return <div>Yo!</div>;
  };
}

// React Router code here...
app.authenticate().then(() => {
  // If they are authenticated, route them to the right place...
render(<Root />, document.getElementById('app'));
}).catch(error => {
  // Otherwise send them to the login page...
  if (error.code === 401) {
    // This assumes that we will have a login.html, but we can also implement this with react and use router...
    window.location.href = '/login.html';
  }
  console.error(error);
});
