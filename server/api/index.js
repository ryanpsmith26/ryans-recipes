const router = require('express').Router();
const recipes = require('./recipes');

router.use('/recipes', recipes);

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
