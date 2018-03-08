const request = require('request');

const getWeather = (latitude, longtitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/6d3bb5dcf797fd7bd0115b8a1b8bc4a5/${latitude},${longtitude}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
