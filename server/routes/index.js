var express = require('express');
var router = express.Router();
// var dataRoutes = require('./data.controllers/index.data.controllers.server');
var env = process.env.NODE_ENV || 'development';

router.get('/', function(req, res, next) {
  res.sendFile('views/index.html', {
    root: './public'
  });
});

if (env === 'development') {
  var dataRoutes = require('./data.controllers/index.data.controllers.test.server');   
} else if (env === 'production'){
  var dataRoutes = require('./data.controllers/index.data.controllers.server');
}

router.use('/api/v1/data', dataRoutes); // API is HERE!!!!!!!!!!!!!!!!!!!!!!

module.exports = router;
