import React, {Component} from 'react';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import app from './config.js';
import Navigation from './navigation'
import MvpForm from './mvpSubmissionView/index.js';
import LoginPage from './login/index.js';
import SignupPage from './signup/index.js';
import ProjectsView from './projectListView/index.js'
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
    <Router history={browserHistory}>
      <Route component={Navigation}>

        <Route path="/test/" component={MvpForm} />
      </Route>
    </Router>
  )};
};


app.app.authenticate()
  .then(() => {
    render(<Root />, document.getElementById('app'));
  })
  .catch(error => {
    if (error.code === 401) {
      browserHistory.push('/login');
      render(
        <Router history={browserHistory}>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Router>,
        document.getElementById('app')
      )
    }
    console.error(error);
  });
