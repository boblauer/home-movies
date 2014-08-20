import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'home-movies', // TODO: loaded via config
  Resolver: Resolver,
  ApplicationAdapter: DS.FixtureAdapter.extend()
});

loadInitializers(App, 'home-movies');

export default App;
