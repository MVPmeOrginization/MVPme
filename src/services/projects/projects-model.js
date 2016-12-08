'use strict';
const Sequelize = require('sequelize');

// projects-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.


module.exports = function(sequelize) {
  const Projects = sequelize.define('Projects', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description:{
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {

    classMethods: {
      associate() {
        Projects.belongsTo(sequelize.models.Users, {foreignKey: 'userid'});
        Projects.belongsTo(sequelize.models.Submissions, {foreignKey: 'submissionid'});
      }
    }
  });

  // Projects.sync();

  return Projects;
};
