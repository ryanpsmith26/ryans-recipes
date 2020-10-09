const Sequelize = require('sequelize');
const db = require('./db');

const Recipe = db.define('Recipe', {
	name: {
		type: Sequelize.STRING
	}
});

module.exports = Recipe;
