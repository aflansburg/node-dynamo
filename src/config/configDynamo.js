const AWS = require('aws-sdk');

module.exports = function () {
  AWS.config.update({
    region: 'us-west-2',
    endpoint: 'http://localhost:8000',
  });
};
