define(function( require ) {
  var Backbone = require('backbone');
  var TestModel = require('model/test');

  return Backbone.Collection.extend({
    name: 'TestCollection',
    model: TestModel,
    url: './data/metadata.json',
    toJSON: function() {
      return Backbone.Collection.prototype.toJSON.apply(this.sortBy(function( test ) {
        if (!test.get('name').match(/^test\//)) {
          return test.get('name');
        }
        return 'zz-' + test.get('name');
      }), arguments)
    }
  });
});
