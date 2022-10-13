// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const groupOne = sequelizeClient.define('group_one', {
    gameOne: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    gameTwo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    gameThree: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    gameFour: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  groupOne.associate = function (models) {
    // Define associations here
    groupOne.belongsTo(models.teams, {as:'team'} )
    // See https://sequelize.org/master/manual/assocs.html
  };

  return groupOne;
};
