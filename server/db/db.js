const Sequelize = require('sequelize');

const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/recipes-test';

const db = new Sequelize(dbUrl, {
	logging: false,
	operatorAliases: false
});

module.exports = db;
