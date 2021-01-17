'use strict';

const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');
const koordinateToLonLat = require("../lib/koordinateToLonLat");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const file = path.join(__dirname, '..', 'daten_exportiert_aus_mdb', '_Reiseindex__201908011524.csv');
    const input = fs.readFileSync(file, {encoding: 'utf-8'});
    const csv = parse(input, {
      columns: true,
      delimiter: ';'
    })
    csv.forEach((row) => {
      [row.lon, row.lat] = koordinateToLonLat(row.Koordinate);
      row.geometry = `POINT (${row.lon + 0.125} ${row.lat + 0.125})`;
    });
    await queryInterface.bulkInsert('Reiseindex', csv, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reiseindex', null, {});
  }
};
