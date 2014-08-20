var MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('movie');
  }
});

export default MoviesRoute;
