const fastify = require('fastify')({ logger: true });
const runConfigDynamo = require('./src/config/configDynamo');
const Movie = require('./src/models/Movie');
const loadData = require('./src/db/loadData');

async function setup() {
  runConfigDynamo();
  await Movie.createTable();
  // need to add some err/succes return - this could represent migrations, some data setup/mutation
  return await loadData();
}

// initial route
fastify.get('/', async (request, reply) => {
  return { yo: 'hey' };
});

const start = async () => {
  try {
    console.log('setting up sample data');
    await setup();
    console.log('done setting up sample data');
    console.log('starting server');
    await fastify.listen(3001);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit();
  }
};

start();
