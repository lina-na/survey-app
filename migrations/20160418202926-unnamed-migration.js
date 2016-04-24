'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('guests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      QuestionId: Sequelize.INTEGER,
      uuid: Sequelize.STRING,
      ipAddress: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.dropTable('guests');
  }
};
