'use strict';

module.exports = function(sequelize, DataTypes) { 
	var Guest = sequelize.define('Guest', {
		uuid: DataTypes.STRING,
		ipAddress: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Guest.belongsToMany(models.Question, {
					through: {
						model: models.QuestionGuest
					}
				});
			}
		}	
	});

	return Guest;
};