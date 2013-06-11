define(function( require ) {
  var Handlebars = require('handlebars');
  var _ = require('underscore');

  function ifIsLink( fn, inverse, maybeLink ) {
    if (maybeLink && maybeLink.href) {
      return fn(maybeLink);
    }
    return inverse(maybeLink);
  }

  Handlebars.registerHelper('ifIsLink', function( data, opts ) {
    return ifIsLink(opts.fn, opts.inverse, data);
  });

  return ifIsLink;
});

