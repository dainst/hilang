'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const raster = [];
    for (let lat = 42.25, c = 's', cc = 'W'; lat >= 34.75; c = c == 'z' ? 'A' : String.fromCharCode(c.charCodeAt(0) + 1), lat -= 0.25) {
      for (let lon = 19.25, r = 0, rr = 45; lon <= 31.25; ++r, lon += 0.25) {
        raster.push({
          Bezeichnung: `${c}${r}`,
          LinksUntenOst: lon,
          LinksUntenNord: lat,
          LinksObenOst: lon,
          LinksObenNord: lat + 0.25,
          RechtsObenOst: lon + 0.25,
          RechtsObenNord: lat + 0.25,
          RechtsUntenOst: lon + 0.25,
          RechtsUntenNord: lat,
          geometry: `POLYGON ((${lon} ${lat}, ${lon} ${lat + 0.25}, ${lon + 0.25} ${lat + 0.25}, ${lon + 0.25} ${lat}, ${lon} ${lat}))`
        });
      }
    }
    debugger
    await queryInterface.bulkInsert('Raster', raster, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Raster', null, {});
  }
};
