import Ember from 'ember';

const { Component, computed, run } = Ember;

/**
 * This component attempts to use all of the lessons learned in this app
 *
 * It cleans up after itself
 *   Cancel timers, remove listeners, clean up plugins
 * It overwrites/avoids the prototype to avoid sharing refs between instances
 * It internalizes aspects that only it can manage (i.e. tooltips)
 * It uses the component flow to avoid complex timers
 * It uses the component flow to trigger rerenders to make a more functional render method
 * Use computeds for derrived props to ease cognative overload
 */
export default Component.extend({
  classNames: ['timer', 'timer-complete'],
  attributeBindings: ['deltaText:title'],

  // Attrs
  showTooltip: false,
  paused: computed({
    get() {
      // Default is false
      return false;
    },

    set(prop, value) {
      if (value) {
        // This will trigger a rerender, but canceling will let Ember have time to do its thing
        this._cancelTimer();
      }
      return value;
    }
  }),

  // Internal Props
  _currTimer: null,
  _loadTime: null,
  _currTime: null,
  _lastRenderedTooltip: null,

  // Derrived Props
  _deltaSeconds: computed('_loadTime', '_currTime', {
    get() {
      let result = 0;
      let loadTime = this.get('_loadTime');
      let currTime = this.get('_currTime');

      if (loadTime && currTime) {
        result = Math.floor(Math.max(0, (currTime - loadTime)) / 1000);
      }

      return result;
    }
  }),

  deltaText: computed('paused', '_deltaSeconds', {
    get() {
      let paused = this.get('paused');
      if (paused) {
        return 'Paused';
      } else {
        return `Loaded ${this.get('_deltaSeconds')} seconds ago`;
      }
    }
  }),

  init() {
    this._super(...arguments);

    this.set('_loadTime', Date.now());
    this.set('_currTime', null);
  },

  willRender() {
    this._super(...arguments);

    this._cancelTimer();

    this.set('_currTime', Date.now());

    if (this._lastRenderedTooltip && this.get('showTooltip') === false) {
      // Only destroy here if we're turning tooltips off
      this.$().tooltip('destroy');
    }
  },

  didRender() {
    this._super(...arguments);

    // Create or Update the Tooltip
    let deltaText = this.get('deltaText');
    if(this.get('showTooltip') && deltaText) {
      if (this._lastRenderedTooltip) {
        // Update
        this.$().tooltip('fixTitle');
      } else {
        // Create
        this.$().tooltip({placement: 'top'});
      }

      this._lastRenderedTooltip = deltaText;
    } else {
      this._lastRenderedTooltip = null;
    }

    // Set up a timer to rerender the component and tick
    if (!this.get('paused')) {
      this.set('_currTimer', run.later(this, () => {
          // Insurance in case the timer can't cancel fast enough
          if (this && !this.get('isDestroying') && !this.get('isDestroyed')) {
            this.rerender();
          }
      }, 1000));
    }
  },

  didInsertElement() {
    this._super(...arguments);

    let elementId = this.get('elementId');

    // Namespace the listeners ... easy to remove by string later
    this.$(window).on(`focus.${elementId}`, () => {
      this.set('paused', false);
    });

    this.$(window).on(`blur.${elementId}`, () => {
      this.set('paused', true);
    });
  },

  willDestroyElement() {
    // Cancel Timers
    this._cancelTimer();

    // Remove Listeners
    this.$(window).off(`.${this.get('elementId')}`);

    // Clean up external plugins
    if (this._lastRenderedTooltip) {
      this.$().tooltip('destroy');
    }

    this._super(...arguments);
  },

  _cancelTimer() {
    const currTimer = this.get('_currTimer');
    if (currTimer) {
      run.cancel(currTimer);
      this.set('_currTimer', null);
    }
  }
});
