import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import fs from "fs";
import path from "path";
import * as schema from "./schema";

const fileName = process.env.DATABASE_FILE || "vms.db";
const absolutePath = path.isAbsolute(fileName)
  ? fileName
  : path.join(/*turbopackIgnore: true*/ process.cwd(), "data", fileName);

fs.mkdirSync(path.join(/*turbopackIgnore: true*/ process.cwd(), "data"), {
  recursive: true,
});

const sqlite = new Database(absolutePath);
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });
export { sqlite };
