import { mongoInstance } from "lootserver";
import { Document, WithId } from "mongodb";

export const getDataFromDb = async <T extends Document>(
  collectionName: string,
) => {
  const { db } = mongoInstance.getDb();

  const collection = db.collection<T>(collectionName);
  const cursor = collection.find({});

  const data: WithId<T>[] = [];
  for await (const doc of cursor) {
    data.push(doc);
  }

  return data;
};
