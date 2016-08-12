import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('timer-cleanup');
  this.route('listener-cleanup');
  this.route('prototype-ref');
  this.route('proper-context');
});

export default Router;
