<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Deploy Workflow (Vercel)

- Project: `nbs-company-profile` (acidjps-projects) — production URL: https://nyibaharisteel.com
- Deploy flow: **dev first, then prod after approval**
  1. Work on `dev` branch, push changes
  2. Preview deploy: `vercel` (requires `VERCEL_TOKEN` env) → check preview URL
  3. After user approval: `vercel --prod` → live to production
- Auto-deploy via GitHub push is NOT active — repo has no Vercel GitHub App/webhook installed. Do not assume push to main auto-deploys.
