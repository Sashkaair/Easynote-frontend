import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-up');
  this.route('sign-in');

  this.route('dashboard', function() {
    this.route('notes');
    this.route('recently-deleted');
  });
});

export default Router;
