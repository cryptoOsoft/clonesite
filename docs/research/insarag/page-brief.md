# INSARAG Guidelines homepage

Source: https://insarag-guidelines.netlify.app/
Local route: `/`
Files: `src/app/page.tsx`, `src/app/insarag.css`, `src/components/sites/insarag/*`, `public/sites/insarag/*`

## Section order

1. Sticky navbar (logo, Policy, Capacity, Operations, IEC/R, Coordination, References, theme toggle, search)
2. Hero with rescue photograph, white INSARAG logo, title, 2026–2030, Get Started and Glossary
3. Learn More About USAR Capacity (3 cards)
4. Explore USAR Operations (4 cards)
5. Volumes (5 PDF cards)
6. OCHA footer with social and legal links

## Measurements (1440px, light)

- Navbar 60px, white, logo 32×116.6, search input 200×32 at the right, theme button 32px
- Hero 640px tall, content inset 120px, logo 430px wide, title 58/800/-1px, buttons at y≈428
- Photo covers the right 56% and fades with a left mask; blue gradient sits over the left
- Sections share `#eef4ff`, container 1100px, cards gap 18px (volumes 14px)
- Footer gradient `#234d87` → `#1c3f70` with a 5px `#508adb` rule

## Breakpoints

- ≤996px: hamburger, single-column cards, hero title 44px, content inset 70px
- ≤700px: stacked footer
- ≤600px: hero title 36px, inset 24px, wave 70px
- ≤576px: search input width is 2rem; the used box stays 44×32 because the icon padding is still applied until the field is focused

## Interactions

- Desktop menus open on hover and keyboard focus
- Mobile drawer is 83vw; sections expand in place
- Theme cycles system → light → dark and follows `prefers-color-scheme` in system mode
- Search filters the guidelines page index and links to the source site. Ctrl/Cmd+K focuses it

## Assets

- `public/sites/insarag/insarag-logo.svg` ← `/img/insarag-logo-2.svg`
- `public/sites/insarag/ocha-logo.svg` ← `/img/ocha-logo-footer.svg`
- `public/sites/insarag/hero.jpg` ← `/assets/images/homepage-final-1300b178a5a649ece2e3033b939aa637.jpg` (1536×2048 JPEG)
- `public/sites/insarag/search-pages.json` ← titles and excerpts from `/search-index.json`

Guideline, glossary, legal, and volume links stay on the source origin. Only `/` is cloned.

Screenshots: `docs/research/insarag/screenshots/`.
