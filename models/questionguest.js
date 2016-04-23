'use strict';

module.exports = function(sequelize, DataTypes) {
	var QuestionGuest = sequelize.define('QuestionGuest', {
		GuestId: DataTypes.STRING,
		QuestionId: DataTypes.INTEGER
	},{
		classMethods: {
			associate: function(models) {
				QuestionGuest.belongsTo(models.Choice, {
					constraints: false,
					foreignKey: 'ChoiceId'
				});
			}
		}
	});

	return QuestionGuest;
};