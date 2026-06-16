# Claude Code — Static Website Builder Workflow

> A reusable prompt workflow for Claude Code to analyze an existing website, propose a site structure, align with the user, and then build the complete site using provided design tokens.

---

## How to Use This Document

1. **Start a new Claude Code session** in an empty project directory
2. **Paste Phase 1** into the chat along with links/files of the existing website
3. **Review** the proposed site map and page templates Claude generates
4. **Paste Phase 2** with your design tokens (colors, fonts, spacing, etc.)
5. **Approve** the plan, then Claude builds the site phase by phase
6. **Paste Phase 3** — SEO, performance, and meta setup
7. **Paste Phase 4** — Image optimization and hosting
8. **Paste Phase 5** — Mobile responsiveness pass
9. **Paste Phase 6** — Clean URLs and deployment prep
10. **Iterate** — review each batch of pages, request changes, continue

---

## Phase 1 — Site Audit & Structure Proposal

Paste this prompt along with the existing website URL or HTML files:

```
I want you to rebuild a website as a static HTML/CSS/JS site. No frameworks — just vanilla code.

Here is the current website: [PASTE URL OR ATTACH FILES]

### Step 1: Audit the Existing Site

Crawl/read every page and produce a report covering:

1. **Page inventory** — list every unique page with its URL/path and purpose
2. **Content inventory** — for each page, list every section in order (hero, features, testimonials, CTA, etc.) with a one-line description of its content
3. **Navigation structure** — header links, dropdowns, footer links, breadcrumbs
4. **Reusable components** — identify shared patterns (cards, buttons, forms, modals, hero variants, stat bars, etc.)
5. **Media assets** — list images, videos, icons used and where they appear
6. **Interactive features** — forms, filters, carousels, accordions, modals, animations
7. **SEO & meta** — title tags, descriptions, OG tags, structured data, canonical tags
8. **External dependencies** — fonts, CDNs, APIs, analytics, forms backends
9. **Contact/business info** — company name, legal name, address, phone, hours (needed for SEO schemas and footer)

### Step 2: Propose New Site Structure

Based on the audit, propose:

1. **Directory structure** — folder hierarchy for all pages, assets, CSS, JS
2. **Page templates** — define each unique template type (e.g., "Service Detail", "Product Category", "Product Detail") and list the sections each contains in order
3. **Shared components** — list every reusable component with its variants
4. **Navigation map** — header nav items (with dropdown contents), mobile menu items, footer layout
5. **Responsive strategy** — breakpoints, mobile behavior for each component type
6. **Data attributes plan** — for filterable pages, define what data attributes each card needs and what values they should have (each card MUST have different/accurate attribute values — never duplicate identical attributes across all cards)

Present this as a structured document. DO NOT start building yet — wait for my approval and design tokens.
```

### What to Expect

Claude will produce a detailed audit and a proposed site structure. Review it carefully:

- Are all pages accounted for?
- Does the section ordering make sense?
- Are there components missing or unnecessary?
- Is the navigation correct?
- Do filterable pages have differentiated data attributes per card?

Request changes until you're satisfied, then move to Phase 2.

---

## Phase 2 — Design Tokens & Build Kickoff

Once the structure is approved, paste this prompt with your design tokens:

