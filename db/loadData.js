const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

module.exports = function () {
  const docClient = new AWS.DynamoDB.DocumentClient();
  console.log('Importing movies into DynamoDB. Please wait.');

  const jsonPath = path.join(__dirname, '..', 'db', 'moviedata.json');
  const allMovies = JSON.parse(fs.readFileSync(jsonPath));

  return Promise.all(
    allMovies.map((movie) => {
      return new Promise((resolve, reject) => {
        const params = {
          TableName: 'Movies',
          Item: {
            year: movie.year,
            title: movie.title,
            info: movie.info,
          },
        };
        docClient.put(params, (err, data) => {
          if (err) {
            console.error(
              'Unable to add movie: ',
              movie.title,
              ' - ',
              JSON.stringify(err, null, 2)
            );
            reject();
          } else {
            resolve();
          }
        });
      });
    })
  );
};
