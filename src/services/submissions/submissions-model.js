'use strict';

// submissions-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Submissions = sequelize.define('Submissions', {
    title:{
      type: Sequelize.STRING,
      allowNull: false
    },
    description:{
      type: Sequelize.STRING,
      allowNull: true
    },
    videoLink: {
      type: Sequelize.STRING,
      allowNull: false
    },
    repoLink: {
      type: Sequelize.STRING,
      allowNull: true
    },
    win:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

  }, {
    freezeTableName: true,
    /* Feathers adds additional level of complexity when creating database tables.
    the class Method associate is used to add the table relations before the database is synced. The actual creation of ll the tables happens in the services/index.js file */
    classMethods: {
      associate() {
        Submissions.belongsTo(sequelize.models.Users, {foreignKey: 'userid'});
      }
    }
  });

  // Submissions.sync();

  return Submissions;
};
