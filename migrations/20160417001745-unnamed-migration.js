'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('choices', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      QuestionId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      choice: Sequelize.STRING, 
    });
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.dropTable('choices');
  }
};
