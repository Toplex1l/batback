const { authenticate } = require('@feathersjs/authentication').hooks;

const includeAssociations = () => async (context) => {
  const sequelize = context.app.get("sequelizeClient");

  const { users} = sequelize.models;

  context.params.sequelize = {
    include: [
      { model: users, as: "users" },
    ],
    raw: false,
  };
  return context;
};

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [includeAssociations()],
    get: [includeAssociations()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
