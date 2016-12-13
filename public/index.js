import React, {Component} from 'react';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import app from './config.js';
import Navigation from './navigation'
import MvpForm from './mvpFormView/index.js';
import LoginPage from './login/index.js';
import SignupPage from './signup/index.js';
import ProjectsView from './projectListView/index.js'
import NonOwnerProjectView from './projectView/index.js';
import ProjectForm from './projectFormView/index.js';
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
        <Route path='projects' component={ProjectsView} />
        <Route path='loginpage' component={LoginPage}/>
        <Route path='signuppage' component={SignupPage}/>
        <Route path='mvpform/:id' component={MvpForm} />
        <Route path='projectform' component={ProjectForm}/>
        <Route path='ownerview' component={ProjectOwnerView}/>
        <Route path='projectview/:id' component={NonOwnerProjectView}/>
      </Route>
    </Router>
  )};
};

render(<Root />, document.getElementById('app'));