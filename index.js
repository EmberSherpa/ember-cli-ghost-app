/* jshint node: true */
/* global require */
'use strict';

module.exports = {
  name: 'ember-cli-ghost-app',
  serverMiddleware: function(config) {
    var ghost = require('ghost');
    var path = require('path');

    var app = config.app;
    var options = config.options;
    return ghost({
      config: path.join(options.project.root, 'ghost.js')
    })
      .then(function (ghostServer) {
        app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
        ghostServer.start(app);
      });
  }
};
