'use strict';

module.exports = function(sequelize, DataTypes) {
	var Question = sequelize.define('Question', {
		question: DataTypes.STRING
	}, {
		classMethods: {
	      	associate: function(models) {
	        	Question.belongsToMany(models.Guest, {
	          		through: {
	           	 		model: models.QuestionGuest,
	            		unique: false
	          		},
	          		constraints: false
	        	});

				Question.hasMany(models.Choice);
			}	
		}
	});
	return Question;
};