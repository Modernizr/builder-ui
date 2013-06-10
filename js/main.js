require({
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
},['backbone', 'jquery'], function ( Backbone, $) {
  
});
