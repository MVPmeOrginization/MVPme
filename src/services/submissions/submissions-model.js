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
    classMethods: {
      associate() {
        Submissions.belongsTo(sequelize.models.Users, {foreignKey: 'userid'});
      }
    }
  });

  // Submissions.sync();

  return Submissions;
};
