var express = require('express');
//https://lostechies.com/derickbailey/2014/02/20/how-i-work-around-the-require-problem-in-nodejs/
//https://gist.github.com/branneman/8048520
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var errors = require('./components/errors');
var dataRoutes = require('./routes/data.controllers/index.data.controllers.server');
var routes = require('./routes/index');
var AppConfig = require('./config/AppConfig');
var cookieParser = require('cookie-parser');

var env = process.env.NODE_ENV || 'development';


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cookieParser());
<<<<<<< HEAD
app.use(logger('dev'));
app.use(bodyParser.json({}));

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

||||||| merged common ancestors
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
=======
//app.use(express.static(path.join(__dirname, 'public')));
// serve all asset files from necessary directories
//http://stackoverflow.com/questions/20396900/angularjs-routing-in-expressjs
app.set("view options", {layout: false});
app.use(express.static(path.join(app.get('appPath'),'app')));
app.use(express.static(path.join(app.get('appPath'),'bower_components')));
//console.log(path.resolve(app.get('appPath') + '/index.html'))



// Insert routes below
app.use('/data', dataRoutes); // API is HERE!!!!!!!!!!!!!!!!!!!!!!

//// All undefined asset or api routes should return a 404
//app.route('/:url(routes|config|components|server|node_modules)/*')
// .get(errors[404]);
// All other routes should redirect to the index.html
//app.route('/*')
//  .get(function(req, res, next) {
//    res.render('index');
//  });
app.all('/*', function(req, res, next){res.sendFile(path.join(app.get('appPath'),'/server/views/index.html'))})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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


