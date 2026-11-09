import { count } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";
import { db } from "@/lib/db";
import { ensureTables } from "@/lib/db/ensure-tables";
import { admins, appUsers, contractors, contracts } from "@/lib/db/schema";

export async function getDashboardCounts() {
  "use cache";
  cacheTag("dashboard-counts");
  cacheLife("hours");
  await ensureTables();

  const [adminCount] = await db.select({ value: count() }).from(admins);
  const [userCount] = await db.select({ value: count() }).from(appUsers);
  const [contractorCount] = await db.select({ value: count() }).from(contractors);
  const [contractCount] = await db.select({ value: count() }).from(contracts);

  return {
    admins: adminCount.value,
    appUsers: userCount.value,
    contractors: contractorCount.value,
    contracts: contractCount.value,
  };
}

export async function getAdmins() {
  "use cache";
  cacheTag("admins");
  cacheLife("hours");
  await ensureTables();
  return db.select().from(admins);
}

export async function getAppUsers() {
  "use cache";
  cacheTag("app-users");
  cacheLife("hours");
  await ensureTables();
  return db.select().from(appUsers);
}

export async function getContractors() {
  "use cache";
  cacheTag("contractors");
  cacheLife("hours");
  await ensureTables();
  return db.select().from(contractors);
}

export async function getContracts() {
  "use cache";
  cacheTag("contracts");
  cacheLife("hours");
  await ensureTables();
  return db.select().from(contracts);
}
