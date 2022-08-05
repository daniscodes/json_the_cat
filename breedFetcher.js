const request = require('request');
const myArgs = process.argv[2];

const fetchBreed = function(breed, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    // console.log(body[0]);
    // console.log(typeof body);

    if (error) {
      callback(`Failed to request details: ${error}`, null);
    } else {

      const data = JSON.parse(body)[0];
      // console.log(data[0]);
      // const {name} = data;
      // console.log(name)
      if (data) {
        callback(null, data.description);
      } else {
        callback(`Failed to find breed ${breed}`, null);
      }
    }
  });
};
fetchBreed(myArgs, (error, data) => {
  //console.log(error);
  console.log(data);
});