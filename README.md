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

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run db:seed` | Seed SQLite + demo user |

## CI/CD

GitHub Actions workflows live in `.github/workflows/`:

| Workflow | Trigger | What it does |
| --- | --- | --- |
| **CI** (`.github/workflows/ci.yml`) | Push/PR to `main` | `npm ci` → lint → typecheck → build |
| **CD** (`.github/workflows/cd.yml`) | Push to `main`, version tags, or manual | Build & push Docker image to `ghcr.io/<owner>/bspdsecrvms` |

After the first CD run, pull the image:

```bash
docker pull ghcr.io/pawanannepu/bspdsecrvms:latest
```

If the package is private, authenticate first:

```bash
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
```

## Docker deploy

```bash
cp .env.example .env
# set BETTER_AUTH_SECRET, BETTER_AUTH_URL, NEXT_PUBLIC_APP_URL

docker compose up -d --build
```

Then seed once (optional, against a running container volume or local data dir):

```bash
npm run db:seed
```

Persist `/app/data` (already mounted as `vms-data` in compose) so SQLite survives restarts.

## Pages

| Route | Screen |
| --- | --- |
| `/login` | Auth |
| `/` | Dashboard cards |
| `/admins` | Admins table |
| `/app-users` | App Users table |
| `/contractors` | Contractors table |
| `/contracts` | Contracts table |
| `/add/*` | Create forms |
| `/mis/*` | MIS reports |
| `/profile` | Profile details |
