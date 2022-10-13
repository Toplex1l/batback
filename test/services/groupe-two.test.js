const assert = require('assert');
const app = require('../../src/app');

describe('\'groupeTwo\' service', () => {
  it('registered the service', () => {
    const service = app.service('groupe-two');

    assert.ok(service, 'Registered the service');
  });
});
