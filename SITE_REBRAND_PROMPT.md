# Full Deck Agency — Site Rebrand Prompt for Claude Code

## IMPORTANT: Paste this entire prompt into Claude Code to rebrand the Phase 1 scaffold to match the real fulldeckagency.com site.

---

## OVERVIEW
Rebrand and restructure the existing Next.js scaffold to match the current fulldeckagency.com website. The site uses a **playing card / deck of cards metaphor** throughout — each service is represented as a playing card (diamonds suit). The design uses a dark/red/white color scheme, not the navy/orange we currently have.

---

## BRAND IDENTITY

### Colors
```
Primary Red: #c0392b (dark red — used for headlines, CTAs, accents, underlines)
Darker Red: #a93226 (hover states)
Black/Dark: #1a1a1a (header background, dark sections)
Dark Gray: #333333 (body text)
Light Gray: #f5f5f5 (section backgrounds)
White: #ffffff (card backgrounds, text on dark)
```

### Typography
- Headings use a serif/slab style font — bold, slightly vintage feel
- "Full Deck Agency" in the logo uses a bold condensed style
- Body text is clean sans-serif

### Logo
- The logo features **fanned playing cards** (red and dark brown) with "FULL DECK" in bold white condensed text
- Logo files are in: `Company FD/Logo/`
- Use: `Full Deck Agency Wide Logo.png` for the header
- Use: `Full Deck PNG logo.png` for favicon/square uses
- Copy the logo files into the project's `public/images/` directory

### Playing Card Service Icons
Each service is represented as a playing card with diamond suits. The card images are in `Company FD/Cards of Services/`:
- `SEO Card.png` — King of Diamonds, "SPECIALIZED SEO"
- `Website Development Card.png` — Ace of Diamonds, "Premium WEBSITE Development"
- `Social Media Card.png` — Queen of Diamonds, "Targeted Social Media Marketing"
- `Lead Card.png` — Jack of Diamonds, "Qualified LEAD Generation"

Copy these into `public/images/cards/`

### Tagline
"Is your company working with a full deck?"

### 404 Page Copy
"Uh oh! Looks like you fell of the deck! Click the button below to get back on" — with "Return to Homepage" button

---

## URL STRUCTURE (MUST PRESERVE EXACTLY)

These are the existing page URLs. The new site MUST have these exact same slugs:

### Main Pages
```
/                           → Homepage
/about                      → About page
/services                   → Services overview (if it exists)
/blog                       → Blog listing
/case-studies               → Case studies
/contact-us                 → Contact page (NOTE: currently /contact in our build — MUST change to /contact-us)
/privacy                    → Privacy policy (NOTE: currently /privacy-policy — MUST add /privacy route BUT ALSO keep /privacy-policy as a redirect to /privacy)
/terms-and-conditions       → Terms page (NOTE: currently /terms-of-service — MUST keep /terms-of-service working AND add /terms-and-conditions that serves the same content. BOTH URLs must work because /terms-of-service is referenced in OAuth app approvals for Twitter, IG, FB, GMB etc.)
/schedule                   → Scheduling page (Calendly or similar embed)
/my-clients                 → Client portal/list
```

### Service Pages (TOP-LEVEL slugs, NOT under /services/)
```
/seo                        → SEO services
/google-ads                 → Google Ads / PPC
/facebook-ads               → Facebook Ads
/facebook-ad-services       → Facebook Ad Services (may redirect to /facebook-ads)
/listings                   → Local Listings management
/social-posting             → Social media posting
/content                    → Content marketing
/sky-ruler                  → Sky Ruler product page
/websites                   → Website development service
```

### Who We Help Pages
```
/dak-construction           → Client showcase: DAK Construction
/lounsbury-bot              → Client showcase: Lounsbury
```

### Other Pages
```
/landing-page               → Landing page
/free-audit-and-analysis    → Free audit offer page
```

### External
```
app.fulldeckagency.com      → Client Login (DashClicks dashboard — link only)
social.fulldeckagency.com   → Full Deck Social app
```

### CRITICAL URL CHANGES NEEDED IN OUR BUILD:
1. Rename `/contact` → `/contact-us`
2. Add `/privacy` route that serves the same content as `/privacy-policy` (keep BOTH working)
3. Add `/terms-and-conditions` route that serves the same content as `/terms-of-service` (keep BOTH working — /terms-of-service is referenced in OAuth app approvals and MUST NOT break)
4. Move service pages from `/services/[slug]` to top-level: `/seo`, `/google-ads`, `/facebook-ads`, `/listings`, `/social-posting`, `/content`, `/websites`, `/sky-ruler`
5. Add `/schedule` page
6. Add `/my-clients` page
7. Add `/free-audit-and-analysis` page
8. Add `/landing-page` page

---

## NAVIGATION STRUCTURE

### Header (sticky, dark background)
Logo (left) → Nav Links → "Client Login" button (red, right)

**Nav Items:**
- Home
- Who We Help (dropdown):
  - Deck & Home Builders
  - Home Services
  - My Clients
- Services (dropdown):
  - SEO
  - Google Ads
  - Facebook Ads
  - Listings
  - Social Posting
  - Content
  - Sky Ruler
  - Websites
- About
- Blog
- Case Studies
- Contact Us (dropdown):
  - Schedule

### Footer (dark background)
4-column layout:
1. **Column 1**: Logo + description + Business Hours (Mon-Fri 9-5, Sat-Sun Closed) + Social icons (Facebook, Instagram, LinkedIn) + Copyright
2. **GET IN TOUCH**: info@fulldeckagency.com, 435 Merchant Walk Square, 300-570, Charlottesville, VA 22902, US + Privacy Policy link + Terms and Conditions link
3. **Navigation**: Home, Who We Help, Services, About, Blog, Case Studies, Client Login, Contact Us, Schedule
4. **STAY CONNECTED**: Newsletter email signup form + Submit button

