import { log } from "@boxlooting/utils";
import { Db, MongoClient } from "mongodb";

import { env } from "utils/env";

/**
 * Class handling connection to the proper Mongo instance.
 */
export class MongoInstance {
  public client: MongoClient;
  public db: Db;

  constructor() {
    try {
      const url = env.DATABASE_URL;
      if (!url) {
        throw new Error("No database URL provided");
      }
      this.client = new MongoClient(url);
      this.db = this.client.db(env.DATABASE_ID);
    } catch (error: unknown) {
      log.WARN(error);
      throw error;
    }
  }

  getDb() {
    return { db: this.db };
  }
}
