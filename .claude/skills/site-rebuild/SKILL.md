---
name: site-rebuild
description: |
  Automated website rebuild from DashClicks/Duda (or any existing site) to a custom Next.js project deployed on Vercel. Use this skill whenever the user wants to rebuild, recreate, migrate, or clone an existing website into Next.js. Also trigger when the user mentions a domain name and says things like "rebuild this site", "recreate this", "migrate this to Next.js", "code this from scratch", or "move this off DashClicks/Duda". This skill handles the entire process end-to-end: scraping the existing site, documenting all URLs and content, scaffolding the Next.js project, building every page to match the original design, setting up contact forms with Supabase + Resend, configuring SEO, and preparing for Vercel deployment. The user should be able to paste a single domain name and walk away.
---

# Site Rebuild Skill

You are rebuilding an existing website as a custom Next.js application. The goal is to produce a fully functional site that matches the original's design, content, and URL structure — ready to deploy on Vercel with Cloudflare DNS.

The owner of these sites is Gabe Andersen (gabe@fulldeckagency.com), founder of Full Deck Agency. He manages multiple client websites and is migrating them off DashClicks/Duda. He is not a developer — he uses AI-assisted development. Be thorough and give complete file contents, never partial snippets.

## The Process

Work through these phases in order. Complete each phase fully before moving to the next. Do not ask for confirmation between phases — just keep going.

---

### Phase 1: Scrape & Document the Existing Site

This is the most important phase. Everything else depends on getting this right.

1. **Extract every URL** from the site:
   - Check the main navigation (including all dropdowns)
   - Check the footer links
   - Try fetching `/sitemap.xml`
   - Use JavaScript to extract all internal `<a href>` links on the homepage
   - Visit each discovered page and extract links from those too
   - Record external links (social media, third-party portals)

