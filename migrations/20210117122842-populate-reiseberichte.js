'use strict';

const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const file = path.join(__dirname, '..', 'daten_exportiert_aus_mdb', '_Reiseberichte__201908011522.csv');
    const input = fs.readFileSync(file, {encoding: 'utf-8'});
    const csv = parse(input, {
      columns: true,
      delimiter: ';'
    })
    await queryInterface.bulkInsert('Reiseberichte', csv, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reiseberichte', null, {});
  }
};
