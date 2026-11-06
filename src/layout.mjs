import { site, images } from "./site.mjs";

export function icon(name, className = "") {
  return `<svg class="icon ${className}" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`;
}

export function abs(path = "/") {
  return new URL(path, site.domain).toString();
}

export function sprite() {
  return `
  <svg class="svg-sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <symbol id="i-arrow-up-right" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></symbol>
    <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></symbol>
    <symbol id="i-arrow-down" viewBox="0 0 24 24"><path d="M12 4v16m-6-6 6 6 6-6"/></symbol>
    <symbol id="i-arrow-up" viewBox="0 0 24 24"><path d="M12 20V4m-6 6 6-6 6 6"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.6 3.5h2.2l1.5 4-2 1.4a13.4 13.4 0 0 0 6.8 6.8l1.4-2 4 1.5v2.2a2.6 2.6 0 0 1-2.9 2.6A17.4 17.4 0 0 1 4 6.4a2.6 2.6 0 0 1 2.6-2.9Z"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></symbol>
    <symbol id="i-map-pin" viewBox="0 0 24 24"><path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></symbol>
    <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 8h16M4 16h16"/></symbol>
    <symbol id="i-compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></symbol>
    <symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></symbol>
    <symbol id="i-home" viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10H3V10Z"/><path d="M9 20v-6h6v6"/></symbol>
    <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 20V4M4 20h16"/><path d="m7 15 4-4 3 2 5-6"/></symbol>
    <symbol id="i-hammer" viewBox="0 0 24 24"><path d="m14 5 5 5-3 3-5-5 3-3Z"/><path d="m11 8-7 7v4h4l7-7"/></symbol>
    <symbol id="i-file" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></symbol>
    <symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></symbol>
    <symbol id="i-quote" viewBox="0 0 24 24"><path d="M9 6H5v6h4c0 3-2 5-5 6M19 6h-4v6h4c0 3-2 5-5 6"/></symbol>
    <symbol id="i-whatsapp" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42Z"/></symbol>
  </svg>`;
}

