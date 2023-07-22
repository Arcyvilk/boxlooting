import { Db, MongoClient } from 'mongodb';
import { log } from 'utils/log';
import { env } from 'utils/env';

export class MongoInstance {
  public client: MongoClient;
  public db: Db;

  constructor() {
    try {
      const url = env.DATABASE_URL;
      if (!url) {
        throw new Error('No database URL provided');
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
