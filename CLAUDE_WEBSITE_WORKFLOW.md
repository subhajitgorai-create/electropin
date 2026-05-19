# Claude Code — Static Website Builder Workflow

> A reusable prompt workflow for Claude Code to analyze an existing website, propose a site structure, align with the user, and then build the complete site using provided design tokens.

---

## How to Use This Document

1. **Start a new Claude Code session** in an empty project directory
2. **Paste Phase 1** into the chat along with links/files of the existing website
3. **Review** the proposed site map and page templates Claude generates
4. **Paste Phase 2** with your design tokens (colors, fonts, spacing, etc.)
5. **Approve** the plan, then Claude builds the site phase by phase
6. **Iterate** — review each batch of pages, request changes, continue

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
7. **SEO & meta** — title tags, descriptions, OG tags patterns
8. **External dependencies** — fonts, CDNs, APIs, analytics, forms backends

### Step 2: Propose New Site Structure

Based on the audit, propose:

1. **Directory structure** — folder hierarchy for all pages, assets, CSS, JS
2. **Page templates** — define each unique template type (e.g., "Service Detail", "Product Category", "Product Detail") and list the sections each contains in order
3. **Shared components** — list every reusable component with its variants
4. **Navigation map** — header nav items, dropdown contents, footer layout
5. **Responsive strategy** — breakpoints, mobile behavior for each component

Present this as a structured document. DO NOT start building yet — wait for my approval and design tokens.
```

### What to Expect

Claude will produce a detailed audit and a proposed site structure. Review it carefully:

- Are all pages accounted for?
- Does the section ordering make sense?
- Are there components missing or unnecessary?
- Is the navigation correct?

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
  --primary: #______;         /* Brand primary */
  --primary-dark: #______;    /* Primary hover/active state */
  --secondary: #______;       /* Light tint of primary for backgrounds */
  --accent: #______;          /* Accent color (can match primary) */
  --bg: #______;              /* Page background */
  --surface: #______;         /* Card/panel background */
  --text: #______;            /* Primary text */
  --text-secondary: #______;  /* Body text, descriptions */
  --text-muted: #______;      /* Captions, labels, placeholders */
  --border: #______;          /* Borders, dividers */
  --dark: #______;            /* Dark section backgrounds */
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

- **Primary:** background var(--primary), text var(--dark), hover translateY(-1px) + shadow
- **Dark:** background var(--dark), text white
- **Outline:** transparent bg, white border (for dark sections)
- **Outline Dark:** transparent bg, dark border (for light sections)
- **Sizes:** sm (padding ___ ___), default (padding ___ ___), lg (padding ___ ___)

### Build Instructions

1. **Create ONE CSS file** (`css/styles.css`) with the complete design system: reset, variables, utilities, and all components
2. **Create ONE JS file** (`js/main.js`) that:
   - Renders the shared header and footer via `renderHeader()` and `renderFooter()` functions injected into `#site-header` and `#site-footer` divs
   - Uses a `getBasePath()` function to resolve relative paths based on directory depth, so links work from any nested page
   - Handles all interactive features: mobile menu toggle, modals, accordions, filters, carousels
3. **Each HTML page** should only contain:
   - `<head>` with meta, title, font link, CSS link
   - `<body>` with `<div id="site-header"></div>`, main content sections, `<div id="site-footer"></div>`, JS script tag
4. **Images:** Use placeholder paths in `images/` directory — I will replace with real assets

### Build Order

Build in this order, waiting for my approval after each batch:

**Batch 1: Foundation**
- css/styles.css (complete design system)
- js/main.js (header, footer, utilities)
- index.html (homepage)

**Batch 2: Core Pages**
- about.html
- contact.html

**Batch 3: Product/Service Category Pages**
- [List your category index pages]

**Batch 4: Detail Pages**
- [List your detail pages]

Start with Batch 1 now.
```

---

## Phase 3 — Iteration & Enhancement

After the initial build, use these prompts as needed:

### Add a New Page Type

```
Create a new page template for [PAGE TYPE].

Follow the existing patterns:
- Same header/footer rendering
- Same CSS class naming conventions
- Same section padding and container widths
- Same responsive breakpoints

Sections in order:
1. [Section name] — [description]
2. [Section name] — [description]
...

Add any new CSS components to styles.css. Add any new JS functions to main.js.
```

### Add a New Component

```
Add a [COMPONENT NAME] component to the design system.

Requirements:
- [Describe layout, content, behavior]
- [Describe responsive behavior]
- [Describe interactive states]

Add the CSS to styles.css following the existing naming pattern.
Add any JS to main.js if interactive behavior is needed.
Then integrate it into [PAGE NAME] between [SECTION A] and [SECTION B].
```

### Ensure Consistency Across Pages

```
Audit all [PAGE TYPE] pages for consistency.

Every [PAGE TYPE] page should have these sections in this exact order:
1. [Section]
2. [Section]
...

Check each page, identify deviations, and fix them to match this template.
```

### Add Interactive Feature

```
Add [FEATURE] to the site.

Behavior:
- [Trigger] — what opens/activates it
- [Display] — what it looks like
- [Interaction] — user actions and responses
- [Close/Reset] — how it dismisses
- [Mobile] — responsive behavior
- [Keyboard] — ESC, tab, enter support

