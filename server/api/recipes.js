const router = require('express').Router();
const { Recipe } = require('../db');

// GET /api/recipes
router.get('/', async (req, res, next) => {
	try {
		const recipe = await Recipe.findByPk(1);
		res.json(recipe);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
