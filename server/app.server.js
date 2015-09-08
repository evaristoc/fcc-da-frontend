var express = require('express');
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
app.use(logger('dev'));
app.use(bodyParser.json({}));

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));



// Insert routes below
app.use('/data', dataRoutes); // API is HERE!!!!!!!!!!!!!!!!!!!!!!
  
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


