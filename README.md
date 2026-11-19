# Developer Portfolio

A fast, accessible, SEO-ready personal portfolio built with a modern stack and ready to deploy to Vercel in minutes.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · next-themes (dark mode) · Vercel Analytics · GitHub Actions CI

**Built in:** dark/light mode with no flash, scroll-spy navigation, reduced-motion support, skip link and keyboard focus styles, generated Open Graph image and favicon, `sitemap.xml`, `robots.txt`, JSON-LD structured data, security headers.

---

## Project layout

```
src/
  data/site.ts        <- ALL your content. The only file you must edit.
  app/                <- layout, page, SEO files (sitemap, robots, OG image, icon)
  components/         <- one component per section
  lib/                <- small helpers (class names, site URL, button styles)
scripts/check-content.mjs   <- fails if any placeholder is left in site.ts
public/                     <- put resume.pdf here
.github/workflows/ci.yml    <- lint + typecheck + build on every push/PR
```

---

## Step by step: from zip to live site

### Step 1. Install prerequisites (one time)

| Tool | Version | Check |
| --- | --- | --- |
| Node.js | 20.9 or newer (22 recommended) | `node -v` |
| Git | any recent | `git --version` |
| GitHub account | free | github.com |
| Vercel account | free "Hobby" plan, sign up with GitHub | vercel.com |

Install Node from https://nodejs.org (LTS). A code editor such as VS Code is recommended.

### Step 2. Install dependencies and run it locally

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000. You will see the site filled with `{{placeholder}}` text. `npm install` also creates `package-lock.json`; **keep it and commit it** (CI and Vercel use it for reproducible installs).

> If `npm install` or `npm run build` prints an error, copy the full message and send it back to me. This project was written without being able to run a build, so your first run is the real test.

### Step 3. Put in your real content

Open `src/data/site.ts`. Replace every `{{...}}` value. Save, and the browser updates instantly.

Content rules that matter for a FAANG-level audience:

1. **Quantify everything, honestly.** Use the XYZ formula: *"Accomplished X, as measured by Y, by doing Z."* Example: *"Cut p95 API latency from 480 ms to 120 ms by adding a Redis read-through cache."* Never invent a number. Every line must survive a follow-up question in an interview.
2. **Show 2 deep projects and 2 smaller ones.** Depth beats breadth. A deep project has a real design decision, a trade-off you can explain, and a measured result (load test, benchmark, accuracy, latency).
3. **Link a live demo and the source for each project.** Then make each GitHub repo recruiter-ready: a README with what it is, an architecture diagram, how to run it, trade-offs, and benchmarks; tests; and CI.
4. **List only skills you can discuss in depth.** No percentage bars. Group them like the template does.
5. **Keep it consistent with your resume.** Same titles, dates and numbers.
6. **Resume button:** save your resume as `public/resume.pdf`, then set `resumeUrl: "/resume.pdf"` in `site.ts`.
7. **Be realistic about its role.** A portfolio supports your application; it does not replace a strong one-page resume, referrals, and interview prep (data structures and algorithms, system design, behavioral stories). Do not spend weeks polishing it.

### Step 4. Verify before you publish

```bash
npm run check:content   # fails and lists every leftover placeholder
npm run lint            # code style / Next.js rules
npm run typecheck       # TypeScript
npm run build           # production build, same as Vercel runs
npm run start           # serve the production build at localhost:3000
```

All four must pass. Click through the site on desktop and on a phone-sized window, try dark mode, and use only the keyboard (Tab) once.

### Step 5. Push to GitHub

