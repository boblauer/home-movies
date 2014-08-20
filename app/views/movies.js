var MoviesView = Ember.View.extend({
  didInsertElement: function() {
    Ember.$('li span').on('click', function() { });
  }
});

export default MoviesView;
