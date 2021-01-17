const maxLat = 42.25;
const minLon = 19.25;
const factor = 51;

function koordinateToLonLat(koordinate) {
  const latOffset = Math.floor(koordinate / factor);
  const lonOffset = koordinate % factor;
  return [minLon + lonOffset * 0.25, maxLat - latOffset * 0.25];
}
module.exports = koordinateToLonLat;

function main(input) {
  console.log(koordinateToLonLat(input));
}

if (require.main === module) {
  main(...process.argv.slice(2));
}
