'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reiseberichte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reiseberichte.hasMany(models.Reiseindex, {
        foreignKey: {
          name: 'Reisebericht'
        }
      });
    }
  };
  Reiseberichte.init({
    Reisender: DataTypes.STRING,
    Titel: DataTypes.TEXT,
    Standort: DataTypes.STRING,
    Stand: DataTypes.INTEGER,
    Original: DataTypes.INTEGER,
    Bearbeitungsvermerk: DataTypes.INTEGER,
    Reisezeit: DataTypes.BLOB,
    KA: DataTypes.INTEGER,
    KE: DataTypes.INTEGER,
    Koordinaten: DataTypes.BLOB,
    Band: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reiseberichte',
    freezeTableName: true,
    timestamps: false
  });
  return Reiseberichte;
};