# Quyana — Author Website (first draft)

Same stack as Mimi's site: Vite + React + TypeScript → deploy to Netlify, domain stays at Squarespace (quyana.org) and routes to Netlify. Author-forward design, black/white/red/pink palette with a pink "spotlight" motif echoing the book cover.

## Preview it

- **Quickest:** open `preview.html` in a browser — a faithful static snapshot (form is inert here).
- **Real thing:** `npm install` then `npm run dev`, open http://localhost:5173

## Images

Real photos are now in place (optimized for web). Full-res originals are preserved in `_source-images/` (not deployed).

- `public/headshot.jpg` → Quyana's headshot, used in the About section.
- `public/covers/not-just-a-trick-cover.jpg` → the real book (3D mockup) shown in the Books card on a white product-shot backdrop.
- `public/performance.jpg` → editorial performance photo, optimized and available but **not yet placed** (waiting on where Mimi wants it — hero, an about accent, etc.).
- `public/not-just-a-trick-promo.jpg` → the "Available at Amazon" promo banner, available if useful.

Still placeholders:

- `public/covers/love-death-high-heels.svg` → replace with the real cover when it arrives (the "coming soon" card).
- `public/og-image.svg` → export a 1200×630 **JPG/PNG** for social sharing (SVG og-images don't preview on most platforms), then update the two `og:image`/`twitter:image` URLs in `index.html`. The headshot or a book cover on the pink-spotlight background works well.

## Before launch

- **Formspree:** in `src/components/Contact.tsx`, replace `FORMSPREE_ID = 'YOUR_FORM_ID'` with the real ID (form set to notify **foxywitdafro@gmail.com**).
- Accounts (GitHub, Netlify, Formspree) created in Quyana's name — see the client checklist.
- **DNS:** point quyana.org from Squarespace to Netlify (retires the current Squarespace site).
- Verify in Google Search Console + submit `sitemap.xml`.

## Content notes

- Bio is drafted author-forward from her current site, dancer-to-author arc, PSO removed, Usher added — for her approval/edits.
- Instagram is the new @_quyana_ only; TikTok/YouTube carried over.
- Book blurb for *Not Just a Trick* is a draft — swap in her own jacket copy if she prefers.
