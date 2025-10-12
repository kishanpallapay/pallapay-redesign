# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts Next.js App Router routes; share layout chrome in `app/layout.tsx` and create feature folders such as `app/dashboard` and `app/auth`.
- Reusable primitives live in `components/` (`ui/`, `layouts/`, `icons/`); export assembled screens from `views/` via `views/index.ts` for tidy imports.
- Share state and helpers from `lib/` (`lib/stores/` for Zustand) and keep schema validation in `validation/`.
- Static assets belong in `public/`; adjust global styling in `app/globals.css` alongside shadcn settings captured in `components.json`.

## Build, Test, and Development Commands
- `npm install` with Node 20 (see `.nvmrc`) before first run.
- `npm run dev` launches Next.js with Turbopack; keep it running while iterating.
- `npm run build` compiles the production bundle; run it before merging sizable work.
- `npm run start` serves the built app locally for smoke checks.
- `npm run lint` enforces the `next/core-web-vitals` + TypeScript rules and must pass pre-PR.

## Coding Style & Naming Conventions
- Write TypeScript-first with 2-space indentation; components in PascalCase, hooks/utilities in camelCase.
- Prefer the `@/*` alias over deep relative paths and keep barrel exports in `views/` in sync.
- Tailwind CSS v4 drives styling; reuse tokens in `app/globals.css` and avoid ad-hoc inline styles.
- ESLint warns on `any`; extract shared types to `lib/` and prefer explicit return types for hooks.

## Testing Guidelines
- Automated testing is not yet configured; when adding tests, colocate files as `<component>.test.tsx` or create `__tests__/` folders near the subject.
- Document any new test script (e.g., `npm run test`) in `package.json` and wire it into CI when introduced.
- Until then, validate changes through `npm run dev`, capture screenshots or GIFs for UI flows, and describe manual steps in pull requests.

## Commit & Pull Request Guidelines
- Follow the Conventional Commit prefixes already in history (`feat:`, `fix:`, `chore:`) with subjects ≤72 characters and focused bodies.
- Pull requests should explain scope, reference issues, and include verification notes plus before/after visuals for UI-facing updates.
- Ensure lint and build succeed locally, call out new environment variables, and request design feedback when touching shared layouts.

## Environment & Security Notes
- Store secrets in a local `.env`; never commit it. Summarize required keys in the PR description so reviewers can reproduce.
- Use the `NEXT_PUBLIC_` prefix only for non-sensitive values and avoid logging credentials in browser tooling.
