const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  const celciusDegree = (fahrenhetDegree) => {
    return (fahrenhetDegree - 32) * 5 / 9;
  };

  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longtitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${celciusDegree(weatherResults.temperature).toFixed(1)}°C. It feels like ${celciusDegree(weatherResults.apparentTemperature).toFixed(1)}°C.`);
      }
    });
  }
});
