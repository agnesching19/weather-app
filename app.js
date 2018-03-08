// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/6d3bb5dcf797fd7bd0115b8a1b8bc4a5/51.5322464,-0.0864338',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Forecast.io server.');
  } else if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  } else {
    console.log('Unable to fetch weather.');
  }
});


