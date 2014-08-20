import Groupable from '../mixins/groupable';

var MoviesController = Ember.ArrayController.extend(Groupable, {
  ungroupedContentBinding: 'content',
  group: function(movie) {
    return Ember.Object.create({
      key: movie.get('year')
    });
  },

  actions: {
    hideMenu: function() {
      $('body, .slide-container').prop('scrollLeft', 50000);
    }
  }
});

export default MoviesController;
