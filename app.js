const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=54%20Hitcham%20Road%20London&key=AIzaSyBzFoYFSBSry6W8sHO4g4WmKAq_qOCOVkA',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
});
