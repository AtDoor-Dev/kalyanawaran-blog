<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Codebase knowledge graph (graphify)

A knowledge graph of the whole matrimony workspace (frontend, backend, blog, tests) lives in `../graphify-out/`.
Before broad searching, run `graphify query "<question>"` from the parent `matrimony/` folder, or read `../graphify-out/GRAPH_REPORT.md`.
Full instructions: `../GRAPHIFY.md`.

## Pull requests: test every scenario, and show UI changes

Applies to every PR in kalyanawaran, kalyanawaran-bb, kalyanawaran-blog and kalyanawaran-test.

**Test all the scenarios before opening the PR.** Lint and a build are not enough.
- Run the change in the real app: local frontend `npm run start:local-dev` (port 3000) with the local backend `npm start` in kalyanawaran-bb (port 8080, uses the dev database). Log in with the test account in `kalyanawaran-test/.env` (lower environments only, mind the auth rate limit).
- Cover every page and component the change touches (shared components are used in more than one place: check every caller), the happy path, the error and empty states, plan tiers and feature flags that change the behaviour (free / Gold / Platinum, locked states), desktop and mobile width (390px), and English and Tamil when text changes.
- Run the existing specs that cover the area (kalyanawaran-test) and add one when it is missing (kalyanawaran-test/AGENTS.md §11).
- If a scenario cannot be tested (missing data, plan, environment), say so in the PR. Never call it tested.

**UI changes need screenshots and a description in the PR**, so the reviewer can understand and approve without running it:
- **Before / after screenshots** of every changed screen, desktop and mobile. Add the changed state too (modal open, success message, locked state).
- **Description:** what changed and why, where to see it (page, route, which plan or flag), and anything left unchanged on purpose.
- **Scenarios tested:** a table with each scenario and its result (pass / fail / not tested and why).
- Screenshots: capture them with Playwright against the local app. `gh` cannot attach images, so commit them to the `pr-assets` branch of the same repo under `pr-<number>/` and embed them as `https://github.com/AtDoor-Dev/<repo>/blob/pr-assets/pr-<number>/<file>.png?raw=true`. Pushing that branch is a push too: confirm first.

Pushing and opening the PR still need the user's explicit confirmation (never merge to main).
