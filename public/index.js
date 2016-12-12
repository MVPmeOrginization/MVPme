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
import ProjectForm from './NewProjectFormView/index.js';
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
      user: {
        id: 1,
        userName: 'testuser',
        email: 'test@test.com',
        bio: 'Here is a test bio.',
        img: 'https://randomuser.me/api/portraits/women/17.jpg'
      },
      projects: [],
      submissions: []
    };
    this.handleLogout = () => {
      console.log('Logged out!');
    };
  };

  render () {
    return (
    <Router history={browserHistory}>
      <Route path='/' userData={this.state.user} onLogout={this.handleLogout} component={Navigation}>
        <Route path='Projects' component={ProjectsView} />
        <Route path='LoginPage' component={LoginPage}/>
        <Route path='SignupPage' component={SignupPage}/>
        <Route path='MvpForm' component={MvpForm} />
        <Route path='ProjectForm' component={ProjectForm}/>
        <Route path='OwnerView' component={ProjectOwnerView}/>
        <Route path='ProjectView' component={NonOwnerProjectView}/>
      </Route>
    </Router>
  )};
};

render(<Root />, document.getElementById('app'));
