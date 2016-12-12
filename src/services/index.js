'use strict';
const submissions = require('./submissions');
const projects = require('./projects');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('mysql'), {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
  app.configure(projects);
  app.configure(submissions);

  /* Feathers adds additional level of complexity when creating database tables.
    This is where the models are actually created and the database is synced
    the the below function goes through each model and runs the associate function to create the relationships between the tables and then the tables are created with sequelize.sync  */

  Object.keys(sequelize.models)
    .map(name => sequelize.models[name])
    .filter(model => model.associate !== undefined)
    .forEach(model => model.associate());

  sequelize.sync();

};