```
The site structure is approved. Here are my design tokens. Use these EXACTLY — do not invent new colors, fonts, or spacing values.

### Design Tokens

```css
:root {
  /* === COLORS === */
  --primary: #______;         /* Brand primary — used on buttons, links, accents */
  --primary-dark: #______;    /* Primary hover/active state */
  --secondary: #______;       /* Light tint of primary for backgrounds */
  --accent: #______;          /* Accent color (can match primary or be different) */
  --bg: #______;              /* Page background */
  --surface: #______;         /* Card/panel background */
  --text: #______;            /* Primary text — headings, labels */
  --text-secondary: #______;  /* Body text, descriptions */
  --text-muted: #______;      /* Captions, labels, placeholders */
  --border: #______;          /* Borders, dividers */
  --dark: #______;            /* Dark section backgrounds (heroes, CTAs, footers) */
  --dark-mid: #______;        /* Dark section cards/accents */

  /* === BORDER RADIUS === */
  --radius-sm: ___px;
  --radius-md: ___px;
  --radius-lg: ___px;

  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,.08);
  --shadow-lg: 0 8px 30px rgba(0,0,0,.12);
}
```

### Typography

- **Font Family:** [Font Name] from Google Fonts
- **Weights needed:** [e.g., 300, 400, 500, 600, 700, 800]
- **Headings:** weight ___, letter-spacing ___em, line-height ___
- **Body:** line-height ___, -webkit-font-smoothing: antialiased

### Layout

- **Container max-width:** ____px
- **Container padding:** mobile ___px, tablet ___px, desktop ___px
- **Section vertical padding:** default ___px, small ___px, large ___px
- **Breakpoints:** sm ___px, md ___px, lg ___px

### Buttons

- **Primary:** background var(--primary), text color [#fff or var(--dark) depending on contrast], hover translateY(-1px) + shadow
- **Dark:** background var(--dark), text white
- **Outline:** transparent bg, white border (for dark sections)
- **Outline Dark:** transparent bg, dark border (for light sections)
- **Sizes:** sm (padding ___ ___), default (padding ___ ___), lg (padding ___ ___)

### Hero Overlay

- **Gradient:** linear-gradient(135deg, rgba([dark-rgb], 0.7), rgba([dark-rgb], 0.45))
- Use the --dark color's RGB values so the overlay matches the palette
- The overlay should be translucent enough that background images/videos remain visible

### Build Instructions

1. **Create ONE CSS file** (`css/styles.css`) with the complete design system: reset, variables, utilities, and all components
2. **Create ONE JS file** (`js/main.js`) that:
   - Renders the shared header and footer via `renderHeader()` and `renderFooter()` functions injected into `#site-header` and `#site-footer` divs
   - Uses a `getBasePath()` function to resolve relative paths based on directory depth, so links work from any nested page
   - Handles all interactive features: mobile menu toggle, modals, accordions, filters, carousels
   - Keyboard support: ESC key should close ALL overlays (modals, mobile menu, bottom sheets)
3. **Each HTML page** should only contain:
   - `<head>` with meta, title, font link, CSS link
   - `<body>` with `<div id="site-header"></div>`, main content sections, `<div id="site-footer"></div>`, JS script tag
4. **Images:** Use placeholder paths in `images/` directory — I will replace with real assets later
5. **Utility classes to define upfront:**
   - `.hero-btn-group` — flex row with wrap, collapses to stacked full-width column on mobile
   - `.grid-tech` or similar layout classes instead of inline styles — these can be overridden at mobile breakpoints
   - `.nav-dropdown-wide` — for wider dropdown menus, collapses to auto width on mobile
6. **NEVER use inline styles for layout that needs to change on mobile** (grid-template-columns, flex-direction, etc.) — always use a CSS class so the mobile breakpoint can override it
7. **Data attributes on filterable cards:** Each product/item card MUST have accurate, differentiated `data-*` attribute values. Never copy-paste identical attributes across all cards — the filter logic compares these values, so identical values make filters useless

### Build Order

Build in this order, waiting for my approval after each batch:

**Batch 1: Foundation**
- css/styles.css (complete design system including mobile breakpoint block)
- js/main.js (header, footer, mobile menu, quote modal, filter logic, all utilities)
- index.html (homepage)

**Batch 2: Core Pages**
- about.html
- contact.html (with contact form + info cards)

**Batch 3: Product/Service Category Pages**
- [List your category index pages]

**Batch 4: Detail Pages**
- [List your detail pages]

Start with Batch 1 now.
```

---

## Phase 3 — SEO, Performance & Meta Setup

After the initial build is done and approved, paste this:

```
Now add comprehensive SEO and performance optimizations to the entire site.

### On Every Page

