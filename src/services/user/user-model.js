'use strict';

// user-model.js - A sequelize model
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Users = sequelize.define('Users', {
    /* bio photo  */
    userName:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    bio:{
      type: Sequelize.STRING,
      allowNull: true,

    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }

  }, {
    freezeTableName: true
  });

  return Users;
};