2. **For each page**, capture:
   - Full URL path (this is the slug you must preserve)
   - Page title (from `<title>` tag)
   - Meta description
   - All visible text content (headings, paragraphs, button text)
   - Section structure (what sections appear and in what order)
   - Images used (note what they show for alt text, even if you can't download them)
   - Any forms (field names, required fields, submit button text)
   - Any special features (accordions, carousels, tabs, maps, embedded videos)

3. **Capture the design system**:
   - Extract colors from CSS (background colors, text colors, accent colors, button colors)
   - Note fonts (check Google Fonts links or CSS font-family declarations)
   - Header style (sticky? transparent? dark? light?)
   - Footer layout (how many columns, what's in each)
   - Button styles (colors, border-radius, hover effects)
   - Card styles (shadows, borders, rounded corners)
   - Section patterns (alternating backgrounds, full-width vs contained)

4. **Save everything** to `SITE_MAP.md` in the project root. This document is your single source of truth for the entire build. Include:
   - Complete URL list with page titles
   - Navigation structure (header nav with dropdowns, footer nav)
   - Page-by-page content documentation
   - Design system notes
   - Contact information found on the site
   - Any forms and their fields

---

### Phase 2: Scaffold the Project

```bash
npx create-next-app@latest [project-name] --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Install dependencies:
```bash
npm install @supabase/supabase-js @supabase/ssr framer-motion resend lucide-react react-hook-form @hookform/resolvers zod next-sitemap
```

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://mtxxmjvrltcthbvfkdwq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[get from user or existing project]
SUPABASE_SERVICE_ROLE_KEY=[get from user or existing project]
RESEND_API_KEY=[get from user or existing project]
NEXT_PUBLIC_SITE_URL=https://[domain]
CONTACT_EMAIL=gabe@fulldeckagency.com
```

Create `CLAUDE.md` in the project root:
```markdown
# CLAUDE.md

## Project Type
Next.js website rebuild from DashClicks/Duda.

## Critical Rules
1. NEVER break existing page URLs — every slug from the original site must work.
2. If a URL must be moved, keep the old one working via redirect or duplicate route.
3. /terms-of-service and /privacy-policy are referenced in OAuth app approvals — never remove them.
4. Always give complete file contents — no partial snippets.
5. Use Next.js Image component for all images.
6. Every page needs unique title, meta description, Open Graph tags, canonical URL.
7. Mobile responsive at 375px, 768px, 1024px, 1440px.
8. Contact forms POST to /api/contact → Supabase leads table + Resend email.

## Owner
Gabe Andersen — Full Deck Agency
gabe@fulldeckagency.com
```

---

### Phase 3: Create All Routes

Create a route directory under `src/app/` for EVERY page URL found in Phase 1.

**Use the exact same slug structure as the original site.** This is critical for SEO. If the original has `/seo` as a top-level page, create `src/app/seo/page.tsx` — do not reorganize it under `/services/seo`.

For each route, create a `page.tsx` with:
- `generateMetadata()` returning the original page's title and meta description
- The page component with placeholder content (will be filled in Phase 5)

Also create:
- `src/app/not-found.tsx` — Custom 404 page
- `src/app/api/contact/route.ts` — Contact form API endpoint

---

### Phase 4: Build the Layout

Based on the design captured in Phase 1:

**Header** (`src/components/layout/Header.tsx`):
- Match the original header exactly: logo placement, nav items, dropdown structure, CTA button
- Make it sticky if the original is sticky
- Match the color scheme (dark header = dark bg, light header = light bg)
- Mobile hamburger menu with the same navigation structure
- Use Framer Motion for mobile menu animation

**Footer** (`src/components/layout/Footer.tsx`):
- Match the original footer column layout
- Include all the same links, contact info, social icons
- Newsletter signup if the original has one
- Copyright with dynamic year

**Root Layout** (`src/app/layout.tsx`):
- Import the correct Google Font (match the original)
- Set up metadata defaults
- Include Header and Footer

---

### Phase 5: Build Every Page

Work through each page from the SITE_MAP.md. For each page:

1. Recreate the section structure from top to bottom
2. Use the actual text content captured in Phase 1
3. Match the visual style: colors, spacing, typography, layout
4. For images: use Next.js Image with descriptive alt text noting what image belongs there. Use placeholder backgrounds (gradient or solid color matching the design) until real images are provided.
5. For forms: create fully functional forms using react-hook-form + zod validation
6. Add scroll animations with Framer Motion where the original has them

**Contact Form Implementation:**
- Fields should match exactly what the original site has
- POST to `/api/contact`
- API route: validate with zod, save to Supabase `leads` table with `source: "[domain]"`, send email via Resend to gabe@fulldeckagency.com
- Show success/error states
- Include honeypot spam prevention

**Priority order:** Build the homepage first (it's the most complex), then the contact page, then service/about pages, then remaining pages.

---

### Phase 6: SEO & Meta

1. **generateMetadata** on every page with:
   - Title matching the original (or improved if the original was poor)
   - Meta description
   - Open Graph title, description, image
   - Twitter card
   - Canonical URL

2. **Structured Data** (JSON-LD):
   - Homepage: LocalBusiness schema with real business info
   - Service pages: Service schema
   - Blog posts: Article schema (if blog exists)
   - FAQ sections: FAQPage schema

3. **next-sitemap.config.js**:
   - Include all public pages
   - Exclude /admin, /api routes
   - Set appropriate changefreq and priority

4. **robots.txt**:
   - Allow all
   - Disallow /admin, /api
   - Reference sitemap

---

### Phase 7: Verify & Ship

1. Run `npm run build` — fix ALL errors
2. Cross-reference SITE_MAP.md against `src/app/` to verify every original URL has a route
3. Test contact form submission
4. Check mobile responsiveness
5. List any placeholder images that need real replacements
6. Report what's done and what the user needs to do next (Vercel deploy, DNS, image replacement)

---

## Shared Infrastructure Notes

Gabe's Supabase projects are organized as follows:

| Project | Purpose | Used By |
|---------|---------|---------|
| **full-deck** | Agency tools & agency website | fulldeckagency.com, social.fulldeckagency.com |
| **full-deck-clients** | All client websites | apexdeckscompany.com, lounsburyroofing.net, etc. |
| **Product-specific** | Standalone SaaS products | readysetplans.com, communityripple.com |

**For client site rebuilds**, use the **full-deck-clients** Supabase project. Contact form submissions go into a shared `leads` table with a `source` field to identify which site the lead came from.

**For fulldeckagency.com itself**, use the **full-deck** Supabase project.

Ask the user which Supabase project to use if unclear, or check the `.env.local` if one already exists.

The leads table schema (create this in the client project if it doesn't exist):
```sql
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  source TEXT DEFAULT 'contact_form',
  status TEXT DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Common Patterns Across Gabe's Sites

- Most client sites are home service businesses (deck builders, roofers, landscapers, etc.)
- Most have: homepage, about, services (sometimes individual service pages), contact, privacy, terms
- Contact forms typically have: name, email, phone, message, sometimes industry or service dropdown
- Headers are usually sticky with a dark or branded background
- Footers typically have 3-4 columns: company info, contact details, navigation, social/newsletter
- Red accent buttons are common across the Full Deck Agency brand family

---

## What NOT to Do

- Don't reorganize URLs. If the original has `/seo`, don't put it at `/services/seo`.
- Don't skip pages. Every URL on the original site needs a route.
- Don't use placeholder text for content that was captured. Use the real text.
- Don't ask the user "should I continue?" between phases. Just keep building.
- Don't give partial code. Always give complete file contents.
- Don't delete `/terms-of-service` or `/privacy-policy` — these are referenced in OAuth app approvals.
