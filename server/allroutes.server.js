/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/', require('./routes/data.controllers/index.data.controllers.server'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(routes|config|components|auth|app|bower_components)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/main.html'));
    });
};
