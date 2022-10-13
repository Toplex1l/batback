// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const groupeTwo = sequelizeClient.define('groupe_two', {
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
  groupeTwo.associate = function (models) {
    // Define associations here
    groupeTwo.belongsTo(models.teams, {as:'team'} )
    // See https://sequelize.org/master/manual/assocs.html
  };

  return groupeTwo;
};
