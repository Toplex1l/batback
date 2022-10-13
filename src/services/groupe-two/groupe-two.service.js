// Initializes the `groupeTwo` service on path `/groupe-two`
const { GroupeTwo } = require('./groupe-two.class');
const createModel = require('../../models/groupe-two.model');
const hooks = require('./groupe-two.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/groupe-two', new GroupeTwo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('groupe-two');

  service.hooks(hooks);
};
