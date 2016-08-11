import Base from './timer-runaway-fixed';

/**
 * This component is demonstrating leaking listeners.
 * You must take care to clean up manually attached listeners.
 */
export default Base.extend({

  paused: false,

  didInsertElement() {
    this._super(...arguments);

    // Moving listeners to a util method to make overriding easy.
    // Mostly for demo purposes
    this.attachWindowListeners();
  },

  attachWindowListeners() {
    this.$(window).on('focus', () => {
      this.onWindowFocus();
    });
    this.$(window).on('blur', () => {
      this.onWindowBlur();
    });
  },

  onWindowFocus() {
    // let elementId = this.getElementId();
    // console.log(`${elementId}: window focused`);

    this.set('paused', false);
    this.updCurrTime();
  },

  onWindowBlur() {
    // let elementId = this.getElementId();
    // console.log(`${elementId}: window blur`);

    this.set('paused', true);
    this.cancelTimer();
  },

  getElementId() {
    let result = null;

    try {
      if (this && this.get) {
        result = this.get('elementId');
      }
    } catch (ignored) {
      // Handled Below
    }

    if (!result) {
      result = '<removed element>';
    }

    return result;
  }
});
