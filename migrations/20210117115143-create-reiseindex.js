'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reiseindex', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reisebericht: {
        type: Sequelize.INTEGER
      },
      Koordinate: {
        type: Sequelize.INTEGER
      },
      Stand: {
        type: Sequelize.INTEGER
      },
      Jahrvon: {
        type: Sequelize.INTEGER
      },
      Jahrbis: {
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lon: {
        type: Sequelize.FLOAT
      },
      geometry: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reiseindex');
  }
};