# A Touch Above Holistic Health — website

Static site for A Touch Above Holistic Health (Owasso, OK), built by Big Mammoth Media.
This is the final, fully built version of what's live at https://a-touch-above-holistic-health.vercel.app

## Pages
- `index.html` — home
- `services.html` — all services with booking links
- `functional-medicine.html`, `oncology.html`, `pemf.html` — service detail pages
- `team.html` — Our Team (includes Tara's video)
- `faq.html`, `privacy-policy.html`

## Files
- `main.js` — shared header, footer, icons and interactions (loaded on every page)
- `styles.css` → `v3.css` → `v4.css` → `v5.css` — base styles, then layered updates (v5 = lavender/sage palette)
- `img/` — headshots, certification badges, review QR code

## Deploying
No build step. On Vercel, import this repo with framework "Other" and no build command; `vercel.json` enables clean URLs (`/team` instead of `/team.html`).

## Still loaded from the old WordPress site (atouchabovehhc.com)
Move these into `img/` before WordPress is shut down:
- Header logo and footer logo (referenced in `main.js`)
- Massage photo in the home page hero (`index.html`)
- Tara's video (`team.html`)
