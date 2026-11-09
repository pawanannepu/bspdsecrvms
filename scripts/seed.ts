import "dotenv/config";
import fs from "fs";
import path from "path";
import { eq } from "drizzle-orm";
import { client, db } from "../src/lib/db";
import {
  account,
  admins,
  appUsers,
  contractors,
  contracts,
  session,
  user,
  verification,
} from "../src/lib/db/schema";
import { auth } from "../src/lib/auth";

const TABLE_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS user (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      email_verified INTEGER NOT NULL DEFAULT 0,
      image TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS session (
      id TEXT PRIMARY KEY NOT NULL,
      expires_at INTEGER NOT NULL,
      token TEXT NOT NULL UNIQUE,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      ip_address TEXT,
      user_agent TEXT,
      user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE
    )`,
  `CREATE TABLE IF NOT EXISTS account (
      id TEXT PRIMARY KEY NOT NULL,
      account_id TEXT NOT NULL,
      provider_id TEXT NOT NULL,
      user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
      access_token TEXT,
      refresh_token TEXT,
      id_token TEXT,
      access_token_expires_at INTEGER,
      refresh_token_expires_at INTEGER,
      scope TEXT,
      password TEXT,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS verification (
      id TEXT PRIMARY KEY NOT NULL,
      identifier TEXT NOT NULL,
      value TEXT NOT NULL,
      expires_at INTEGER NOT NULL,
      created_at INTEGER,
      updated_at INTEGER
    )`,
  `CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      designation TEXT NOT NULL,
      email TEXT NOT NULL,
      mobile TEXT NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS app_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      designation TEXT NOT NULL,
      email TEXT NOT NULL,
      mobile TEXT NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS contractors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firm_name TEXT NOT NULL,
      firm_type TEXT NOT NULL,
      director_name TEXT NOT NULL,
      firm_contact TEXT NOT NULL,
      firm_email TEXT NOT NULL
    )`,
  `CREATE TABLE IF NOT EXISTS contracts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      agency TEXT NOT NULL,
      section_location TEXT,
      category TEXT NOT NULL,
      start_date TEXT NOT NULL,
      end_date TEXT NOT NULL
    )`,
];

async function ensureTables() {
  for (const sql of TABLE_STATEMENTS) {
    await client.execute(sql);
  }
}

async function seed() {
  if (!process.env.TURSO_DATABASE_URL) {
    const dataDir = path.join(process.cwd(), "data");
    fs.mkdirSync(dataDir, { recursive: true });
  }
  await ensureTables();

  await db.delete(session);
  await db.delete(account);
  await db.delete(verification);
  await db.delete(user);
  await db.delete(admins);
  await db.delete(appUsers);
  await db.delete(contractors);
  await db.delete(contracts);

  const email = "adminbilaspur@gmail.com";
  const password = "123";

  await auth.api.signUpEmail({
    body: {
      name: "Nikhil I",
      email,
      password,
    },
  });

  const existing = await db.select().from(user).where(eq(user.email, email));
  if (!existing.length) {
    throw new Error("Failed to create seed user");
  }

  await db.insert(admins).values([
    {
      name: "Bilaspur SECR Railway",
      designation: "System Admin",
      email: "adminbilaspur@gmail.com",
      mobile: "9876543210",
    },
    {
      name: "Anurag Kumar Singh",
      designation: "Approval",
      email: "srdembsp@gmail.com",
      mobile: "9752876950",
    },
    {
      name: "Mechanical . Approval",
      designation: "Approval",
      email: "ahefazsheikh.royalswebtech@gmail.com",
      mobile: "8087269379",
    },
  ]);

  await db.insert(appUsers).values([
    {
      name: "NIKHIL RAMKRUSHNA HARSHE",
      designation: "Officer",
      email: "nikhil.harshe@gmail.com",
      mobile: "9876501234",
    },
    {
      name: "Joy Sinha",
      designation: "Commercial Inspector",
      email: "joy.sinha@gmail.com",
      mobile: "9876502345",
    },
    {
      name: "Shobha Prasad",
      designation: "Commercial Inspector",
      email: "shobha.prasad@gmail.com",
      mobile: "9876503456",
    },
    {
      name: "PANKAJ SONI",
      designation: "TTE",
      email: "pankaj.soni@gmail.com",
      mobile: "9876504567",
    },
  ]);

  await db.insert(contractors).values([
    {
      firmName: "K D FOODS",
      firmType: "Proprietor",
      directorName: "K D SINGH",
      firmContact: "9826187452",
      firmEmail: "kdfoods@gmail.com",
    },
    {
      firmName: "M/s A S Sales Co.",
      firmType: "Partnership",
      directorName: "Amit Sharma",
      firmContact: "9752123456",
      firmEmail: "assales@gmail.com",
    },
    {
      firmName: "RAJ CATERERS",
      firmType: "Proprietor",
      directorName: "Rajesh Verma",
      firmContact: "9425012345",
      firmEmail: "rajcaterers@gmail.com",
    },
    {
      firmName: "SECR VENDORS PVT LTD",
      firmType: "Partnership",
      directorName: "Sunil Patel",
      firmContact: "9009123456",
      firmEmail: "secrvendors@gmail.com",
    },
    {
      firmName: "BILASPUR SNACKS",
      firmType: "Proprietor",
      directorName: "Meena Gupta",
      firmContact: "9827011122",
      firmEmail: "bsp.snacks@gmail.com",
    },
    {
      firmName: "M/s Krishna Traders",
      firmType: "Partnership",
      directorName: "Krishna Yadav",
      firmContact: "9406123456",
      firmEmail: "krishnatraders@gmail.com",
    },
    {
      firmName: "SHRI RAM ENTERPRISES",
      firmType: "Proprietor",
      directorName: "Ram Prasad",
      firmContact: "9993012345",
      firmEmail: "shrirm@gmail.com",
    },
    {
      firmName: "M/s City Parking",
      firmType: "Partnership",
      directorName: "Vikram Joshi",
      firmContact: "9827612345",
      firmEmail: "cityparking@gmail.com",
    },
    {
      firmName: "TEA STALL SERVICES",
      firmType: "Proprietor",
      directorName: "Suresh Das",
      firmContact: "9755512345",
      firmEmail: "teastall@gmail.com",
    },
    {
      firmName: "M/s Station Mart",
      firmType: "Partnership",
      directorName: "Anita Rao",
      firmContact: "9009812345",
      firmEmail: "stationmart@gmail.com",
    },
  ]);

  await db.insert(contracts).values([
    {
      name: "Neeraj Kumar Patel",
      agency: "Railway",
      sectionLocation: "",
      category: "Tea Stall 193",
      startDate: "6/10/2022",
      endDate: "4/16/2028",
    },
    {
      name: "Sameer Enterprises",
      agency: "Railway",
      sectionLocation: "Shahdol",
      category: "convenience store SDL",
      startDate: "3/15/2022",
      endDate: "3/14/2027",
    },
    {
      name: "K D FOODS",
      agency: "Railway",
      sectionLocation: "Bilaspur",
      category: "Refreshment Room",
      startDate: "1/1/2023",
      endDate: "12/31/2027",
    },
    {
      name: "City Parking",
      agency: "Railway",
      sectionLocation: "Korba",
      category: "Parking",
      startDate: "5/20/2021",
      endDate: "5/19/2026",
    },
    {
      name: "Station Mart",
      agency: "Railway",
      sectionLocation: "Raigarh",
      category: "Convenience Store",
      startDate: "8/12/2022",
      endDate: "8/11/2027",
    },
    {
      name: "Raj Caterers",
      agency: "Railway",
      sectionLocation: "Champa",
      category: "Catering",
      startDate: "2/1/2024",
      endDate: "1/31/2029",
    },
  ]);

  console.log("Seed complete.");
  console.log(`Login: ${email}`);
  console.log(`Password: ${password}`);
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
