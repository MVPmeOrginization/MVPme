'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('submissions service', function() {
  it('registered the submissions service', () => {
    assert.ok(app.service('submissions'));
  });
});
