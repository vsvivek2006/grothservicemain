# Emergency Rollback Runbook (Vite Fallback)

This runbook outlines the exact, verified steps to roll back from Next.js App Router to the legacy Vite + React Router build in **under 60 seconds** should any unexpected regression arise in production.

---

## Instant Revert Steps

### Option A: Via Git Revert / Branch Checkout (Recommended)
1. In Vercel or Git repository, point production back to commit `b9af475` (the last commit before migration branch) or deploy `main`:
   ```bash
   git checkout main
   # Trigger production redeploy
   ```

### Option B: Immediate In-Tree Vite Revert
1. In `package.json`, restore primary build to Vite:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview"
   }
   ```
2. In `vercel.json`, re-enable SPA rewrite before the closing bracket:
   ```json
     "rewrites": [
       {
         "source": "/((?!assets/|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
         "destination": "/index.html"
       }
     ]
   ```
3. Commit and push:
   ```bash
   git add package.json vercel.json
   git commit -m "revert: rollback production build to Vite"
   git push origin main
   ```

---

## Local Verification Commands

To verify that the Vite build is operational at any time:
```bash
# Build the Vite application (outputs to dist/)
npm run build:vite

# Preview the Vite application
npm run preview:vite
```
The entire Vite router, view layer, and asset pipeline are intact in the codebase.
