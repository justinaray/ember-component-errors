define('ember-component-errors/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/doc-renderer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/doc-renderer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/doc-renderer.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/problem-container.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/problem-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/problem-container.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/timer-group.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/timer-group.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-group.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/timer-pauseable-fixed.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/timer-pauseable-fixed.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-pauseable-fixed.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/timer-pauseable-leaky.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/timer-pauseable-leaky.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-pauseable-leaky.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/timer-prototype-ref.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/timer-prototype-ref.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-prototype-ref.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/timer-runaway-fixed.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/timer-runaway-fixed.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-runaway-fixed.js should pass jshint.');
  });
});
define('ember-component-errors/tests/components/timer-runaway.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/timer-runaway.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/timer-runaway.js should pass jshint.');
  });
});
define('ember-component-errors/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-component-errors/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-component-errors/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-component-errors/tests/helpers/start-app', 'ember-component-errors/tests/helpers/destroy-app'], function (exports, _qunit, _emberComponentErrorsTestsHelpersStartApp, _emberComponentErrorsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberComponentErrorsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberComponentErrorsTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-component-errors/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-component-errors/tests/helpers/resolver', ['exports', 'ember-component-errors/resolver', 'ember-component-errors/config/environment'], function (exports, _emberComponentErrorsResolver, _emberComponentErrorsConfigEnvironment) {

  var resolver = _emberComponentErrorsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberComponentErrorsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberComponentErrorsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-component-errors/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-component-errors/tests/helpers/start-app', ['exports', 'ember', 'ember-component-errors/app', 'ember-component-errors/config/environment'], function (exports, _ember, _emberComponentErrorsApp, _emberComponentErrorsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberComponentErrorsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberComponentErrorsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-component-errors/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-component-errors/tests/mixins/timer-mixin.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/timer-mixin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/timer-mixin.js should pass jshint.');
  });
});
define('ember-component-errors/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-component-errors/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-component-errors/tests/test-helper', ['exports', 'ember-component-errors/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberComponentErrorsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberComponentErrorsTestsHelpersResolver['default']);
});
define('ember-component-errors/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-component-errors/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map