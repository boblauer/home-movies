var MovieController = Ember.ObjectController.extend({
  url: function() {
    return '//www.youtube.com/embed/' + this.get('id') + '?rel=0';
  }.property('id')
});

export default MovieController;
