# Website Foundation

Production-ready starter structure for a scalable marketing website with SEO/GEO support.

## Quick start

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Structure

- `app/`: Routes, metadata, API routes
- `components/`: UI, layout, page sections, forms, SEO components
- `lib/`: Utilities, SEO metadata helpers, analytics wrappers, **blog repository** (`lib/blog/articles.ts`)
- `content/`: Data files used by pages (e.g. leaderboard CSV)
- `docs/`: Team and architecture documentation

## Team standards

- Keep components focused and reusable
- Prefer server components by default
- Use `@/` aliases
- Add structured data for key pages
