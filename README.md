# Vendor Management System — Bilaspur SECR

Deployable Next.js app matching the designs in `assets/`, with Better Auth email/password login and SQLite storage.

## Stack

- Next.js (App Router)
- Better Auth
- Drizzle ORM + SQLite (`better-sqlite3`)
- Tailwind CSS

## Setup

```bash
npm install
cp .env.example .env
# set BETTER_AUTH_SECRET (openssl rand -base64 32)
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Demo login

- Email: `adminbilaspur@gmail.com`
- Password: `123`

## Pages

| Route | Screen |
| --- | --- |
| `/login` | Auth |
| `/` | Dashboard cards |
| `/admins` | Admins table |
| `/app-users` | App Users table |
| `/contractors` | Contractors table |
| `/contracts` | Contracts table |

## Deploy

This is a single Node app. Build and run on a Node host (VPS, Docker, Railway, etc.):

```bash
npm run db:seed
npm run build
npm start
```

Persist the `data/` directory so the SQLite DB survives restarts. Set `BETTER_AUTH_URL` / `NEXT_PUBLIC_APP_URL` to your public URL.
