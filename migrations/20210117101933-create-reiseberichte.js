'use strict';

const db = require('../models');

// Set up associations: sync before running the first migration
db.sequelize.sync();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reiseberichte', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reisender: {
        type: Sequelize.STRING
      },
      Titel: {
        type: Sequelize.TEXT
      },
      Standort: {
        type: Sequelize.STRING
      },
      Stand: {
        type: Sequelize.INTEGER
      },
      Original: {
        type: Sequelize.INTEGER
      },
      Bearbeitungsvermerk: {
        type: Sequelize.INTEGER
      },
      Reisezeit: {
        type: Sequelize.BLOB
      },
      KA: {
        type: Sequelize.INTEGER
      },
      KE: {
        type: Sequelize.INTEGER
      },
      Koordinaten: {
        type: Sequelize.BLOB
      },
      Band: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reiseberichte');
  }
};