1. **Title tags** — unique, descriptive, under 60 characters, brand name at end: "[Page Topic] | [Brand Name]"
2. **Meta description** — unique per page, 120-155 characters, includes primary keyword and a call to action
3. **Canonical tags** — `<link rel="canonical" href="https://[DOMAIN]/[path]/">` on every page
4. **Favicon** — `<link rel="icon" href="/favicon.ico">` and `<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">`

### Structured Data (JSON-LD)

Add to each page in `<head>` as `<script type="application/ld+json">`:

1. **Organization schema** — inject via JS on every page (name, legalName, url, logo, address, telephone, foundingDate)
2. **BreadcrumbList schema** — on every page except homepage, with proper hierarchy
3. **Product schema** — on product detail pages (name, description, image, brand, manufacturer)
4. **Service schema** — on service pages (name, description, provider, areaServed)
5. **FAQPage schema** — on any page with FAQ accordion

### Image Performance

1. **Add `loading="lazy"`** to all `<img>` tags except the first visible image on each page (hero images)
2. **Add `alt` text** to every image — descriptive, includes keywords where natural
3. **Defer video loading** — if any page has a `<video>`, use `data-src` instead of `<source src>` and load via JS after page load

### Site-Level Files

Create these files in the project root:

1. **`robots.txt`**:
```
User-agent: *
Allow: /
Sitemap: https://[DOMAIN]/sitemap.xml
```

2. **`sitemap.xml`** — list all pages with `<lastmod>` dates, `<changefreq>`, and `<priority>` values. Homepage gets 1.0, category pages 0.8, detail pages 0.6

3. **`404.html`** — custom 404 page matching site design, with links back to homepage and key sections

### NAP Consistency

Ensure the company name, address, and phone number appear identically in:
- Header (phone)
- Footer (full NAP)
- Contact page
- Organization schema
- Every page CTA

Use this exact format:
- Name: [COMPANY NAME]
- Address: [STREET], [CITY], [STATE] [ZIP]
- Phone: [FORMATTED PHONE]
```

---

## Phase 4 — Image Optimization & Hosting

```
Now optimize all images for the site.

### Image Conversion

1. Convert all images to WebP format for better compression
2. Keep filenames descriptive and kebab-case: `custom-connector-pins.webp`, not `IMG_1234.webp`
3. Organize into directories: `images/products/`, `images/factory/`, `images/team/`, etc.

### Image Hosting (if using GitHub)

If hosting images on GitHub:
1. Create a GitHub repo for the project
2. Push all images to the repo
3. Replace all local image `src` attributes with raw GitHub URLs:
   `https://raw.githubusercontent.com/[USERNAME]/[REPO]/master/images/[path]`
4. Update both HTML `<img>` tags and CSS `background-image` URLs
5. Update the logo URL in the JS header/footer rendering functions

### Preconnect

Add preconnect hints in `<head>` for external image hosts:
```html
<link rel="preconnect" href="https://raw.githubusercontent.com">
```

Replace all image references across the entire site — every HTML file and the JS file.
```

---

## Phase 5 — Mobile Responsiveness

```
The site needs a full mobile responsiveness pass. Audit and fix all pages for mobile screens (375px iPhone SE and 320px minimum).

### CSS Approach

Append a single `@media(max-width:639px)` block at the end of styles.css. This block should handle:

**Layout & Spacing:**
- Reduce section padding (80px → 48px)
- Reduce hero padding
- Reduce footer grid gap and padding
- Reduce catalog/process grid gaps

**Typography:**
- Scale down h1 (hero headings) to ~1.75rem
- Scale down h2 (section headings) to ~1.5rem
- Scale down hero subtitle text
- Hide `<br>` tags in hero headings: `.hero-dark h1 br{display:none}`

**Card Padding:**
- Reduce all card padding by ~25-30%

**Button Stacking:**
- `.hero-btn-group` — stack to column, full-width buttons
- `.cta-buttons .btn` — full-width
- `.btn-lg` — full-width

**Component Adjustments:**
- Hide hero ticker/stats on mobile if too cramped
- Product meta grid: 3-col → 2-col
- Modal padding reduction
- Mobile menu: add `max-height:calc(100vh - 64px);overflow-y:auto`

