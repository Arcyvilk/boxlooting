'use strict';
import { server } from './routes';

const init = async () => {
  await server.start();
  console.log(`Lootbox server running on ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
