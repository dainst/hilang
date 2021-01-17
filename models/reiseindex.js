'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reiseindex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reiseindex.belongsTo(models.Reiseberichte, {
        foreignKey: {
          name: 'Reisebericht'
        }
      });
    }
  };
  Reiseindex.init({
    Koordinate: DataTypes.INTEGER,
    Stand: DataTypes.INTEGER,
    Jahrvon: DataTypes.INTEGER,
    Jahrbis: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    geometry: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reiseindex',
    freezeTableName: true,
    timestamps: false,
    indexes: [{
      fields: ['Reisebericht']
    }]
  });
  return Reiseindex;
};