**Inline Style Overrides (use `!important` + attribute selectors):**
- Override any inline `grid-template-columns` to `1fr` on mobile
- Override any inline `min-width` on dropdowns to `auto`
- Override any inline `font-size` on hero headings

**Bottom Sheet for Filters:**
On mobile, convert the filter sidebar into a bottom sheet:
- `.filter-panel` becomes `position:fixed;bottom:0;left:0;right:0` with `transform:translateY(100%)` → slides up via `.sheet-active`
- Add a backdrop overlay
- Add a drag handle bar and close button to the sheet header
- Toggle button opens the sheet, backdrop/close/ESC dismisses it
- On desktop (>=1024px), hide the sheet-specific elements and keep normal sticky sidebar behavior

### HTML Changes

- Replace ALL inline flex/grid wrappers on hero button groups with `class="hero-btn-group"` instead of `style="display:flex;flex-wrap:wrap;gap:12px"`
- Replace any inline grid layouts that need to change on mobile with named CSS classes
- Remove inline `grid-template-columns` from any process-grid or similar elements

### JS Changes

- ESC key handler should close: quote modal, mobile menu, AND filter bottom sheet
- Filter toggle function should check viewport width — desktop toggles inline panel, mobile opens bottom sheet
- Replace any inline `style="min-width:..."` on dropdown menus with a CSS class

### Verification Checklist

Test at 375px and 320px:
- [ ] No horizontal overflow on any page
- [ ] Hero sections: reduced height, buttons stacked full-width
- [ ] Typography scaled — headings readable, not oversized
- [ ] All card/section padding visually tighter
- [ ] Filter bottom sheet slides up smoothly, dismisses via X/backdrop/ESC
- [ ] Modal comfortable with reduced padding
- [ ] Footer reduced spacing
- [ ] Grid sections collapse to single column
- [ ] Mobile menu scrollable
```

---

## Phase 6 — Clean URLs & Deployment

```
Set up clean URLs and deployment configuration.

### Clean URLs via .htaccess

Create `.htaccess` in the project root:
- Enable RewriteEngine
- Remove .html extensions: `/about.html` → `/about`
- Ensure trailing slashes work for directories: `/products/` serves `/products/index.html`
- Add HTTPS redirect if needed
- Set custom 404 page: `ErrorDocument 404 /404.html`

### Internal Link Audit

After setting up clean URLs, audit ALL internal links across every HTML page and JS file:
- Remove `.html` extensions from all `<a href>` values
- Update JS header/footer nav links
- Update JS mobile menu links
- Ensure breadcrumb links work
- Ensure form action URLs work
- Test that all links resolve correctly with the rewrite rules

### Pre-Launch Checklist

- [ ] All pages have unique title + meta description
- [ ] All pages have canonical tags
- [ ] sitemap.xml lists all pages with correct URLs
- [ ] robots.txt points to sitemap
- [ ] 404 page works and matches site design
- [ ] No broken internal links
- [ ] No broken image references
- [ ] Forms submit correctly (or show success state)
- [ ] Mobile responsive on all pages
- [ ] Favicon and apple-touch-icon in place
```

---

## Phase 7 — Iteration & Enhancement

After the complete build, use these prompts as needed:

### Add a New Page Type

```
Create a new page template for [PAGE TYPE].

Follow the existing patterns:
- Same header/footer rendering via #site-header and #site-footer divs
- Same CSS class naming conventions
- Same section padding and container widths
- Same responsive breakpoints
- Use hero-btn-group class for hero button rows
- Add loading="lazy" to all images below the fold
- Add breadcrumb schema in <head>
- Add unique title, meta description, and canonical tag

Sections in order:
1. [Section name] — [description]
2. [Section name] — [description]
...

Add any new CSS components to styles.css (before the mobile media query block).
Add mobile overrides inside the existing @media(max-width:639px) block.
Add any new JS functions to main.js.
```

### Add a New Component

```
Add a [COMPONENT NAME] component to the design system.

