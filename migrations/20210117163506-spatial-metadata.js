'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('geometry_columns', {
      f_table_name: {
        type: Sequelize.STRING
      },
      f_geometry_column: {
        type: Sequelize.STRING
      },
      geometry_type: {
        type: Sequelize.INTEGER
      },
      coord_dimension: {
        type: Sequelize.INTEGER
      },
      srid: {
        type: Sequelize.INTEGER
      },
      geometry_format: {
        type: Sequelize.STRING
      }
    });
    await queryInterface.bulkInsert('geometry_columns', [{
      f_table_name: 'Reiseindex',
      f_geometry_column: 'geometry',
      geometry_type: 1,
      coord_dimension: 2,
      srid: 4326,
      geometry_format: 'WKT'
    }, {
      f_table_name: 'Raster',
      f_geometry_column: 'geometry',
      geometry_type: 3,
      coord_dimension: 2,
      srid: 4326,
      geometry_format: 'WKT'
    }], {});
    await queryInterface.createTable('spatial_ref_sys', {
      srid: {
        type: Sequelize.INTEGER
      },
      auth_name: {
        type: Sequelize.STRING
      },
      auth_srid: {
        type: Sequelize.INTEGER
      },
      ref_sys_name: {
        type: Sequelize.STRING
      },
      proj4text: {
        type: Sequelize.STRING
      },
      srtext: {
        type: Sequelize.STRING
      }
    });
    await queryInterface.bulkInsert('spatial_ref_sys', [{
      srid: 4326,
      auth_name: 'epsg',
      auth_srid: 4326,
      ref_sys_name: 'WGS84',
      proj4text: '+proj=longlat +datum=WGS84 +no_defs',
      srtext: 'GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AXIS["Latitude",NORTH],AXIS["Longitude",EAST],AUTHORITY["EPSG","4326"]]'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('spatial_ref_sys', null, {});
    await queryInterface.dropTable('spatial_ref_sys');
    await queryInterface.bulkDelete('geometry_columns', null, {});
    await queryInterface.dropTable('geometry_columns');
  }
};
