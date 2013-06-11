define(function( require ) {
  var Backbone = require('backbone');
  var TestModel = require('model/test');

  return Backbone.Collection.extend({
    name: 'TestCollection',
    model: TestModel,
    url: './data/metadata.json'
  });
});
