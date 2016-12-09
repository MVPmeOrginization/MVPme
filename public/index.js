import React, {Component} from 'react';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import {render} from 'react-dom';
import app from './config.js';
<<<<<<< 209c2d80062eb7984e4546d66064def82b7e6a0c
import Navigation from './navigation'
import MvpForm from './mvpSubmissionView/index.js';
import LoginPage from './login/index.js';
import SignupPage from './signup/index.js';
import ProjectsView from './projectListView/index.js'
import NonOwnerProjectView from './projectNonOwnerView/index.js';


=======
import Projectform from './NewProjectFormView/index.js';
>>>>>>> Creates new project form functionality
// import react router code...
// Import other components...
require('./styles.css');

// Implements webpack HMR
if (module.hot) {
  module.hot.accept();
}

// class Root extends Component {
//   constructor(){
//     super();
//     this.state = {
//       user: [],
//       projects: [],
//       submissions: []
//     };
//   };

<<<<<<< 209c2d80062eb7984e4546d66064def82b7e6a0c
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
=======
//   componentDidMount() {
//     app.submissionsService.find()
//       .then((submissions) => {
//         this.setState({
//           submissions: submissions
//         })
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     app.submissionsService.on('created', (submission) => {
//       // this.setState({
//       //   submissions: this.state.submissions.concat(submission)
//       // });
//     });
//   };

//   render () {
//     return <Projectform />;
//   };
// }
>>>>>>> Creates new project form functionality


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


// Sets up app to use authentication and socket.io
const socket = io();
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
  storage: window.localStorage
}));

  };
}
// React Router code here...
// app.authenticate().then(() => {
  // If they are authenticated, route them to the right place...
<<<<<<< 209c2d80062eb7984e4546d66064def82b7e6a0c
<<<<<<< 3d517dfe9e903f46f86acd6a2795424596a3517a
render(<Root />, document.getElementById('app'));
// }).catch(error => {
  // Otherwise send them to the login page...
  // if (error.code === 401) {
    // This assumes that we will have a login.html, but we can also implement this with react and use router...
  //   // window.location.href = '/login.html';
  // // }
  // console.error(error);
=======
import form from './NewProjectFormView/index.js'
render(<form />, document.getElementById('app'));
=======

render(<Projectform />, document.getElementById('app'));
>>>>>>> Creates new project form functionality
// }).catch(error => {
//   // Otherwise send them to the login page...
//   if (error.code === 401) {
//     // This assumes that we will have a login.html, but we can also implement this with react and use router...
//     window.location.href = '/login.html';
//   }
//   console.error(error);
>>>>>>> begin work on NewProjectFormView
// });
