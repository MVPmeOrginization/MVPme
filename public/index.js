import React, {Component} from 'react';
import { render } from 'react-dom';
// import react router code...
// Import other components...
require('./styles.css');

// Implements webpack HMR
if (module.hot) {
  module.hot.accept();
}

// Sets up app to use authentication and socket.io
const socket = io();
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
  storage: window.localStorage
}));

// React Router code here...
app.authenticate().then(() => {
  // If they are authenticated, route them to the right place...
  render();
}).catch(error => {
  // Otherwise send them to the login page...
  if (error.code === 401) {
    // This assumes that we will have a login.html, but we can also implement this with react and use router...
    window.location.href = '/login.html';
  }
  console.error(error);
});

export default app;
