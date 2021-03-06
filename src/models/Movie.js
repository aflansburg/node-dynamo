const AWS = require('aws-sdk');

// Singleton using functional code

const schema = {
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

const Movie = {
  // ? Should a model be aware of how to "create" the table in Dynamo ?
  createTable: async () => {
    const dynamodb = await new AWS.DynamoDB();
    // should check here if table exists
    await dynamodb.createTable(schema, (err, data) => {
      if (err && err.code === 'ResourceInUseException') {
        console.error('Table already exists, continuing');
      } else if (err) {
        console.error(
          'Unhandled exception when attempting to create table: ',
          JSON.stringify(err, null, 2)
        );
        process.exitCode = 1;
      } else {
        console.log('Created table.', JSON.stringify(data, null, 2));
      }
    });
  },
};
Object.freeze(Movie);

module.exports = Movie;
