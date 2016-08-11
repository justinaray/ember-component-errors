import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  classNames: ['doc-renderer'],

  ajax: inject.service(),

  mdContent: null,

  didReceiveAttrs() {
    this._super(...arguments);

    let path = this.get('path');

    if (path) {
      this.get('ajax').request(path, {
        dataType: 'text'
      }).then(result => {
        this.set('mdContent', result);
      }).catch(() => {
        this.set('mdContent', null);
      });
    } else {
      this.set('mdContent', null);
    }
  }
});