function header(active = "") {
  const links = site.nav
    .map(
      (item) => `
        <a class="nav-link${active === item.href ? " is-active" : ""}" href="${item.href}"${
          active === item.href ? ' aria-current="page"' : ""
        }>${item.label}</a>`,
    )
    .join("");

  const mobileLinks = site.nav
    .map(
      (item, i) => `
        <a class="mobile-link${active === item.href ? " is-active" : ""}" href="${item.href}" style="--i:${i + 1}">
          <span class="mobile-link-num">0${i + 1}</span>
          <span>${item.label}</span>
          ${icon("arrow-up-right")}
        </a>`,
    )
    .join("");

  return `
  <header class="site-header" id="siteHeader" data-header>
    <div class="wrap header-inner">
      <a class="brand" href="/">
        <span class="brand-mark">SN</span>
        <span class="brand-copy">
          <span class="brand-name">Suheb Naik</span>
          <span class="brand-sub">Real Estate · Development</span>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Primary">
        ${links}
      </nav>

      <div class="header-actions">
        <a class="header-phone" href="${site.phoneHref}">
          ${icon("phone")}
          <span>${site.phone}</span>
        </a>
        <a class="btn btn-header" href="/contact/">
          <span>Let&rsquo;s talk</span>
          ${icon("arrow-up-right")}
        </a>
      </div>

      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu" data-menu-toggle>
        <span class="menu-toggle-label">Menu</span>
        <span class="menu-toggle-lines" aria-hidden="true"><span></span><span></span></span>
      </button>
    </div>
  </header>

  <div class="mobile-menu" id="mobileMenu" aria-hidden="true" data-mobile-menu>
    <div class="mobile-menu-bg" aria-hidden="true"></div>
    <div class="mobile-menu-inner wrap">
      <div class="mobile-menu-top">
        <p class="eyebrow eyebrow-light">Menu</p>
        <p class="mobile-menu-tag">Real Estate · Development · Investment</p>
      </div>
      <nav class="mobile-nav" aria-label="Mobile">
        ${mobileLinks}
      </nav>
      <div class="mobile-menu-foot">
        <div>
          <p class="eyebrow eyebrow-light">Start a conversation</p>
          <a class="mobile-contact" href="${site.phoneHref}">${site.phone}</a>
          <a class="mobile-contact" href="mailto:${site.email}">${site.email}</a>
        </div>
        <a class="btn btn-light" href="/contact/">Book a consultation ${icon("arrow-up-right")}</a>
      </div>
    </div>
  </div>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-lead">
        <p class="eyebrow eyebrow-light">Start here</p>
        <div class="footer-lead-row">
          <h2 class="footer-title">Have a property<br><em>decision to make?</em></h2>
          <a class="footer-circle" href="/contact/" aria-label="Start a conversation with Suheb Naik">
            ${icon("arrow-up-right")}
          </a>
        </div>
        <div class="footer-lead-bottom">
          <p>Buying land. Selling property. Looking for an investment. Planning a development.</p>
          <a class="link-arrow link-arrow-light" href="/contact/">Start with a conversation ${icon("arrow-right")}</a>
        </div>
      </div>

      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand brand-footer" href="/">
            <span class="brand-mark">SN</span>
            <span class="brand-copy">
              <span class="brand-name">Suheb Naik</span>
              <span class="brand-sub">Founder, Memaar Developers</span>
            </span>
          </a>
          <p class="footer-about">A construction professional turned real-estate developer, bringing ground-level experience to property decisions and development opportunities in Goa and beyond.</p>
          <div class="footer-socials">
            <a href="${site.socials.instagram}" target="_blank" rel="noopener">Instagram ${icon("arrow-up-right")}</a>
            <a href="${site.socials.linkedin}" target="_blank" rel="noopener">LinkedIn ${icon("arrow-up-right")}</a>
            <a href="${site.memaarUrl}" target="_blank" rel="noopener">Memaar ${icon("arrow-up-right")}</a>
          </div>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Explore</p>
          <a href="/story/">Story</a>
          <a href="/expertise/">Expertise</a>
          <a href="/developments/">Developments</a>
          <a href="/contact/">Contact</a>
        </div>

        <div class="footer-col">
          <p class="footer-col-title">Focus</p>
          <a href="/expertise/#buy">Buy property</a>
          <a href="/expertise/#sell">Sell property</a>
          <a href="/expertise/#invest">Invest</a>
          <a href="/expertise/#develop">Develop land</a>
        </div>

        <div class="footer-col footer-contact">
          <p class="footer-col-title">Contact</p>
          <a href="${site.phoneHref}">${site.phone}</a>
          <a href="mailto:${site.email}">${site.email}</a>
          <p>${site.address.line1}<br>${site.address.line2}, ${site.address.city} ${site.address.pincode}</p>
          <p class="footer-hours">${site.hours}</p>
        </div>
      </div>

      <div class="footer-wordmark" aria-hidden="true">SUHEB NAIK</div>

      <div class="footer-bottom">
        <p>© ${year} Suheb Naik · Founder, <a href="${site.memaarUrl}" target="_blank" rel="noopener">Memaar Developers</a></p>
        <p>Goa · Maharashtra · Karnataka · Kerala</p>
        <button class="back-to-top" type="button" data-back-to-top>Back to top ${icon("arrow-up")}</button>
      </div>
    </div>
  </footer>`;
}

function preloader() {
  return `
  <div class="preloader" id="preloader" aria-hidden="true">
    <div class="preloader-inner">
      <div class="preloader-mark">SN</div>
      <p class="preloader-name">Suheb Naik</p>
      <p class="preloader-tag">Real Estate · Development · Investment</p>
      <div class="preloader-bar"><span></span></div>
    </div>
  </div>
  <noscript><style>.preloader{display:none!important}</style></noscript>`;
}

function routeVeil() {
  return `
  <div class="route-veil" id="routeVeil" aria-hidden="true">
    <span class="route-veil-mark">SN</span>
    <span class="route-veil-line"></span>
  </div>`;
}

function cursor() {
  return `
  <div class="cursor cursor-dot" aria-hidden="true" data-cursor-dot></div>
  <div class="cursor cursor-ring" aria-hidden="true" data-cursor-ring>
    <span class="cursor-label">View</span>
  </div>`;
}

export function head({
  title,
  description,
  path = "/",
  image = images.og,
  ogType = "website",
  jsonLd = [],
  bodyClass = "",
  keywords = "",
}) {
  const canonical = abs(path);
  const ogImage = abs(image);
  const json = jsonLd
    .map(
      (item) =>
        `<script type="application/ld+json">${JSON.stringify(item).replace(
          /</g,
          "\\u003c",
        )}</script>`,
    )
    .join("\n  ");

  return `<!doctype html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="author" content="Suheb Naik">
  <meta name="keywords" content="${keywords}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#0c0d0b">
  <link rel="canonical" href="${canonical}">
  <script>document.documentElement.classList.add("js");</script>

  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="Suheb Naik">
  <meta property="og:locale" content="en_IN">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Suheb Naik — Founder, Memaar Developers">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${ogImage}">

  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/favicon.svg">
  <link rel="manifest" href="/site.webmanifest">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&amp;family=Manrope:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/site.css">

  ${json}
</head>
<body class="page${bodyClass ? " " + bodyClass : ""}">
  ${sprite()}
  ${preloader()}
  ${routeVeil()}
  ${cursor()}
  <div class="scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>
  ${header(path)}
  <main id="main">`;
}

