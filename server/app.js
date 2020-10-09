const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev')); //logging middleware

app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());

app.use('/api', require('./api'));

// failed to catch req above means 404, forward to error handler
app.use((req, res, next) => {
	res.status(404).send(/* Not Found Page */);
});

// handle any errors
app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500).send(err.message);
});

module.exports = app;
