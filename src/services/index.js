const users = require('./users/users.service.js');

const teams = require('./teams/teams.service.js');

const groupOne = require('./group-one/group-one.service.js');

const groupeTwo = require('./groupe-two/groupe-two.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(teams);
  app.configure(groupOne);
  app.configure(groupeTwo);
};
