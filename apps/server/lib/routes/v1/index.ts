import Hapi from "@hapi/hapi";

import { getBoxes } from "./getBoxes";
import { getLootbox } from "./getLootbox";
import { env } from "../../utils/env";

const BASE_PATH = "/api/v1";

export const serverV1 = Hapi.server({
  port: 1717,
  host: env.HOST,
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Accept", "Content-Type"],
      additionalHeaders: ["X-Requested-With"],
    },
  },
});

// ROUTES

serverV1.route({
  method: "GET",
  path: `${BASE_PATH}/boxes`,
  handler: getBoxes,
});

serverV1.route({
  method: "GET",
  path: `${BASE_PATH}/lootbox/{lootbox}`,
  handler: getLootbox,
});
