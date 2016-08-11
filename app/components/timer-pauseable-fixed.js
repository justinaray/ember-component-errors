import Base from './timer-pauseable-leaky';

/**
 * This component shows one way to clean up manually attached listeners.
 * It uses jquery namespacing to easily remove listeners without needing a reference
 * to the listening function
 */
export default Base.extend({

  listeners: null,

  attachWindowListeners() {
    let elementId = this.getElementId();

    let listeners = [];

    // Namespace the listeners ... easy to remove by string later
    this.$(window).on(`focus.${elementId}`, () => {
      this.onWindowFocus();
    });
    listeners.push(`focus.${elementId}`);

    this.$(window).on(`blur.${elementId}`, () => {
      this.onWindowBlur();
    });
    listeners.push(`blur.${elementId}`);

    this.set('listeners', listeners);
  },

  willDestroyElement() {
    let listeners = this.get('listeners');
    listeners.forEach(currListenerName => {
      this.$(window).off(currListenerName);
    });

    this.set('listeners', []);

    this._super(...arguments);
  }
});
