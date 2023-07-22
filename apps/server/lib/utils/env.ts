import * as dotenv from "dotenv";
dotenv.config();

const DATABASE_ID = process.env.DATABASE_ID ?? "";
const DATABASE_URL = process.env.DATABASE_URL ?? "";

export const env = { DATABASE_ID, DATABASE_URL };