Requirements:
- [Describe layout, content, behavior]
- [Describe responsive behavior on mobile]
- [Describe interactive states if any]

Add the CSS to styles.css following the existing naming pattern (kebab-case).
Add mobile overrides inside the existing @media(max-width:639px) block.
Add any JS to main.js if interactive behavior is needed.
Then integrate it into [PAGE NAME] between [SECTION A] and [SECTION B].
```

### Add Interactive Feature

```
Add [FEATURE] to the site.

Behavior:
- [Trigger] — what opens/activates it
- [Display] — what it looks like
- [Interaction] — user actions and responses
- [Close/Reset] — how it dismisses
- [Mobile] — responsive behavior (bottom sheet if overlay, stacked if buttons)
- [Keyboard] — ESC must close it, tab trapping if modal

Add CSS for the component (desktop + mobile override).
Add JS for the behavior. Wire up ESC key in the existing keydown handler.
```

### Change the Color Palette

```
Change the primary color to [NEW COLOR].

When changing the primary, also update ALL related palette colors so they feel cohesive:
- --primary-dark: a darker shade for hover states
- --secondary: a very light tint for backgrounds
- --accent: should complement the primary
- --dark, --dark-mid: should have a tint of the primary (not pure gray/navy unless the primary is blue)
- --text-secondary, --text-muted: can have a subtle hint of the primary hue
- --border: should have a hint of the primary hue
- --surface: very subtle warm/cool shift to match

Also update:
- Button text color (white or dark) based on contrast with new primary
- Hero overlay rgba values to use the new --dark color's RGB
- Any box-shadow rgba values that reference the old color
```

---

## Appendix A — Reference Design Token Set (Electropin — Green Palette)

This is the token set used for the Electropin website as a working reference:

```css
:root {
  --primary: #2A8A43;
  --primary-dark: #1E7535;
  --secondary: #EEF7F0;
  --accent: #34A853;
  --bg: #FFFFFF;
  --surface: #F4F6F5;
  --text: #1A1A1A;
  --text-secondary: #475550;
  --text-muted: #6B7B73;
  --border: #D9E2DC;
  --dark: #1B2A21;
  --dark-mid: #253830;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,.08);
  --shadow-lg: 0 8px 30px rgba(0,0,0,.12);
}

