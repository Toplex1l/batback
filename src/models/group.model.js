// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const group = sequelizeClient.define('group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gameOne: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gameTwo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gameThree: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gameFour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gameFive: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  group.associate = function (models) {
    // Define associations here
    group.belongsTo(models.teams, {as: 'teams'})
    // See https://sequelize.org/master/manual/assocs.html
  };
  
  return group;
};
