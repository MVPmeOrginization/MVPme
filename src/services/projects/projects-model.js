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
    bounty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    videoUrl: {
      type: Sequelize.STRING,
      allowNull: true
    },
    awarded:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    image: {
      type: Sequelize.BLOB('long'),
      allowNull: true
    }
  }, {
    /* Feathers adds additional level of complexity when creating database tables.
    the class Method associate is used to add the table relations before the database is synced. The actual creation of ll the tables happens in the services/index.js file */
    classMethods: {
      associate() {
        Projects.belongsTo(sequelize.models.Users, {foreignKey: 'userid'});
      }
    }
  });

  return Projects;
};
