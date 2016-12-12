import React, {Component} from 'react';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import app from './config.js';
import Navigation from './navigation'
import MvpForm from './mvpSubmissionView/index.js';
import LoginPage from './login/index.js';
import SignupPage from './signup/index.js';
import ProjectsView from './projectListView/index.js'
import NonOwnerProjectView from './projectNonOwnerView/index.js';
import Projectform from './NewProjectFormView/index.js';
import ProjectOwnerView from './ProjectOwnerView/index.js';

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
    this.handleLogout = () => {
      app.app.logout()
        console.log('Logged out!');
    };
  };

  render () {
    return (
    <Router history={browserHistory}>
      <Route onLogout={this.handleLogout} component={Navigation}>
        <Route path="/" component={MvpForm} />
      </Route>
    </Router>
  )};
};

render(<Root />, document.getElementById('app'));
