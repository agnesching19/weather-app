const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=54%20Hitcham%20Road%20London&key=AIzaSyBzFoYFSBSry6W8sHO4g4WmKAq_qOCOVkA',
  json: true
}, (error, response, body) => {
  console.log(body);
});
