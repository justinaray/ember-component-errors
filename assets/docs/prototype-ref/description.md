When you create a component, you are technically defining its prototype.  Because of prototypical inheritance, if you do not have a local instance of a property, javascript will look to the prototype for the instance.

This results in nested operations (i.e. get, set), sharing data if each instance doesn't have it's own reference to the property.

## Solutions

1. Limit use of nested objects
1. Create all instance data in the init override

```javascript
export default Component.extend({
  ...

  // Style Choice: I define all vars here even if overridden
  times: {
    load: null,
    curr: null
  },

  init() {
    this._super(...arguments);

    // Just updating the prototype's instance
    // this.set('times.load', Date.now());
    // this.set('times.curr', null);

    // This sets a new instance on this component
    this.set('times', {load: Date.now(), curr: null});
  }

  ...
```
