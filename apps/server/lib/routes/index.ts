import Hapi from '@hapi/hapi';
import { getBoxes } from './getBoxes';

export const server = Hapi.server({
  port: 1717,
  host: 'localhost',
});

server.route(getBoxes);
