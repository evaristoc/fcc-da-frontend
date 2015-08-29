var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var errors = require('./components/errors');
var dataRoutes = require('./routes/data.controllers/index.data.controllers.server');
var users = require('./routes/users');
var AppConfig = require('./config/AppConfig');

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  //code
};

var app = express();
app.set('appPath', AppConfig.AppPath);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('/', app.get('appPath'));
//app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
// serve all asset files from necessary directories
//http://stackoverflow.com/questions/20396900/angularjs-routing-in-expressjs
//app.use("/styles", express.static('/home/ec/Public/freecodecamp/analytics_project/fcc_da_app/app/styles'));
//app.use("/images", express.static('/home/ec/Public/freecodecamp/analytics_project/fcc_da_app/app/images'));
//app.use("/scripts", express.static('/home/ec/Public/freecodecamp/analytics_project/fcc_da_app/app/scripts'));
//app.use("/views", express.static('/home/ec/Public/freecodecamp/analytics_project/fcc_da_app/app/views'));
app.set("view options", {layout: false});
app.use(express.static(path.join(app.get('appPath'),'app')));
app.use(express.static(path.join(app.get('appPath'),'bower_components')));
//console.log(path.resolve(app.get('appPath') + '/index.html'))


// Insert routes below
//app.use('/users', users);
//app.use('/', dataRoutes); // API is HERE!!!!!!!!!!!!!!!!!!!!!!
//// All undefined asset or api routes should return a 404
//app.route('/:url(routes|config|components|server|node_modules)/*')
// .get(errors[404]);
// All other routes should redirect to the index.html
app.route('/*')
  .get(function(req, res, next) {
    res.render('index');
  });
//app.all('/*', function(req, res, next){res.sendFile('/home/ec/Public/freecodecamp/analytics_project/fcc_da_app/app/index.html')})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
