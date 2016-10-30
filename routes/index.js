exports.delegate = function (app) {
    var controllers = [];

    controllers.forEach(function (controller) {
        require('./' + controller).delegate(app);
    });

    app.get('/', function (req, res) {
        res.render('./index.html', {title: 'Node Boilerplate!'});
    });
};
