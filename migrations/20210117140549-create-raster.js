'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Raster', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Bezeichnung: {
        type: Sequelize.STRING
      },
      LinksUntenOst: {
        type: Sequelize.FLOAT
      },
      LinksUntenNord: {
        type: Sequelize.FLOAT
      },
      LinksObenOst: {
        type: Sequelize.FLOAT
      },
      LinksObenNord: {
        type: Sequelize.FLOAT
      },
      RechtsObenOst: {
        type: Sequelize.FLOAT
      },
      RechtsObenNord: {
        type: Sequelize.FLOAT
      },
      RechtsUntenOst: {
        type: Sequelize.FLOAT
      },
      RechtsUntenNord: {
        type: Sequelize.FLOAT
      },
      geometry: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Raster');
  }
};