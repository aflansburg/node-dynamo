const path = require('path');
const fs = require('fs');

// http server
const app = require('fastify')({ logger: true });

// apollo server
const { ApolloServer, gql } = require('apollo-server-fastify');
const { resolvers } = require('./src/api/gql/resolvers');

const typeDefs = gql`
  ${fs.readFileSync(
    path.resolve(__dirname, './src/api/gql/types/schema.graphql'),
    'utf8'
  )}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// dynamo / db setup
const runConfigDynamo = require('./src/config/configDynamo');
const Movie = require('./src/models/Movie');
const loadData = require('./src/db/loadData');

// movie this into a "migration"
async function setup() {
  runConfigDynamo();
  await Movie.createTable();
  // need to add some err/succes return - this could represent migrations, some data setup/mutation
  return await loadData();
}

// initial route
// app.get('/', async (request, reply) => {
//   return { yo: 'hey' };
// });

const start = async () => {
  try {
    // setup
    console.log('setting up sample data');
    await setup();
    console.log('done setting up sample data');
    console.log('starting server');

    // register apollo middleware
    app.register(server.createHandler());

    // begin listening
    await app.listen(3001);
    app.log.info(`server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit();
  }
};

start();
