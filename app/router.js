import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('seasons', function() {
    this.route('show', { path:'/season/:year'});
  });
});

export default Router;
