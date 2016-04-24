'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('questionGuests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      GuestId: Sequelize.INTEGER,
      QuestionId: Sequelize.INTEGER,
      ChoiceId: Sequelize.INTEGER
    });
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.dropTable('questionGuests');
  }
};
