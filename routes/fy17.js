/**
 * Created by joan on 2016-11-30.
 */
exports.delegate = function (app) {
	// October
	app.get('/fy17/oct', oct);

	// November
	app.get('/fy17/nov', nov);
};

function oct(req, res) {
	return res.render('fy17/oct/index');
}

function nov(req, res) {
	return res.render('fy17/nov/index');
}
