import Ember from 'ember';

const { Component } = Ember;

/**
 * This component is attempting to manage tooltips for it's children.
 * While this seems like a containers job initially, the container is not notified
 * of child changes, additions, or deletions.  Therefore, it can't properly
 * control/render this data
 */
export default Component.extend({
  classNames: ['parent-managed-timer-tooltips'],

  willRender() {
    this._super(...arguments);
  },

  didRender() {
    this._super(...arguments);
    let $timers = this.$('.tooltip-tgt .timer');
    $timers.tooltip({
      placement: 'bottom'
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    let $timers = this.$('.tooltip-tgt .timer');
    $timers.tooltip('destroy');
  }
});
