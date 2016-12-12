import React, {Component} from 'react';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import app from './config.js';
import MvpForm from './mvpSubmissionView/index.js';
import LoginPage from './login/index.js';
import SignupPage from './signup/index.js';
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
    // app.submissionsService.find()
    //   .then((submissions) => {
    //     this.setState({
    //       submissions: submissions
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // app.submissionsService.on('created', (submission) => {
      // this.setState({
      //   submissions: this.state.submissions.concat(submission)
      // });
    // });
  };

  render () {
    return (
    <Router history={hashHistory}>
      <Route path="/" component={MvpForm} />
    </Router>
  )};
};


app.app.authenticate()
  .then(() => {
    render(<Root />, document.getElementById('app'));
  })
  .catch(error => {
    if (error.code === 401) {
      window.location.href = '/#/login';
      render(
        <Router history={hashHistory}>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Router>,
        document.getElementById('app')
      )
    }
    console.error(error);
  });