/* Font: Inter Tight, weights 300-900 */
/* Container: 1200px max, 20/24/32px padding */
/* Breakpoints: 640px / 768px / 1024px */
/* Section padding: 80px default, 48px small, 96px large */
/* Headings: weight 700, letter-spacing -0.02em, line-height 1.15 */
/* Body: line-height 1.6, antialiased */
/* Hero overlay: linear-gradient(135deg, rgba(27,42,33,.7), rgba(27,42,33,.45)) */
/* Button text: #fff (white on green primary) */
```

---

## Appendix B — Component Library Reference

Components built during the Electropin project, for reference when building other sites:

| Component | CSS Class | Description |
|-----------|-----------|-------------|
| Dark Hero | `.hero-dark` | Full-width dark bg with overlay image/video, label badge, heading, subtitle, CTA buttons |
| Fullscreen Hero | `.hero-fullscreen` | Dark hero at 100vh (80vh mobile) with optional video background and stats ticker |
| Split Hero | `.hero-split` | Two-column: image + content side by side |
| Transparent Navbar | `.header-transparent` | Starts transparent over dark hero, solidifies on scroll (>50px) |
| Sticky Navbar | `.site-header` | Fixed top, 64px height, blur backdrop, dropdown menus |
| Logo with Text | `.logo-text` | Image + stacked text (brand name on top, tagline below) beside logo image |
| Breadcrumb | `.breadcrumb` | Surface background, chevron separators, linked path |
| Card | `.card` | White bg, border, icon/heading/description, hover elevation |
| Image Card | `.img-card` | Image (16:10) with overlay + body content, image scales on hover |
| Category Card | `.cat-card` | 200px image, count badge, heading, bullet list, arrow link |
| Product Card | `.product-card` | 4:3 image, tag, heading, compact padding |
| Service Wide Card | `.service-wide` | Horizontal: image left (numbered badge), content right with highlights |
| Product Listing Card | `.product-listing-card` | Horizontal: image left, title + description + tags right, dual CTAs. Uses `data-*` attributes for filtering |
| Testimonial Card | `.testimonial-card` | Glassmorphism on dark bg, stars, quote, author |
| Retention Card | `.retention-card` | Compact, image on dark bg, 4-column grid |
| Filter Sidebar | `.filter-panel` | Sticky sidebar on desktop; slides-up bottom sheet on mobile with backdrop, handle, and close button |
| Filter Bottom Sheet | `.sheet-active` + `.filter-backdrop` | Mobile-only: fixed bottom panel with `transform:translateY()` animation, dark backdrop, drag handle, close via X/backdrop/ESC |
| Catalog Layout | `.catalog-layout` | CSS grid: 260px sidebar + 1fr content (stacks on mobile) |
| FAQ Accordion | `.faq-list` | Expand/collapse items, plus icon rotates, max-height transition |
| Quote Modal | `.modal-overlay` | Fixed overlay with backdrop blur, centered form modal, ESC/backdrop close, success state auto-dismisses |
| Inline Form CTA | `.form-cta-grid` | Two-column: checklist content left + form card right |
| Photo Strip | `.photo-strip` | 4-column image grid, 2 columns on mobile |
| Stat Bar | `.stat-bar` | Dark bg, centered stats with large values |
| Process Steps | `.process-steps` | Numbered circles with heading + description |
| Industry Carousel | `.industries-track` | Auto-scrolling horizontal card carousel, CSS animation |
| Stats Ticker | `.hero-ticker` | Vertical scrolling stats, absolute positioned, gradient mask (hidden on mobile) |
| Button System | `.btn` | Primary, dark, outline, outline-dark variants; sm/lg sizes |
| Hero Button Group | `.hero-btn-group` | Flex row with wrap; stacks to full-width column on mobile |
| Grid System | `.grid-2` through `.grid-6` | Responsive column grids with mobile stacking |
| Grid Tech | `.grid-tech` | 2-column grid utility (collapses to 1-col on mobile) |
| Dropdown Wide | `.nav-dropdown-wide` | 280px min-width dropdown; collapses to auto on mobile |

---

## Appendix C — Page Template Recipes

### Homepage
```
hero-dark (fullscreen, video bg, stats ticker)
→ split section (technology intro)
→ retention features grid (4-col product images)
→ product categories (3 category cards)
→ process steps (dark bg, 3 steps)
→ industry carousel (auto-scroll, 6 cards)
→ testimonial (single centered quote)
→ photo strip (4 factory images)
→ form-cta-grid (checklist left + inline quote form right)
```

### Product Catalog / Category Page
```
hero-dark (bg image, title, description, hero-btn-group CTAs)
→ breadcrumb
→ catalog-layout (filter sidebar + product listing cards with differentiated data-* attributes)
→ photo strip
→ cta-dark
```

### Product Detail Page
```
breadcrumb
→ product hero grid (image + info with badges, meta stats, hero-btn-group CTAs)
→ detail section (features/applications/specs in 2-col grid with sidebar)
→ related products (4-col product cards)
→ photo strip
```

### Service Detail Page
```
hero-dark (bg image, title, description, hero-btn-group CTAs)
→ breadcrumb
→ hero-split (technology explanation with image)
→ detail-grid (content blocks + sidebar with CTA, quick facts, other services)
→ testimonials (3-col card grid on dark bg)
→ faq accordion (5 questions)
→ inline form CTA (checklist + form)
→ photo strip
→ cta-dark
```

### About Page
```
hero-dark (factory bg)
→ stat bar (key metrics)
→ split section (company story)
→ timeline (milestones)
→ split section (team/leadership)
→ technology advantages (6-col grid on dark bg)
→ photo strip
→ cta-dark
```

### Contact Page
```
hero-dark
→ contact section (form + info cards in 3fr/2fr grid)
→ success state (shown after form submit)
```

---

## Appendix D — JS Architecture Patterns

### Header/Footer Rendering
```javascript
// Every HTML page has these two divs:
// <div id="site-header"></div>
// <div id="site-footer"></div>

