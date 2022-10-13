const assert = require('assert');
const app = require('../../src/app');

describe('\'groupOne\' service', () => {
  it('registered the service', () => {
    const service = app.service('group-one');

    assert.ok(service, 'Registered the service');
  });
});
