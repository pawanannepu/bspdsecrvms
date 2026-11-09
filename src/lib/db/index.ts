import { createClient as createNodeClient, type Client } from "@libsql/client";
import { createClient as createWebClient } from "@libsql/client/web";
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
  return `file:${path.join(/*turbopackIgnore: true*/ dataDir, fileName)}`;
}

const url = resolveDatabaseUrl();
const authToken = process.env.TURSO_AUTH_TOKEN;
const isRemote = /^https?:\/\//.test(url) || url.startsWith("libsql:");

// Vercel/serverless needs the fetch-based web client for remote Turso.
export const client: Client = isRemote
  ? createWebClient({ url, authToken })
  : createNodeClient({ url, authToken });

export const db = drizzle(client, { schema });
