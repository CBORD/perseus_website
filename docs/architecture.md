# Architecture

## Goals

- Keep structure predictable for long-term maintenance
- Make onboarding easy for new team members
- Ship pages that are SEO and GEO ready by default

## Layering

- `app/`: routing and page composition
- `components/`: pure UI and content building blocks
- `lib/`: shared logic (SEO builders, analytics wrappers, utilities)
- `content/`: source content (MD/MDX or exported CMS payloads)

## Rules

- Route files should stay thin and compose section components
- Avoid API calls directly inside deeply nested UI components
- Place all structured data builders under `lib/seo/`
- Keep naming domain-first (`blog`, `services`, `contact`)
