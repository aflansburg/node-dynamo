const runConfigDynamo = require('./config/configDynamo');
const createTables = require('./db/tables');
const loadData = require('./db/loadData');

// start fastify / express server here

runConfigDynamo();

createTables();

// this is a lot of data so good to handle w/ Promise (see loadData implementation)
loadData()
  .then(() => console.log('did it'))
  .catch(() => console.error('oof'));
