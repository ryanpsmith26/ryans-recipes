const { db, Recipe } = require('./server/db');

const seed = async () => {
	try {
		await db.sync({ force: true });

		await Recipe.create({ name: 'Chicken' });
	} catch (err) {
		console.log(red(err));
	}
};

seed()
	.then(() => {
		console.log('Seeding success!');
		db.close();
	})
	.catch((err) => {
		console.error('Something went wrong!');
		console.error(err);
		db.close();
	});
