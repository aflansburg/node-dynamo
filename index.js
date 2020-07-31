const fastify = require('fastify')({ logger: true });
const runConfigDynamo = require('./config/configDynamo');
const createTables = require('./db/tables');
const loadData = require('./db/loadData');

async function setup() {
  runConfigDynamo();
  // here should check if table exists or do in createTables();
  createTables();
  // this is a lot of data so good to handle w/ Promise (see loadData implementation)
  // need to add some err/succes return
  return await loadData();
}

// initial route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
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
