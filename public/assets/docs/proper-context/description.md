In the first group, the parent component is attempting to manage tooltips for it's children.  While this seems intuitive at first, the parent component is not notified of child changes, additions, or deletions.  As such, it can't properly control/render this data.

You could possibly keep track of the child data and deltas and smartly update the tooltips, but Glimmer already does this for you!

# Solution
Move the feature (e.g. tooltips) in the component which owns it's display and data

```javascript
...

/*
 * Note: This logic has been simplified for illustration purposes.
 * It's more complicated/optimized in the actual component
 */

willRender() {
  this._super(...arguments);

  if (!this._firstRender) {
    this.$().tooltip('destroy');
  }
},

didRender() {
  this._super(...arguments);

  this.$().tooltip({placement: 'top'});
  this._firstRender = false;
}
...
```