// Base path resolution for nested pages:
function getBasePath() {
  var depth = (window.location.pathname.replace(/\/[^/]*$/, '').match(/\//g) || []).length;
  if (depth === 0) return '.';
  return Array(depth).fill('..').join('/');
}
var BASE = getBasePath();

// Header includes: logo (image + stacked text), desktop nav with dropdowns,
// mobile toggle button, mobile menu with all links
// Footer includes: logo, tagline, product/service/contact link columns

function renderHeader() { /* injects into #site-header */ }
function renderFooter() { /* injects into #site-footer */ }
```

### Interactive Feature Pattern
```javascript
// Each feature follows this pattern:
// 1. Init function called on DOMContentLoaded
// 2. Guard clause checking if relevant DOM element exists
// 3. Event listeners attached
// 4. State managed via CSS classes (not JS variables)

document.addEventListener('DOMContentLoaded', function() {
  renderHeader();
  renderFooter();
  injectOrganizationSchema();  // SEO: org schema on every page
  initDeferredVideo();          // Performance: lazy-load videos
  initTransparentHeader();      // Transparent → solid navbar on scroll
  initCatalogFilters();         // Product filter checkboxes
  initFaqAccordion();           // FAQ expand/collapse

  // Global ESC key handler — closes ALL overlays
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeQuoteModal();
      closeFilterSheet();
      // Close mobile menu
      var menu = document.getElementById('mobile-menu');
      if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
        document.getElementById('mobile-icon').innerHTML = icons.menu;
      }
    }
  });
});
```

### Modal Pattern
```javascript
// Modals are created dynamically on first open (not in HTML)
// Closed via: close button, backdrop click, ESC key
// Body scroll locked when open (document.body.style.overflow = 'hidden')
// Form resets on each open
// Success state shown after submit, auto-close after 2s
```

### Bottom Sheet Pattern (Mobile Filters)
```javascript
// toggleFilterPanel() checks viewport width:
//   >= 1024px → toggle .filter-panel-body.active (inline expand)
//   < 1024px  → open bottom sheet

// openFilterSheet():
//   1. Injects handle bar + close button into panel (once)
//   2. Creates backdrop overlay (once)
//   3. Adds .sheet-active to panel (slides up via CSS transform)
//   4. Locks body scroll

// closeFilterSheet():
//   1. Removes .sheet-active (slides down)
//   2. Removes backdrop .active
//   3. Restores body scroll

// Closed via: close button, backdrop click, ESC key
// Filter checkboxes remain functional — selections apply immediately
```

### Catalog Filter Logic
```javascript
// Reads all checkboxes with data-filter attribute
// Groups active filters by type (material, retention, industry)
// For each product card, checks if card's data-[type] attribute
//   contains at least one of the active values for EVERY active group
// Shows/hides cards via style.display

// CRITICAL: Each card MUST have different data attribute values.
// If all cards have "data-material='brass, stainless steel'" identically,
// then filtering by material will show all or none — defeating the purpose.
```

### Deferred Video Loading
```javascript
// Videos use data-src instead of <source src>
// After window.load, create <source> element with the data-src value
// Call video.load() to start loading
// This prevents video from blocking initial page render
```

### Organization Schema Injection
```javascript
// Dynamically injects JSON-LD Organization schema into <head>
// Runs on every page via DOMContentLoaded
// Includes: name, legalName, url, logo, address, telephone, foundingDate
```

---

## Appendix E — Mobile Responsiveness Patterns

### CSS Structure
```css
/* Desktop-first styles above */

/* Utility classes (outside media query) */
.hero-btn-group{display:flex;flex-wrap:wrap;gap:12px}
.nav-dropdown-wide{min-width:280px}
.grid-tech{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:28px}