export function foot() {
  return `</main>
  ${footer()}
  <script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}

export function breadcrumbs(items) {
  const list = items
    .map(
      (item, i) =>
        `<li>${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span>${item.label}</span>`}</li>`,
    )
    .join("");
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><div class="wrap"><ol>${list}</ol></div></nav>`;
}

export function pageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  stats = [],
  meta = "",
  compact = false,
  cta = "",
  align = "left",
}) {
  const statMarkup = stats
    .map(
      (stat, i) => `
        <div class="hero-stat" data-reveal data-delay="${120 + i * 80}">
          <span class="hero-stat-value">${stat.value}</span>
          <span class="hero-stat-label">${stat.label}</span>
        </div>`,
    )
    .join("");

  return `
  <section class="hero${compact ? " hero-compact" : ""}${align === "center" ? " hero-center" : ""}">
    <div class="hero-media" aria-hidden="true">
      <img src="${image}" alt="${imageAlt}" ${compact ? "" : 'fetchpriority="high"'} decoding="async">
    </div>
    <div class="hero-shade" aria-hidden="true"></div>
    <div class="wrap hero-inner">
      <div class="hero-copy">
        <p class="eyebrow eyebrow-light hero-eyebrow" data-reveal>${eyebrow}</p>
        <h1 class="hero-title">${title}</h1>
        <p class="hero-intro" data-reveal data-delay="160">${intro}</p>
        ${cta ? `<div class="hero-cta" data-reveal data-delay="240">${cta}</div>` : ""}
      </div>
      ${statMarkup ? `<div class="hero-stats">${statMarkup}</div>` : ""}
      ${meta ? `<div class="hero-meta">${meta}</div>` : ""}
    </div>
    <a class="scroll-cue" href="#${compact ? "content" : "manifesto"}" aria-label="Scroll to explore">
      <span>Scroll</span>
      <span class="scroll-cue-line" aria-hidden="true"></span>
    </a>
  </section>`;
}

export function sectionHead({ eyebrow, title, intro = "", align = "left", light = false }) {
  return `
  <div class="section-head${align === "center" ? " section-head-center" : ""}${light ? " section-head-light" : ""}">
    <p class="eyebrow${light ? " eyebrow-light" : ""}" data-reveal>${eyebrow}</p>
    <h2 class="section-title" data-reveal data-delay="80">${title}</h2>
    ${intro ? `<p class="section-intro" data-reveal data-delay="160">${intro}</p>` : ""}
  </div>`;
}

export function ctaBand({
  eyebrow = "Start here",
  title = "Have a property<br><em>decision to make?</em>",
  text = "Buying land. Selling property. Looking for an investment. Planning a development. Start with a conversation.",
  image = images.heroHome,
  imageAlt = "A contemporary villa in Goa",
  primaryLabel = "Book a consultation",
  primaryHref = "/contact/",
  secondaryLabel = "WhatsApp Suheb",
  secondaryHref = `https://wa.me/${site.whatsapp}`,
} = {}) {
  return `
  <section class="cta-band">
    <div class="cta-media" aria-hidden="true"><img src="${image}" alt="${imageAlt}" loading="lazy" decoding="async"></div>
    <div class="cta-overlay" aria-hidden="true"></div>
    <div class="wrap cta-inner">
      <p class="eyebrow eyebrow-light" data-reveal>${eyebrow}</p>
      <h2 class="cta-title" data-reveal data-delay="80">${title}</h2>
      <p class="cta-text" data-reveal data-delay="160">${text}</p>
      <div class="cta-actions" data-reveal data-delay="240">
        <a class="btn btn-light" href="${primaryHref}">${primaryLabel} ${icon("arrow-up-right")}</a>
        <a class="btn btn-ghost-light" href="${secondaryHref}"${
          /^https?:/i.test(secondaryHref) ? ' target="_blank" rel="noopener"' : ""
        }>${icon(/wa\.me|whatsapp/i.test(secondaryHref) ? "whatsapp" : "arrow-right")} ${secondaryLabel}</a>
      </div>
    </div>
  </section>`;
}
