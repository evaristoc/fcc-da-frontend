var express = require('express');
var router = express.Router();
var dataRoutes = require('./data.controllers/index.data.controllers.server');



router.get('/', function(req, res, next) {
  res.sendFile('views/index.html', {
    root: './public'
  });
});

router.use('/api/v1/data', dataRoutes); // API is HERE!!!!!!!!!!!!!!!!!!!!!!

module.exports = router;
