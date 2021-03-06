const express = require('express');
const homepage = require('./homepage');

module.exports = function(app) {
	app.get('/', homepage.get);
	app.post('/', homepage.post);
	app.post('/api', homepage.apipost);
	app.get('/:shortCode', homepage.urlredirect);
};
