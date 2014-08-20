var ApplicationController = Ember.Controller.extend({
  actions: {
    showMenu: function() {
      Ember.$('nav').css('left', '0');
      Ember.$('.movie-container').width('80%');
      Ember.$('.menu-helper').addClass('hidden');
    }
  }
});

export default ApplicationController;
