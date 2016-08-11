import Ember from 'ember';
import TimerMixin from '../mixins/timer-mixin';

const { Component, run } = Ember;

/**
 * This component is demonstrating the common error of forgetting to
 * cancel your timers.
 */
export default Component.extend(TimerMixin, {
  classNames: ['timer-runaway'],

  didInsertElement() {
    this._super(...arguments);
    run.later(this, 'updCurrTime', 1000);
  },

  updCurrTime() {
    this.markCurrTime();
    run.later(this, 'updCurrTime', 1000);
  }
});
