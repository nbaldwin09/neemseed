# NeemSeed

Botany research and seed vault. The seed science behind self-sufficient farming.

An Aorila company. Production domain: **neemseed.net**

This house has **its own Vercel project** (linked to this repository) and **its own Supabase project**. Do not reuse the Bullpen, NeemSeed, or Calabi database on another house.

## What this is

A botany research house and seed vault. Research programs, a named cultivar pipeline, and a public board — crop and note only, no inbox.

## 1. Create this house's Supabase project

1. New project named **neemseed** (a new project — not the other two houses).
2. SQL editor → paste and run `supabase/schema.sql`.
3. Settings → API: copy **Project URL** and **service_role** key.

## 2. This house's Vercel project

Import **this repository only** as a Vercel project (or reuse the one already linked). Framework: Vite. Build: `npm run build`. Output: `dist`.

Environment:

- `SUPABASE_URL` = this house's Project URL
- `SUPABASE_SERVICE_ROLE_KEY` = this house's service_role key

Custom domains: `neemseed.net` and `www.neemseed.net`

Remove leftover Firebase A records (199.36.158.100). In Vercel → this project → Domains, add `neemseed.net` and `www.neemseed.net`, then point DNS to the Vercel nameservers or the shown A/CNAME records.

Until Supabase env is set, the site still boots and keeps a process-local fallback.

## Local

```bash
npm install
npm run build && npm start
```

Sister houses (separate Vercel, separate Supabase):

- [bullpen-cession](https://github.com/nbaldwin09/bullpen-cession) — bullpencession.com
- [neemseed](https://github.com/nbaldwin09/neemseed) — neemseed.net
- [calabi-group](https://github.com/nbaldwin09/calabi-group) — calabigroup.com