/* Single mobile breakpoint block at end of file */
@media(max-width:639px){
  /* Layout & Spacing reductions */
  /* Typography scale-down */
  /* Card padding reductions */
  /* Component adjustments */
  /* Button stacking */
  /* Bottom sheet for filters */
  /* Inline style overrides with !important */
}
```

### Inline Style Override Pattern
When you can't remove inline styles from HTML (or they're generated by JS), use attribute selectors:
```css
@media(max-width:639px){
  .process-grid[style*="grid-template-columns"]{grid-template-columns:1fr !important}
  .nav-dropdown-menu[style*="min-width"]{min-width:auto !important}
  .hero-split-content h2[style*="font-size"]{font-size:1.375rem !important}
}
```

### Bottom Sheet Filter Pattern
```css
@media(max-width:639px){
  .filter-panel{
    position:fixed;bottom:0;left:0;right:0;z-index:1000;
    border-radius:20px 20px 0 0;border:none;
    max-height:70vh;overflow-y:auto;
    transform:translateY(100%);transition:transform .3s ease;
    box-shadow:0 -4px 24px rgba(0,0,0,.15);
  }
  .filter-panel.sheet-active{transform:translateY(0)}
  .filter-backdrop{
    position:fixed;inset:0;z-index:999;
    background:rgba(0,0,0,.4);opacity:0;
    transition:opacity .3s ease;pointer-events:none;
  }
  .filter-backdrop.active{opacity:1;pointer-events:auto}
}
@media(min-width:1024px){
  .filter-sheet-close{display:none}
  .filter-sheet-handle{display:none}
  .filter-backdrop{display:none}
}
```

---

## Appendix F — Common Pitfalls & Lessons Learned

1. **Identical filter data attributes** — If you copy-paste product cards and don't change the `data-material`, `data-industry` etc., every filter will show all cards or none. Each card must have accurate, unique-ish attribute values.

2. **Inline styles block mobile overrides** — `style="grid-template-columns:1fr 1fr"` in HTML can't be overridden by a media query without `!important`. Prefer CSS classes. If inline styles already exist, use `[style*="..."]` attribute selectors with `!important`.

3. **Hero overlay too dark** — `rgba(0,0,0,.9)` makes background images/videos invisible. Start with 0.6-0.7 opacity and adjust. Use the palette's --dark color RGB values, not pure black.

4. **Color palette coherence** — When changing the primary color, you must update the entire palette. Navy dark backgrounds look wrong with a green primary. Tint the darks, borders, text-muted, and surface colors to match the primary hue.

5. **Button text contrast** — Dark primary colors (green, blue, red) need `color:#fff`. Light primary colors (yellow, cyan) need `color:#111` or `var(--dark)`. Check contrast.

6. **`getBasePath()` must work from any depth** — A page at `/products/connector-pins/custom-pins/` needs `../../..` to reach root. Test deep pages.

7. **Mobile menu overflow** — Long mobile menus get cut off without `max-height` and `overflow-y:auto`. Always add scrollability.

8. **ESC key should close everything** — One global `keydown` handler that calls close functions for modal, mobile menu, bottom sheet, and any other overlay.

9. **Filter bottom sheet must show body** — On mobile, the `.filter-panel-body` display toggle (used for desktop expand/collapse) must be overridden to `display:block !important` inside the sheet, otherwise the sheet opens empty.

10. **Test at 320px, not just 375px** — Some small Android devices and accessibility zoom settings hit 320px. Verify nothing overflows.

11. **Deferred video saves load time** — Homepage videos can be 5-10MB. Using `data-src` + JS lazy loading prevents blocking the initial render.

12. **Structured data per page type** — Don't put Product schema on service pages or vice versa. Match the schema type to the content.

13. **Clean URLs need link audit** — After setting up .htaccess rewrites, audit every `<a href>` in HTML AND JS (header/footer links, mobile menu links, breadcrumbs) to remove `.html` extensions.

14. **One CSS file, one JS file** — Resist splitting. A single CSS file keeps the design system cohesive and avoids cascade/specificity conflicts. A single JS file avoids load-order issues.
```
