# Lisa Hollinshead

The personal editorial and commercial home of journalist, storyteller, publicist and founder Lisa Hollinshead.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Frontend app: `artifacts/lisa-hollinshead`
- Routes: `artifacts/lisa-hollinshead/src/App.tsx`
- Page content: `artifacts/lisa-hollinshead/src/pages`
- Articles, themes and venture links: `artifacts/lisa-hollinshead/src/data/content.ts`
- Global visual theme: `artifacts/lisa-hollinshead/src/index.css`
- Public images and metadata: `artifacts/lisa-hollinshead/public`

## Architecture decisions

- LisaHollinshead.com is the front door for Lisa's personal brand, journalism, publicity, speaking and podcast.
- Comms 101 remains Lisa's commercial publicity identity but lives inside the Work With Lisa section.
- Social101 remains a separate publication; OneAnother remains a separate company/product.
- Not Backwards at Coming Forwards lives within this site for V1 rather than becoming a separate website.
- V1 is a static editorial portfolio. Do not show successful form submissions unless data is actually sent or stored.

## Product

- Discover Lisa's published journalism and follow verified external links.
- Understand Lisa's publicity, editorial, advisory and speaking offer.
- Explore Social101 and OneAnother as distinct founder ventures.
- Contact Lisa directly about commissions, campaigns, speaking and partnerships.

## User preferences

- Preserve the approved editorial, magazine-like visual direction. Evolve it rather than redesigning it.
- Use only genuine supplied photography. Never generate, alter, beautify or change faces, bodies or documentary scenes.
- No generic stock photography.
- Keep copy warm, intelligent, human and specific. Avoid em dashes.
- Prioritise shipping a credible V1 over adding features.

## Gotchas

- Production builds require `PORT` and `BASE_PATH`, for example `PORT=5173 BASE_PATH=/ pnpm --filter @workspace/lisa-hollinshead run build`.
- Do not invent articles, publications, dates, testimonials, client results or links.
- The `/brands` route remains as a legacy alias; the current navigation uses `/work`.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
