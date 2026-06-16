/* ===== SHARED SVG ICONS ===== */
const icons = {
  chevronDown: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9l-7 7-7-7"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  cube: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/></svg>',
  star: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>',
  building: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"/></svg>',
  logoPin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#080808" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6 12 12"/><path d="M5.6 6.6 12 12"/><circle cx="12" cy="18" r="4"/></svg>',
  chevronRight: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>',
  menu: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18L18 6M6 6l12 12"/></svg>',
};

/* ===== RESOLVE RELATIVE PATHS ===== */
function getBasePath() {
  const depth = (window.location.pathname.replace(/\/[^/]*$/, '').match(/\//g) || []).length;
  if (depth === 0) return '.';
  return Array(depth).fill('..').join('/');
}
const BASE = getBasePath();

/* ===== HEADER ===== */
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.className = 'site-header';
  header.innerHTML = `
    <div class="container">
      <div class="header-inner">
        <a href="${BASE}/" class="logo">
          <img src="https://raw.githubusercontent.com/subhajitgorai-create/electropin/master/images/electropin-logo.webp" alt="Electropin" class="logo-img">
          <span class="logo-text"><span class="logo-text-top">ELECTROPIN</span><span class="logo-text-bottom">TECHNOLOGIES</span></span>
        </a>
        <nav class="desktop-nav">
          <a href="${BASE}/">Home</a>
          <a href="${BASE}/about">About</a>
          <div class="nav-dropdown">
            <a href="${BASE}/products/" style="display:inline-flex;align-items:center;gap:4px">
              Products <span class="dropdown-caret">${icons.chevronDown}</span>
            </a>
            <div class="nav-dropdown-menu">
              <div class="nav-dropdown-menu-inner">
                <a href="${BASE}/products/connector-pins/">Connector Pins</a>
                <a href="${BASE}/products/fastening-alignment-pins/">Fastening & Alignment Pins</a>
                <a href="${BASE}/products/specialty-retention-pins/">Specialty Retention Pins</a>
                <div class="dropdown-divider"></div>
                <a href="${BASE}/products/" style="color:var(--primary);font-weight:500">View All Products</a>
              </div>
            </div>
          </div>
          <div class="nav-dropdown">
            <a href="${BASE}/services/" style="display:inline-flex;align-items:center;gap:4px">
              Services <span class="dropdown-caret">${icons.chevronDown}</span>
            </a>
            <div class="nav-dropdown-menu nav-dropdown-wide">
              <div class="nav-dropdown-menu-inner">
                <a href="${BASE}/services/custom-connector-pins-manufacturing">Custom Connector Pins Manufacturing</a>
                <a href="${BASE}/services/dfm-consultation">Design for Manufacturing (DFM)</a>
                <a href="${BASE}/services/custom-die-creation">Custom Die Creation</a>
                <a href="${BASE}/services/retention-features-manufacturing">Retention Features Manufacturing</a>
              </div>
            </div>
          </div>
          <a href="${BASE}/contact">Contact</a>
        </nav>
        <div class="header-actions">
          <a href="tel:+19192881203" class="header-phone">(919) 288-1203</a>
          <a href="${BASE}/contact" class="btn btn-primary btn-sm">Request Quote</a>
        </div>
        <button class="mobile-toggle" onclick="toggleMobile()" aria-label="Toggle menu">
          <span id="mobile-icon">${icons.menu}</span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <a href="${BASE}/">Home</a>
      <a href="${BASE}/about">About</a>
      <a href="${BASE}/products/">Products</a>
      <a href="${BASE}/products/connector-pins/" class="sub-link">Connector Pins</a>
      <a href="${BASE}/products/fastening-alignment-pins/" class="sub-link">Fastening & Alignment Pins</a>
      <a href="${BASE}/products/specialty-retention-pins/" class="sub-link">Specialty Retention Pins</a>
      <a href="${BASE}/services/">Services</a>
      <a href="${BASE}/services/custom-connector-pins-manufacturing" class="sub-link">Custom Manufacturing</a>
      <a href="${BASE}/services/dfm-consultation" class="sub-link">DFM Consultation</a>
      <a href="${BASE}/services/custom-die-creation" class="sub-link">Custom Die Creation</a>
      <a href="${BASE}/services/retention-features-manufacturing" class="sub-link">Retention Features</a>
      <a href="${BASE}/contact">Contact</a>
      <div style="padding-top:12px">
        <a href="${BASE}/contact" class="btn btn-primary w-full" style="display:block;text-align:center">Request Quote</a>
      </div>
    </div>
  `;
}

function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-icon');
  menu.classList.toggle('active');
  icon.innerHTML = menu.classList.contains('active') ? icons.close : icons.menu;
}

