import Ember from 'ember';

const { Mixin, computed } = Ember;

export default Mixin.create({
  init() {
    this._super(...arguments);

    if (this.classNames) {
      this.classNames.push('timer');
    } else {
      this.classNames = ['timer'];
    }

    this.loadTime = Date.now();
    this.currTime = null;
  },

  markCurrTime() {
    this.set('currTime', Date.now());
  },

  deltaSeconds: computed('loadTime', 'currTime', {
    get() {
      let loadTime = this.get('loadTime');
      let currTime = this.get('currTime');

      if (loadTime && currTime) {
        return Math.floor((currTime - loadTime) / 1000);
      } else {
        return 0;
      }
    }
  })
});
