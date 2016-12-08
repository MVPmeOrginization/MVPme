'use strict';

const service = require('feathers-sequelize');
const submissions = require('./submissions-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: submissions(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/submissions', service(options));

  // Get our initialize service to that we can bind hooks
  const submissionsService = app.service('/submissions');

  // Set up our before hooks
  submissionsService.before(hooks.before);

  // Set up our after hooks
  submissionsService.after(hooks.after);
};
