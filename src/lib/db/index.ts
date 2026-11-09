import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import fs from "fs";
import path from "path";
import * as schema from "./schema";

function resolveDatabaseUrl(): string {
  if (process.env.TURSO_DATABASE_URL) {
    return process.env.TURSO_DATABASE_URL;
  }

  const fileName = process.env.DATABASE_FILE || "vms.db";
  if (path.isAbsolute(fileName) || fileName.startsWith("file:")) {
    return fileName.startsWith("file:") ? fileName : `file:${fileName}`;
  }

  const dataDir = path.join(/*turbopackIgnore: true*/ process.cwd(), "data");
  fs.mkdirSync(dataDir, { recursive: true });
  return `file:${path.join(dataDir, fileName)}`;
}

const url = resolveDatabaseUrl();

export const client: Client = createClient({
  url,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
