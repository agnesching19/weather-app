const yargs = require('yargs');
const axios = require('axios');

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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBzFoYFSBSry6W8sHO4g4WmKAq_qOCOVkA`,

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error('Unable to find that address');
  }
  const lat = response.data.results[0].geometry.location.lat;
  const lng = response.data.results[0].geometry.location.lng;
  const weatherUrl = `https://api.darksky.net/forecast/6d3bb5dcf797fd7bd0115b8a1b8bc4a5/${latitude},${longtitude}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  const temperature = response.data.currently.temperature;
  const apparentTemperature = response.data.currently.apparentTemperature;
  const celciusDegree = (fahrenhetDegree) => {
    return (fahrenhetDegree - 32) * 5 / 9;
  };
  console.log(`It's currently ${celciusDegree(weatherResults.temperature).toFixed(1)}°C. It feels like ${celciusDegree(weatherResults.apparentTemperature).toFixed(1)}°C.`);
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API server.');
  } else {
    console.log(e.message);
  }
});
