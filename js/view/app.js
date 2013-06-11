define(function( require ) {
  var Backbone = require('backbone');
  var template = require('hbs!template/app');

  return Backbone.View.extend({
    name: 'ModernizrBuilderAppView',
    template: template,
    render: function() {
      // Set the HTML
      this.$el.html(
        // To the rendered template
        this.template(
          // Use the test data as input
          this.model.get('tests').toJSON()
        )
      );
    }
  });
});
