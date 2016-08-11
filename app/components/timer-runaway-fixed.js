import Ember from 'ember';
import TimerMixin from '../mixins/timer-mixin';

const { Component, run } = Ember;

/**
 * This component is demonstrating how to clean up your timers.
 */
export default Component.extend(TimerMixin, {
  classNames: ['timer-runaway-fixed'],

  currTimer: null,

  didInsertElement() {
    this._super(...arguments);
    this.set('currTimer', run.later(this, 'updCurrTime', 1000));
  },

  updCurrTime() {
    this.markCurrTime();
    this.set('currTimer', run.later(this, 'updCurrTime', 1000));
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
