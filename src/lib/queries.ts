import { count } from "drizzle-orm";
import { connection } from "next/server";
import { db } from "@/lib/db";
import { admins, appUsers, contractors, contracts } from "@/lib/db/schema";

export async function getDashboardCounts() {
  await connection();
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
  await connection();
  return db.select().from(admins);
}

export async function getAppUsers() {
  await connection();
  return db.select().from(appUsers);
}

export async function getContractors() {
  await connection();
  return db.select().from(contractors);
}

export async function getContracts() {
  await connection();
  return db.select().from(contracts);
}
