Timers initiated with `Ember.run` are placed into the run loop.
They are effectively orphaned and will continue to run even after the component is gone.
This often results in `calling set on destroyed object` but can cause many other problems too.

## Solution

Cancel the timer(s) with `Ember.run.cancel(...)`

```javascript
...

updCurrTime() {
  this.markCurrTime();
  this.set('currTimer', run.later(this, 'updCurrTime', 1000));
},

...

willDestroyElement() {
  this._super(...arguments);

  const currTimer = this.get('currTimer');
  if (currTimer) {
    run.cancel(currTimer);
    this.set('currTimer', null);
  }
}
...
```
