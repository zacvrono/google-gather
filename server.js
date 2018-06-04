const fs = require('fs');
const hbs = require('hbs');

const express = require('express');
const _ = require('lodash');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

app.get('/', (req, res) => {
	res.render('mapsearch.hbs');
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});