import { Database } from "./types";
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    max: 10,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
