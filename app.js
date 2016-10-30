var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var http = require('http');

var app = express();


(function (app) {
    app.set('port', process.env.PORT || 3000);
    // View engine setup
    app.set('views', path.join(__dirname + './views'));
    app.set('view engine', 'html');

    nunjucks.configure('views', {
        autoescape: false,
        express: app
    });

    var njglobals = require('nunjucks/src/globals');
    njglobals.stringify = JSON.stringify;

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());


    app.use(express.static(__dirname + '/public'));
    app.use(favicon(__dirname + '/public/images/favicon.ico'));


    require('./routes').delegate(app);

    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });

})(app);
