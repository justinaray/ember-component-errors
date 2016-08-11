Listeners that are manually attached will continue to fire even after Ember destroys a component.  At best case, these will *only* continue to consume resources.  At worse, they could actively leak memory or throw js errors.

## Solutions
1. Always favor listeners attached in templates (Action Helpers)
1. Prefer Ember-native implementations to raw jQuery/js solutions
1. Try to create a component that has scope to attach listeners through normal Ember means
1. If you have to manually attach a listener, you must remove it

```javascript
...

listeners: null,

didInsertElement() {
  // Remember ... call super
  this.super(...arguments);

  let elementId = this.get('elementId');

  let listeners = [];

  // Namespace the listeners ... easy to remove by string/without fn ref later
  this.$(window).on(`focus.${elementId}`, () => {
    this.onWindowFocus();
  });
  listeners.push(`focus.${elementId}`);

  ...

  // Remember ... don't share instances with other components
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
...
```