/* ===== FOOTER ===== */
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo" style="margin-bottom:16px">
            <img src="https://raw.githubusercontent.com/subhajitgorai-create/electropin/master/images/electropin-logo.webp" alt="Electropin" class="logo-img logo-img-footer">
            <span class="logo-text logo-text-footer"><span class="logo-text-top">ELECTROPIN</span><span class="logo-text-bottom">TECHNOLOGIES</span></span>
          </div>
          <p>Custom Connector Pins Without the Waste</p>
          <p style="margin-top:8px">Founded 1943 &middot; North Carolina</p>
        </div>
        <div>
          <h3 class="footer-heading">Products</h3>
          <ul class="footer-links">
            <li><a href="${BASE}/products/connector-pins/">Connector Pins</a></li>
            <li><a href="${BASE}/products/fastening-alignment-pins/">Fastening & Alignment Pins</a></li>
            <li><a href="${BASE}/products/specialty-retention-pins/">Specialty Retention Pins</a></li>
            <li><a href="${BASE}/products/" style="color:var(--primary)">View All Products</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-heading">Services</h3>
          <ul class="footer-links">
            <li><a href="${BASE}/services/custom-connector-pins-manufacturing">Custom Manufacturing</a></li>
            <li><a href="${BASE}/services/dfm-consultation">DFM Consultation</a></li>
            <li><a href="${BASE}/services/custom-die-creation">Custom Die Creation</a></li>
            <li><a href="${BASE}/services/retention-features-manufacturing">Retention Features</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-heading">Contact</h3>
          <ul class="footer-contact">
            <li>${icons.phone} <a href="tel:+19192881203">(919) 288-1203</a></li>
            <li>${icons.pin} 110 Centura Dr, Goldsboro, NC 27530</li>
            <li>${icons.clock} Mon-Fri: 8AM - 5PM</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Autoswage Products, Inc. DBA Electropin. All rights reserved.</p>
        <div style="display:flex;gap:24px">
          <a href="${BASE}/about">About</a>
          <a href="${BASE}/contact">Contact</a>
        </div>
      </div>
    </div>
  `;
}

/* ===== CONTACT FORM ===== */
function handleContactForm(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

/* ===== QUOTE MODAL ===== */
function openQuoteModal(productName) {
  let overlay = document.getElementById('quote-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'quote-modal-overlay';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal" id="quote-modal">
        <div class="modal-header">
          <h2>Request a Quote</h2>
          <button class="modal-close" onclick="closeQuoteModal()" aria-label="Close">${icons.close}</button>
        </div>
        <div class="modal-body" id="quote-modal-form">
          <form onsubmit="submitQuoteModal(event)">
            <div class="form-row">
              <div class="form-group">
                <label>Name *</label>
                <input type="text" class="form-control" name="name" required placeholder="Your name">
              </div>
              <div class="form-group">
                <label>Email *</label>
                <input type="email" class="form-control" name="email" required placeholder="you@company.com">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label>Phone</label>
                <input type="tel" class="form-control" name="phone" placeholder="(555) 123-4567">
              </div>
              <div class="form-group">
                <label>Company</label>
                <input type="text" class="form-control" name="company" placeholder="Company name">
              </div>
            </div>
            <div class="form-group">
              <label>Product</label>
              <input type="text" class="form-control" name="product" id="quote-product" readonly>
            </div>
            <div class="form-group">
              <label>Requirements (optional)</label>
              <textarea class="form-control" name="requirements" rows="3" placeholder="Describe your specifications, quantities, or questions..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-full">Submit Quote Request</button>
          </form>
        </div>
        <div class="modal-success" id="quote-modal-success" style="display:none">
          ${icons.check}
          <h3>Quote Request Sent</h3>
          <p>We'll review your request and get back to you within 1 business day.</p>
        </div>
      </div>
    `;
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) closeQuoteModal();
    });
    document.body.appendChild(overlay);
  }
  // Reset form state
  const form = overlay.querySelector('#quote-modal-form');
  const success = overlay.querySelector('#quote-modal-success');
  form.style.display = 'block';
  success.style.display = 'none';
  form.querySelector('form').reset();
  document.getElementById('quote-product').value = productName || '';
  // Show
  requestAnimationFrame(() => overlay.classList.add('active'));
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  const overlay = document.getElementById('quote-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function submitQuoteModal(e) {
  e.preventDefault();
  const form = document.getElementById('quote-modal-form');
  const success = document.getElementById('quote-modal-success');
  form.style.display = 'none';
  success.style.display = 'block';
  setTimeout(closeQuoteModal, 2000);
}

