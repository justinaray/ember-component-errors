import Ember from 'ember';

const { Component, run } = Ember;

/**
 * This component is illustrating how javascript's prototypical inheritance
 * affects component development.
 */
export default Component.extend({
  classNames: ['timer', 'timer-prototype-ref'],

  // This object is directly overridden on all instances, so each instance has it's own
  currTimer: null,

  /*
   * The times object will be shared by all instances, so updates to its
   * properties will be reflected in all instances
   */
  times: {
    load: null,
    curr: null
  },

  init() {
    this._super(...arguments);

    this.set('times.load', Date.now());
    this.set('times.curr', null);

    // This line would fix the shared prototype instance problem
    // this.set('times', {load: Date.now(), curr: null});
  },

  willRender() {
    this._super(...arguments);

    this.set('times.curr', Date.now());

    let delta = 0;
    let loadTime = this.get('times.load');
    let currTime = this.get('times.curr');

    if (loadTime && currTime) {
      delta = Math.floor(Math.max(0, (currTime - loadTime)) / 1000);
    }

    this.set('deltaSeconds', delta);
  },

  didRender() {
    this._super(...arguments);

    this.set('currTimer', run.later(this, 'rerender', 1000));
  },

  willDestroyElement() {
    this._super(...arguments);

    const currTimer = this.get('currTimer');
    if (currTimer) {
      run.cancel(currTimer);
      this.set('currTimer', null);
    }
  }
});
