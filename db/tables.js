const AWS = require('aws-sdk');

module.exports = function () {
  const dynamodb = new AWS.DynamoDB();

  const params = {
    TableName: 'Movies',
    KeySchema: [
      { AttributeName: 'year', KeyType: 'HASH' }, // part. key
      { AttributeName: 'title', KeyType: 'RANGE' }, // sort key
    ],
    AttributeDefinitions: [
      { AttributeName: 'year', AttributeType: 'N' },
      { AttributeName: 'title', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };

  dynamodb.createTable(params, (err, data) => {
    if (err) {
      console.error('Unabe to create table: ', JSON.stringify(err, null, 2));
    } else {
      console.log('Created table.', JSON.stringify(data, null, 2));
    }
  });
};