Add CSS for the component and JS for the behavior.
```

---

## Appendix A — Reference Design Token Set (Electropin)

This is the token set used for the Electropin website as a working reference:

```css
:root {
  --primary: #2DD4C6;
  --primary-dark: #22b8ab;
  --secondary: #EAFBF9;
  --accent: #2DD4C6;
  --bg: #FFFFFF;
  --surface: #F5F6F8;
  --text: #0D0D0D;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --border: #E5E7EB;
  --dark: #111827;
  --dark-mid: #1F2937;
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
```

---

## Appendix B — Component Library Reference

Components built during the Electropin project, for reference when building other sites:

| Component | CSS Class | Description |
|-----------|-----------|-------------|
| Dark Hero | `.hero-dark` | Full-width dark bg with overlay image/video, label badge, heading, subtitle, CTA buttons |
| Fullscreen Hero | `.hero-fullscreen` | Dark hero at 100vh with optional video background and stats ticker |
| Split Hero | `.hero-split` | Two-column: image + content side by side |
| Transparent Navbar | `.header-transparent` | Starts transparent over dark hero, solidifies on scroll (>50px) |
| Sticky Navbar | `.site-header` | Fixed top, 64px height, blur backdrop, dropdown menus |
| Breadcrumb | `.breadcrumb` | Surface background, chevron separators, linked path |
| Card | `.card` | White bg, border, icon/heading/description, hover elevation |
| Image Card | `.img-card` | Image (16:10) with overlay + body content, image scales on hover |
| Category Card | `.cat-card` | 200px image, count badge, heading, bullet list, arrow link |
| Product Card | `.product-card` | 4:3 image, tag, heading, compact padding |
| Service Wide Card | `.service-wide` | Horizontal: image left (numbered badge), content right with highlights |
| Product Listing Card | `.product-listing-card` | Horizontal: image left, title + description + tags right, dual CTAs |
| Testimonial Card | `.testimonial-card` | Glassmorphism on dark bg, stars, quote, author |
| Retention Card | `.retention-card` | Compact, image on dark bg, 4-column grid |
| Filter Sidebar | `.filter-panel` | Sticky sidebar, checkbox groups, mobile toggle |
| Catalog Layout | `.catalog-layout` | CSS grid: 260px sidebar + 1fr content |
| FAQ Accordion | `.faq-list` | Expand/collapse items, plus icon rotates, max-height transition |
| Quote Modal | `.modal-overlay` | Fixed overlay with backdrop blur, centered form modal, ESC/backdrop close |
| Inline Form CTA | `.form-cta-grid` | Two-column: checklist left + form card right |
| Photo Strip | `.photo-strip` | 4-column image grid, 2 columns on mobile |
| Stat Bar | `.stat-bar` | Dark bg, centered stats with large values |
| Process Steps | `.process-steps` | Numbered circles with heading + description |
| Industry Carousel | `.industries-track` | Auto-scrolling horizontal card carousel, CSS animation |
| Stats Ticker | `.hero-ticker` | Vertical scrolling stats, absolute positioned, gradient mask |
| Button System | `.btn` | Primary, dark, outline, outline-dark variants; sm/lg sizes |
| Grid System | `.grid-2` through `.grid-6` | Responsive column grids with mobile stacking |

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
→ cta-dark (final call to action)
```

### Product Catalog / Category Page
```
hero-dark (bg image, title, description, CTAs)
→ breadcrumb
→ catalog-layout (filter sidebar + product listing cards)
→ photo strip
→ cta-dark
```

### Product Detail Page
```
breadcrumb
→ product hero grid (image + info with badges, meta stats, CTAs)
→ detail section (features/applications/specs in 2-col grid with sidebar)
→ related products (4-col product cards)
→ photo strip
```

### Service Detail Page
```
hero-dark (bg image, title, description, CTAs)
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
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth <= 1 ? './' : '../'.repeat(depth - 1);
}

// Render functions inject full HTML:
function renderHeader() {
  var BASE = getBasePath();
  document.getElementById('site-header').innerHTML = `<header class="site-header">...</header>`;
}

function renderFooter() {
  var BASE = getBasePath();
  document.getElementById('site-footer').innerHTML = `<footer class="site-footer">...</footer>`;
}
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
  initTransparentHeader();  // Transparent → solid navbar on scroll
  initCatalogFilters();     // Product filter checkboxes
  initFaqAccordion();       // FAQ expand/collapse
  // ... other init functions
});
```

### Modal Pattern
```javascript
// Modals are created dynamically on first open
// Closed via: close button, backdrop click, ESC key
// Body scroll locked when open
// Form resets on each open
// Success state shown after submit, auto-close after 2s
```

---

## Tips for Best Results

1. **Be explicit about section order** — Claude works best when you list sections in exact sequence for each page template
2. **Provide real content** — even placeholder text should be realistic in length and tone
3. **Review in batches** — don't let Claude build 20 pages without reviewing; catch issues early
4. **Keep one CSS file** — resist splitting into multiple stylesheets; one file is easier to maintain and keeps the design system cohesive
5. **Keep one JS file** — same logic; all behavior in one place with init functions
6. **Name components consistently** — pick a naming convention (kebab-case recommended) and enforce it
7. **Mobile-first CSS** — write base styles for mobile, add complexity at breakpoints
8. **Use CSS variables everywhere** — never hardcode a color, radius, or shadow that exists as a token
