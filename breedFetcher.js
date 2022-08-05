const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
    } else {
      const data = JSON.parse(body)[0];
      if (data) {
        callback(null, data.description);
      } else {
        callback(`Failed to find breed: ${breed}`, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };