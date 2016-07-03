(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'book-sharing',
      template: '<h1>Book Sharing App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
