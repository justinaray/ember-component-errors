import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['timer-group'],

  initialCount: 2,

  init() {
    this._super(...arguments);

    this.set('count', 0);
    this.set('timers', []);
    for(let i = 0; i < this.initialCount; i++) {
      this.addTimer();
    }
  },

  addTimer() {
    let timer = {
      id: this.count,
      name: `Timer ${++this.count}`
    };

    this.timers.addObject(Ember.Object.create(timer));
  },

  removeTimer() {
    this.timers.popObject();
  }
});
