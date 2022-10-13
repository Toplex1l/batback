const { authenticate } = require('@feathersjs/authentication').hooks;

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

const setTotal = () => async (context) => {
  const sequelizeClient = context.app.get("sequelizeClient");
  const gameOne = context.result.gameOne;
  const gameTwo = context.result.gameTwo;
  const gameThree = context.result.gameThree;
  const gameFour = context.result.gameFour;
  const total = gameOne + gameTwo + gameThree + gameFour;

  try{
    const [patched] = await sequelizeClient.query(
      `UPDATE groupe_two
      SET total = '${total}'
      WHERE id = '${context.result.id}'`
    );

  }catch(error){
    console.log(error)
  }

  return result.total = total
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
    patch: [setTotal()],
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
