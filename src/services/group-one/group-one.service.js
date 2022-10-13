// Initializes the `groupOne` service on path `/group-one`
const { GroupOne } = require('./group-one.class');
const createModel = require('../../models/group-one.model');
const hooks = require('./group-one.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/group-one', new GroupOne(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('group-one');

  service.hooks(hooks);
};
