# URL Fix — Keep /terms-of-service and /privacy-policy working

CRITICAL: Do NOT delete or rename the existing `/terms-of-service` or `/privacy-policy` routes. These URLs are referenced in OAuth app approvals for Twitter, Instagram, Facebook, and Google My Business. Breaking them would invalidate those permissions.

## What to do:

### 1. Keep `/terms-of-service` exactly as-is
The existing `src/app/terms-of-service/page.tsx` must stay and continue working at `/terms-of-service`.

### 2. Add `/terms-and-conditions` as a duplicate route
Create `src/app/terms-and-conditions/page.tsx` that renders the exact same content as `/terms-of-service`. You can either:
- Import and re-export the same component from terms-of-service
- Or create a simple redirect: `redirect('/terms-of-service')`

### 3. Keep `/privacy-policy` exactly as-is
The existing `src/app/privacy-policy/page.tsx` must stay and continue working at `/privacy-policy`.

### 4. Add `/privacy` as a duplicate route
Create `src/app/privacy/page.tsx` that renders the exact same content as `/privacy-policy`. Same approach — import the component or redirect.

### 5. Update navigation links
- Footer and nav links should point to `/terms-and-conditions` and `/privacy` (the shorter URLs)
- But both old and new URLs must resolve correctly

## Summary of routes that must ALL work:
```
/terms-of-service       ← MUST KEEP (OAuth references)
/terms-and-conditions   ← ADD (matches current live site URL)
/privacy-policy         ← MUST KEEP (safe default)
/privacy                ← ADD (matches current live site URL)
```
