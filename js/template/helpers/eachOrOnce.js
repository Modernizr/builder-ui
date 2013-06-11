define(function( require ) {
  var Handlebars = require('handlebars');
  var _ = require('underscore');

  function eachOrOnce( fn, elemOrArray ) {
    if (!_.isArray(elemOrArray)) {
      elemOrArray = [elemOrArray];
    }

    return _(elemOrArray).map(function( elem ) {
      return fn(elem);
    }).join('');
  }

  Handlebars.registerHelper('eachOrOnce', function( data, opts ) {
    return eachOrOnce(opts.fn, data);
  });

  return eachOrOnce;
});
