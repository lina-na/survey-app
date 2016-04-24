'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('questions', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      question: Sequelize.STRING, 
    });
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.dropTable('questions');
  }
};
