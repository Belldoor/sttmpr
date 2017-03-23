/**
 * Created by joan on 2016-11-30.
 */
exports.delegate = function (app) {
	// October
	app.get('/fy17/oct', oct);

	// November
	app.get('/fy17/nov', nov);

	// January
	app.get('/fy17/jan', jan);

	// February
	// I've been absent cos travel to Australia

	// March
	app.get('/fy17/mar', mar);
};

function oct(req, res) {
	return res.render('fy17/oct/index');
}

function nov(req, res) {
	return res.render('fy17/nov/index');
}

function jan(req, res) {
	return res.render('fy17/jan/index');
}

function mar(req, res) {
	return res.render('fy17/mar/index');
}