/* ===== CATALOG FILTERS ===== */
function initCatalogFilters() {
  const panel = document.querySelector('.filter-panel');
  if (!panel) return;

  const checkboxes = panel.querySelectorAll('input[type="checkbox"]');
  const cards = document.querySelectorAll('.product-listing-card[data-material]');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  function applyFilters() {
    const active = {};
    checkboxes.forEach(cb => {
      if (cb.checked) {
        const group = cb.dataset.filter;
        if (!active[group]) active[group] = [];
        active[group].push(cb.value.toLowerCase());
      }
    });
    const groups = Object.keys(active);
    cards.forEach(card => {
      if (groups.length === 0) {
        card.style.display = '';
        return;
      }
      const show = groups.every(g => {
        const vals = (card.dataset[g] || '').toLowerCase().split(',').map(s => s.trim());
        return active[g].some(v => vals.includes(v));
      });
      card.style.display = show ? '' : 'none';
    });
  }
}

function toggleFilterPanel() {
  var panel = document.querySelector('.filter-panel');
  if (!panel) return;

  // On desktop (>=1024px) use the old toggle behavior
  if (window.innerWidth >= 1024) {
    var body = document.querySelector('.filter-panel-body');
    if (body) body.classList.toggle('active');
    return;
  }

  // Mobile: open as bottom sheet
  openFilterSheet();
}

function openFilterSheet() {
  var panel = document.querySelector('.filter-panel');
  if (!panel) return;

  // Inject handle + close button once
  if (!panel.querySelector('.filter-sheet-handle')) {
    var handle = document.createElement('div');
    handle.className = 'filter-sheet-handle';
    panel.insertBefore(handle, panel.firstChild);
  }
  var heading = panel.querySelector('.filter-panel-heading');
  if (heading && !heading.querySelector('.filter-sheet-close')) {
    var closeBtn = document.createElement('button');
    closeBtn.className = 'filter-sheet-close';
    closeBtn.setAttribute('aria-label', 'Close filters');
    closeBtn.innerHTML = icons.close;
    closeBtn.addEventListener('click', closeFilterSheet);
    heading.appendChild(closeBtn);
  }

  // Ensure filter body is visible inside sheet
  var body = panel.querySelector('.filter-panel-body');
  if (body) body.classList.add('active');

  // Create backdrop if needed
  var backdrop = document.getElementById('filter-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'filter-backdrop';
    backdrop.className = 'filter-backdrop';
    backdrop.addEventListener('click', closeFilterSheet);
    document.body.appendChild(backdrop);
  }

  // Show
  requestAnimationFrame(function() {
    backdrop.classList.add('active');
    panel.classList.add('sheet-active');
  });
  document.body.style.overflow = 'hidden';
}

function closeFilterSheet() {
  var panel = document.querySelector('.filter-panel');
  var backdrop = document.getElementById('filter-backdrop');
  if (panel) panel.classList.remove('sheet-active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== TRANSPARENT HEADER ON HERO PAGES ===== */
function initTransparentHeader() {
  const header = document.getElementById('site-header');
  if (!header || !document.querySelector('.hero-dark')) return;
  // Switch to fixed so header overlays the hero instead of sitting above it
  header.classList.add('header-fixed', 'header-transparent');
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.remove('header-transparent');
      header.classList.add('header-scrolled');
    } else {
      header.classList.add('header-transparent');
      header.classList.remove('header-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ===== FAQ ACCORDION ===== */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var list = item.closest('.faq-list');
      var wasActive = item.classList.contains('active');
      list.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('active');
      });
      if (!wasActive) item.classList.add('active');
    });
  });
}

/* ===== SERVICE PAGE INLINE FORM ===== */
function handleServiceForm(event) {
  event.preventDefault();
  var form = event.target;
  var success = form.nextElementSibling;
  form.style.display = 'none';
  success.style.display = 'block';
}

/* ===== SEO: ORGANIZATION SCHEMA (ALL PAGES) ===== */
function injectOrganizationSchema() {
  var schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Electropin",
    "legalName": "Autoswage Products, Inc. DBA Electropin",
    "url": "https://electropintech.com",
    "logo": "https://raw.githubusercontent.com/subhajitgorai-create/electropin/master/images/electropin-logo.webp",
    "foundingDate": "1943",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "110 Centura Dr",
      "addressLocality": "Goldsboro",
      "addressRegion": "NC",
      "postalCode": "27530",
      "addressCountry": "US"
    },
    "telephone": "+1-919-288-1203"
  };
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/* ===== SEO: DEFERRED VIDEO LOADING ===== */
function initDeferredVideo() {
  window.addEventListener('load', function() {
    var video = document.querySelector('video[data-src]');
    if (!video) return;
    var source = document.createElement('source');
    source.src = video.getAttribute('data-src');
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  injectOrganizationSchema();
  initDeferredVideo();
  initCatalogFilters();
  initTransparentHeader();
  initFaqAccordion();
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeQuoteModal();
      closeFilterSheet();
      var menu = document.getElementById('mobile-menu');
      if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
        document.getElementById('mobile-icon').innerHTML = icons.menu;
      }
    }
  });
});
