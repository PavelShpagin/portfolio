# AGENTS.md

## Cursor Cloud specific instructions

This is a static Next.js 15 portfolio site (single page, no backend, no database, no env vars).

### Services

| Service | Command | Port |
|---|---|---|
| Next.js Dev Server | `npm run dev` | 3000 |

### Standard commands

See `package.json` scripts and `README.md` for details:

- **Lint**: `npm run lint`
- **Build**: `npm run build`
- **Dev**: `npm run dev`

### Notes

- No external services, databases, or API keys are required.
- The lockfile is `package-lock.json` — always use `npm` (not yarn/pnpm).
- ESLint uses Next.js flat config via `eslint.config.mjs` with `next/core-web-vitals`.