Create an **empty** repository at https://github.com/new (name it `portfolio`, no README, no .gitignore). Then:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-handle>/portfolio.git
git push -u origin main
```

(If you use the GitHub CLI: `gh repo create portfolio --public --source=. --push`.)

After the push, open the **Actions** tab. The CI workflow should go green.

### Step 6. Deploy on Vercel

1. Go to https://vercel.com/new and sign in with GitHub.
2. **Import** your `portfolio` repository.
3. Vercel detects **Next.js** automatically. Leave the defaults, except:
   - Open **Build and Output Settings**, turn on **Override** for *Build Command*, and enter:
     `npm run check:content && npm run build`
     This makes it impossible to deploy with placeholders left in.
4. Environment variables: none are required. (Set `NEXT_PUBLIC_SITE_URL` only after you attach a custom domain.)
5. Click **Deploy**. In about a minute you get a URL like `portfolio-xxxx.vercel.app`.

From now on, every push to `main` deploys to production, and every pull request gets its own preview URL.

### Step 7. (Optional, recommended) Custom domain

1. Buy a domain (for example `yourname.dev` from Cloudflare, Porkbun, Namecheap or Google Domains successors).
2. In Vercel: **Project, Settings, Domains, Add**. Enter your domain.
3. Vercel shows the exact DNS records to create. Add **exactly those** at your registrar (typically an `A` record for the root domain and a `CNAME` for `www`). Do not copy records from blog posts, since Vercel's values can change.
4. Wait for the "Valid Configuration" check mark (minutes to a few hours).
5. In **Settings, Environment Variables**, add `NEXT_PUBLIC_SITE_URL=https://yourdomain.dev` for Production, then redeploy. This fixes the canonical URL, sitemap and social preview image.

### Step 8. Post-launch checklist

- [ ] **Social preview:** paste your URL into https://www.opengraph.xyz and the LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/). Check the title, description and image.
- [ ] **Lighthouse:** in Chrome DevTools, run Lighthouse on mobile. Aim for 95+ in Performance, Accessibility, Best Practices and SEO. Fix anything below that.
- [ ] **Search Console:** add your site at https://search.google.com/search-console and submit `https://yourdomain.dev/sitemap.xml`.
- [ ] **Analytics:** in Vercel, open your project's **Analytics** tab and click Enable. (The code is already included.)
- [ ] **Link it everywhere:** GitHub profile (website field and profile README), LinkedIn (Contact info and Featured), resume header, email signature.
- [ ] **Pin your 4 best repos** on your GitHub profile, matching the projects on the site.
- [ ] **Re-read it in 2 weeks** with fresh eyes, and ask one friend or senior student to review it.

---

## Customizing

| I want to... | Do this |
| --- | --- |
| Change the accent color | Edit `--accent` (light) and `.dark --accent` in `src/app/globals.css` |
| Rename, add or remove a nav item | Edit `navLinks` in `src/data/site.ts` and add or remove the matching component in `src/app/page.tsx` |
| Hide a section | Remove its component from `src/app/page.tsx` and its entry from `navLinks` |
| Add a project | Add an object to `projects` in `site.ts` (set `featured: true` for a full-width card) |
| Change fonts | Edit the two `next/font/google` imports in `src/app/layout.tsx` |

### Good upgrades once the basics are live

- A `/blog` with MDX: write up one project's design decisions and trade-offs. Strong signal for senior reviewers.
- A contact form with a Next.js route handler and Resend (adds a real backend to the site).
- Playwright smoke test and an axe accessibility test in CI.
- Per-project case-study pages at `/projects/<slug>`.

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `npm run check:content` fails | Working as intended: it lists every `{{placeholder}}` still in `site.ts` |
| `npm warn deprecated eslint@8...` | Harmless warning. ESLint 8 is pinned for compatibility with `next lint` |
| `next lint` prints a deprecation notice | Harmless on Next 15. Migrating to the ESLint CLI is optional |
| Build fails on fonts | The build needs internet access to download Google Fonts (Vercel and GitHub Actions have it) |
| Resume button missing | `resumeUrl` is empty in `site.ts` |
| Resume link 404s | The file must be at `public/resume.pdf` (lowercase, exact name) |
| Wrong preview image or URL after adding a domain | Set `NEXT_PUBLIC_SITE_URL` and redeploy; social sites cache old previews, so use their debugger to re-scrape |
| Vercel build fails with a placeholder error | Replace the placeholders, or temporarily set the Build Command back to `npm run build` |

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Next.js + TypeScript ESLint rules |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:content` | Fails if placeholders remain in `site.ts` |
