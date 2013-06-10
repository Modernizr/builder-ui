// Quick shims and setup to make urls and external
// libs happy
requirejs.config({
  baseUrl: '/js/',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
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

  // Create some top level State and UI
  var app = {
    model: new AppModel(),
    view: new AppView()
  };

  // Create our list of available tests
  var tests = new TestCollection();

  // Set the tests as a property of our app
  // model
  app.model.set('tests', tests);

  // Fetch the list of tests
  tests.fetch();

  window.app = app;
});