---

## HOMEPAGE SECTIONS (in order)

### 1. Hero
- Full-width background image (deck/outdoor dining scene)
- White card overlay on left side with:
  - Headline: "Your **Digital & Print Marketing** Solution" (red text for emphasized words)
  - Body: "We are a team of dedicated professionals providing cutting-edge search engine marketing solutions and more for your home services, construction and decking company. You'll finally be working with a **full deck** while your competition is not."
  - Two buttons: "Contact Now" (dark/black) and "Learn More" (red)

### 2. Services Cards Section
- Heading: "Join the Online Conversation with Our Digital Marketing Services"
- Red underline divider
- Row of 4 playing card images: Website Development (Ace), SEO (King), Social Media (Queen), Lead Generation (Jack)
- Cards should look like actual playing cards with the diamond suit

### 3. Meet Full Deck Agency
- Two-column: Image left (conference room), content card right
- Heading: "Meet **Full Deck Agency** - Experts Focused on **Your Success.**" (red text for "Full Deck Agency" and "Your Success.")
- Body text about the agency story
- "Read More" button (red)

### 4. Bringing Action to Brands
- Heading: "**Bringing Action To Brands**" (red, serif)
- Subheading: "Advertise and Grow Your Home Services Business with Our Help"
- Body text about comprehensive services
- Row of 3 stock images below (social media, analytics, business)
- Below that: service feature blocks with icons:
  - SEO — "Ultimate online visibility..." + "View More"
  - Google Ads — "Direct your target demographic..." + "View More"
  - Facebook Ads — "Begin generating leads..." + "View More"
  - Listings — "Get your business info..." + "View More"
  - Social Posting — "Where there's a phone..." + "View More"

### 5. Benefits Section
- Light gray background
- Heading: "Benefits of Working with Full Deck Agency"
- Subtext: "With our platform, you'll save time when YOU most need it, while serving your customers when THEY need you the most."
- Image left (bar chart/growth graphic)
- 4 benefit cards right (2x2 grid) with circle icons:
  - "Get Your Projects Completed On Time"
  - "Drive Your Conversion Rates"
  - "Real-Time Analytics"
  - "Professional Management"

### 6. Contact Section
- Two-column: Text left, form right
- Left: "Get in Touch with Full Deck Agency" + red underline + "There's never any obligation..."
- Right: "Request a Free Consultation" form with fields:
  - First Name*, Last Name*
  - Phone*, Business Email*
  - Current Website, What Industry Are You In?*
  - Tell Us About Your Needs (textarea)
  - "GET IN TOUCH" button (red)

### 7. Footer

---

## SERVICE PAGE TEMPLATE (same layout for all service pages)

Each service page follows this pattern (based on /seo):

1. **Hero**: Full-width background image + white card overlay with service name + tagline + "Schedule Your Call" red button
2. **Main Description**: Bold serif heading + descriptive paragraphs
3. **Feature Icons Row**: 4 icons with labels (e.g., "Get on Google's 1st Page", "Top Rankings", "Keyword Rank Reporting", "Imperative KPIs")
4. **Alternating Content Sections**: Each has a bold heading, description paragraph, and "Schedule Your Call" button
5. **Contact Form Section**: Same as homepage contact section

---

## ABOUT PAGE STRUCTURE

1. **Hero**: Sunset/nature background image + white card with "About" heading
2. **About Section**: "About **Full Deck Agency**" (red text) + Gabe's origin story paragraph + "Now, is your company working with a full deck?"
3. **Personalized Marketing**: Two-column (image left, text right) — "Personalized Marketing Plans for premium **Home Service, Ecommerce, Professionals & More.**" (red text)
4. **Stats Bar**: Dark background with 4 stats: "100+ Clients", "4 States Served", "7 Expert Marketers", "27+ Years of Shared Experience"
5. **Jump-Start Section**: "Jump-Start Your Marketing Efforts" + "It's Time to Revolutionize Your Business Strategy" + numbered value props (1-4)

---

## DESIGN PATTERNS

### Section Dividers
- Red horizontal line/bar used as divider under section headings

### Cards/Overlays
- White card overlays on hero images (slightly transparent or solid white, rounded)
- Service cards with subtle shadow

### Buttons
- Primary: Red background (#c0392b), white text, rounded
- Secondary: Dark/black background, white text, rounded
- All buttons have hover darkening effect

### Hero Images
- Full-width, dark overlay for text readability
- White card overlay positioned center or left for content

### Chat Widget
- Small playing card deck icon in bottom-right corner (chat/support widget)

---

## IMPLEMENTATION STEPS

1. Update Tailwind config with the new color scheme (reds, darks, grays)
2. Copy logo and card images from `../../Company FD/Logo/` and `../../Company FD/Cards of Services/` into `public/images/`
3. Rename routes: /contact→/contact-us, /privacy-policy→/privacy, /terms-of-service→/terms-and-conditions
4. Restructure service pages from /services/[slug] to top-level routes
5. Update Header component: dark background, new nav structure with dropdowns, red "Client Login" button
6. Update Footer component: dark background, 4-column layout, newsletter signup
7. Rebuild Homepage with all sections matching the design above
8. Rebuild About page matching the design above
9. Build service page template matching the SEO page design
10. Update Contact form fields to match (First Name, Last Name, Phone, Business Email, Current Website, Industry, Needs)
11. Add /schedule, /my-clients, /free-audit-and-analysis, /landing-page pages
12. Create 404 page with "fell off the deck" messaging
13. Update all meta descriptions and page titles to match current site
