import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['problem-container'],

  showInstructions: true,

  init() {
    this._super(...arguments);
  },

  actions: {
    toggleDocs() {
      this.toggleProperty('showInstructions');
    }
  }
});
