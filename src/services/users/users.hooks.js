const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

const includeAssociations = () => async (context) => {
  const sequelize = context.app.get("sequelizeClient");

  const { teams } = sequelize.models;

  context.params.sequelize = {
    include: [
      { model: teams, as: "team" },
    ],
    raw: false,
  };
  return context;
};

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt'), includeAssociations() ],
    get: [ authenticate('jwt'), includeAssociations() ],
    create: [ hashPassword('password')],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
