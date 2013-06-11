// Quick shims and setup to make urls and external
// libs happy
requirejs.config({
  baseUrl: 'js/',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  },
  hbs: {
    templateExtension : 'hbs',
    disableI18n : true
  }
});

// Application starting point
define(function( require ) {

  // Pull in dependencies
  var Backbone = require('backbone');
  var $        = require('jquery');
  var AppModel = require('model/app');
  var AppView  = require('view/app');
  var TestCollection  = require('collection/test');

  // Create our list of available tests
  var tests = new TestCollection();

  // Create some top level State and UI
  var appModel = new AppModel();
  var app = {
    model: appModel,
    view: new AppView({
      // The main container element on the page
      el: '#builder-container',
      model: appModel
    })
  };

  // Set the tests as a property of our app
  // model
  app.model.set('tests', tests);

  // Listen for the data coming in
  tests.on('sync', function (d) {
    app.model.trigger('change:tests');
  });

  app.model.on('change:tests', function() {
    app.view.render();
  });

  // Make the call for data
  tests.fetch();

  // Make debugging a little easier
  // and leak a global
  window.app = app;
});
