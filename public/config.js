// Sets up feather.js client-side app to use hooks, authentication, and socket.io
const socket = io();
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  .configure(feathers.authentication({
  storage: window.localStorage
}));

const userService = app.service('user');
const projectsService = app.service('projects');
const submissionsService = app.service('submissions');

app.authenticate().then(function() {
  console.log('yo!');
}).catch(function(err) {
  console.log(err);
});

export default {
  app: app,
  userService: userService,
  projectsService: projectsService,
  submissionsService: submissionsService
};
