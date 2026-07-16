# MyTube — a YouTube Clone

A YouTube clone built with **React 19**, **Redux Toolkit**, **React Router 7**, **Tailwind CSS**, and the **YouTube Data API v3**.

## Features

- **Home feed** — trending videos with loading skeletons and error states
- **Search** — debounced autocomplete suggestions (Redux-cached) + a full search-results page
- **Watch page** — embedded player, real video metadata (title, channel, views, likes, expandable description)
- **Comments** — real comments fetched from the YouTube API, with nested replies
- **Live chat simulation** — streaming messages with a capped Redux buffer, auto-scroll, and a composer to send your own messages
- **Production-ready plumbing** — route-level code splitting, error boundary, 404 page, aborted in-flight requests on unmount, SPA redirects for deployment

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure your API key
cp .env.example .env
# then edit .env and paste your YouTube Data API v3 key

# 3. Run the dev server
npm start
```

### Getting a YouTube API key

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create a project.
2. Enable **YouTube Data API v3** (APIs & Services → Library).
3. Create an **API key** (APIs & Services → Credentials).
4. **Restrict the key** to your domains (Credentials → your key → Application restrictions → *Websites*), e.g. `localhost:3000` and your production URL. Client-side keys are always visible in the browser — referrer restrictions are what keep them safe.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Dev server at http://localhost:3000 |
| `npm test` | Run the test suite |
| `npm run build` | Production build in `build/` |

## Deployment

This is a static single-page app — any static host works. `vercel.json` and `public/_redirects` are already included so client-side routes (`/watch`, `/results`) don't 404 on refresh.

### Vercel (recommended)

```bash
npm i -g vercel
vercel          # from the my-youtube/ directory, follow the prompts
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Either way, add the environment variable `REACT_APP_YOUTUBE_API_KEY` in Project Settings → Environment Variables, then redeploy.

### Netlify

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=build
```

Set `REACT_APP_YOUTUBE_API_KEY` under Site settings → Environment variables (build-time), since CRA inlines env vars at build time.

## Notes

- `REACT_APP_*` variables are **baked into the JS bundle at build time**. Changing them requires a rebuild/redeploy, and they are never secret — always use referrer-restricted keys.
- The search-suggestion endpoint (`suggestqueries.google.com`) doesn't send CORS headers, so it can't be called with `fetch()`. Suggestions are loaded via JSONP instead (`src/utils/jsonp.js`), which works in all browsers. If the endpoint is ever unreachable, the app degrades gracefully — search itself always works.
