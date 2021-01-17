'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Raster.init({
    Bezeichnung: DataTypes.STRING,
    LinksUntenOst: DataTypes.FLOAT,
    LinksUntenNord: DataTypes.FLOAT,
    LinksObenOst: DataTypes.FLOAT,
    LinksObenNord: DataTypes.FLOAT,
    RechtsObenOst: DataTypes.FLOAT,
    RechtsObenNord: DataTypes.FLOAT,
    RechtsUntenOst: DataTypes.FLOAT,
    RechtsUntenNord: DataTypes.FLOAT,
    geometry: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Raster',
    freezeTableName: true,
    timestamps: false
  });
  return Raster;
};