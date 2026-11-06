import { site, images, projects, currentDevelopments, notes } from "../site.mjs";
import { head, foot, pageHero, sectionHead, ctaBand, icon, abs } from "../layout.mjs";

const featured = projects.filter((project) => project.featured).slice(0, 3);

function workCard(project, index) {
  return `
    <a class="work-card" href="/developments/#${project.slug}" data-reveal data-delay="${index * 90}">
      <div class="work-media">
        <img src="${project.image}" alt="${project.name}, ${project.location}" loading="lazy" decoding="async">
      </div>
      <div class="work-shade" aria-hidden="true"></div>
      <div class="work-top">
        <span class="work-index">0${index + 1}</span>
        <span class="work-category">${project.category}</span>
      </div>
      <div class="work-info">
        <p class="work-location">${project.location}</p>
        <h3 class="work-title">${project.name}</h3>
        <p class="work-meta">${project.role} <span>·</span> ${project.year}</p>
      </div>
      <span class="work-arrow" aria-hidden="true">${icon("arrow-up-right")}</span>
    </a>`;
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.domain}/#suheb-naik`,
    name: "Suheb Naik",
    givenName: "Suheb",
    familyName: "Naik",
    jobTitle: "Founder",
    description:
      "Suheb Naik is a Goa-based construction professional, real-estate entrepreneur and developer, and the founder of Memaar Developers. He has been active in construction and real estate since 2017, with involvement in 62+ projects.",
    url: `${site.domain}/`,
    image: abs(images.og),
    worksFor: {
      "@type": "Organization",
      name: "Memaar Developers",
      url: site.memaarUrl,
    },
    founderOf: {
      "@type": "Organization",
      name: "Memaar Developers",
      url: site.memaarUrl,
    },
    knowsAbout: [
      "Real estate development",
      "Land acquisition",
      "Property investment",
      "Construction",
      "Goa real estate",
      "Feasibility and development",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Memaar House, 2nd Floor, Patto Plaza",
      addressLocality: "Panjim",
      addressRegion: "Goa",
      postalCode: "403001",
      addressCountry: "IN",
    },
    sameAs: [site.memaarUrl],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.memaarUrl}/#organization`,
    name: "Memaar Developers",
    url: site.memaarUrl,
    description:
      "Goa-based real-estate development company founded by Suheb Naik, focused on land opportunities, feasibility, concepts and projects across Goa, Maharashtra, Karnataka and Kerala.",
    founder: {
      "@type": "Person",
      name: "Suheb Naik",
      url: `${site.domain}/`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    name: "Suheb Naik",
    url: `${site.domain}/`,
    description:
      "The official website of Suheb Naik, founder of Memaar Developers — real estate, development and investment in Goa.",
    publisher: { "@id": `${site.domain}/#suheb-naik` },
    inLanguage: "en-IN",
  },
];

export function render() {
  return (
    head({
      title:
        "Suheb Naik — Founder, Memaar Developers | Goa Real Estate & Development",
      description:
        "Suheb Naik is the founder of Memaar Developers and a Goa-based real-estate developer with 9+ years and 62+ projects across construction, land and development. Talk to him before your next property decision.",
      path: "/",
      image: images.og,
      keywords:
        "Suheb Naik, Suheb Naik Memaar, Founder Memaar Developers, Goa real estate developer, property in Goa, land development Goa, real estate investment Goa, Memaar founder",
      jsonLd,
      bodyClass: "page-home dark-hero",
    }) +
    pageHero({
      eyebrow: "Goa · Real Estate · Development · Est. 2017",
      title: `
        <span class="line-mask"><span>Thinking about</span></span>
        <span class="line-mask"><span>property in Goa?</span></span>
        <span class="line-mask"><span><em>Talk to Suheb</em></span></span>
        <span class="line-mask"><span><em>Naik first.</em></span></span>`,
      intro:
        "Founder of Memaar Developers. Nine years across interiors, construction and development. 62+ projects behind him — and one question at the centre of every decision.",
      image: images.heroHome,
      imageAlt: "A contemporary villa with a pool in Goa",
      stats: [
        { value: site.stats.years, label: "Years in construction & real estate" },
        { value: site.stats.projects, label: "Projects across a career" },
        { value: site.stats.states, label: "States of development interest" },
        { value: site.stats.developments, label: "Active developments through Memaar" },
      ],
      cta: `
        <a class="btn btn-light" href="/contact/">Start a conversation ${icon("arrow-up-right")}</a>
        <a class="btn btn-ghost-light" href="/developments/">Explore the work ${icon("arrow-right")}</a>`,
      meta: `
        <div class="hero-id">
          <p class="hero-id-label">Founder</p>
          <p class="hero-id-name">Suheb Naik</p>
          <p class="hero-id-role">Memaar Developers</p>
          <span class="hero-id-line" aria-hidden="true"></span>
          <p class="hero-id-note">Goa · India</p>
        </div>`,
    }) +
    `
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span>Buy</span><i></i><span>Sell</span><i></i><span>Invest</span><i></i><span>Develop</span><i></i>
        <span>Land</span><i></i><span>Construction</span><i></i><span>Development</span><i></i><span>Goa</span><i></i>
        <span>Buy</span><i></i><span>Sell</span><i></i><span>Invest</span><i></i><span>Develop</span><i></i>
        <span>Land</span><i></i><span>Construction</span><i></i><span>Development</span><i></i><span>Goa</span><i></i>
      </div>
    </div>

    <section class="section manifesto" id="manifesto">
      <div class="wrap manifesto-grid">
        <div class="manifesto-media" data-reveal="mask">
          <div class="media-frame media-portrait parallax-wrap">
            <img src="${images.manifesto}" alt="Construction drawings and site work" loading="lazy" decoding="async" data-parallax="0.07">
          </div>
          <div class="media-badge" data-reveal data-delay="220">
            <span class="media-badge-value">${site.stats.years}</span>
            <span class="media-badge-label">years in the built environment</span>
          </div>
        </div>

        <div class="manifesto-copy">
          <p class="eyebrow" data-reveal>01 — The point of view</p>
          <h2 class="section-title section-title-lg" data-reveal data-delay="80">
            I didn&rsquo;t enter real estate by selling property.
            <em>I entered it by building.</em>
          </h2>
          <div class="manifesto-body" data-reveal data-delay="160">
            <p>My journey began in 2017 with interiors at Workzplus. It moved into contracting and project execution through ASN Associates, and then into land, acquisition, investment and development.</p>
            <p>Along the way, I learned that a property is not created when you buy the land. It is created by understanding what can actually be done with it.</p>
            <p>Today, through Memaar, I work across the full property cycle — land, feasibility, design, approvals, construction, development and sales. That ground-level view is what I bring to every conversation.</p>
          </div>
          <div class="signature-block" data-reveal data-delay="220">
            <span class="signature">Suheb Naik</span>
            <span class="signature-role">Founder, Memaar Developers</span>
          </div>
          <a class="link-arrow" href="/story/">Read the full story ${icon("arrow-right")}</a>
        </div>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "02 — How I can help",
          title: "What can I help you with?",
          intro:
            "Four conversations, one approach: understand the opportunity before making the decision. Start wherever you are.",
        })}

        <div class="service-list" data-preview-container data-reveal>
          <a class="service-row" href="/expertise/#buy" data-preview="${images.projectEnia}">
            <span class="service-num">01</span>
            <span class="service-main"><span class="service-title">Buy</span><span class="service-desc">Homes, villas, plots and investment property in Goa — selected on fundamentals, not just availability.</span></span>
            <span class="service-arrow">${icon("arrow-up-right")}</span>
          </a>
          <a class="service-row" href="/expertise/#sell" data-preview="${images.projectVarde}">
            <span class="service-num">02</span>
            <span class="service-main"><span class="service-title">Sell</span><span class="service-desc">Understand what your land or property can become before deciding what it is worth.</span></span>
            <span class="service-arrow">${icon("arrow-up-right")}</span>
          </a>
          <a class="service-row" href="/expertise/#invest" data-preview="${images.projectCasa}">
            <span class="service-num">03</span>
            <span class="service-main"><span class="service-title">Invest</span><span class="service-desc">Evaluate location, land, development potential and the numbers before committing capital.</span></span>
            <span class="service-arrow">${icon("arrow-up-right")}</span>
          </a>
          <a class="service-row" href="/expertise/#develop" data-preview="${images.projectLand}">
            <span class="service-num">04</span>
            <span class="service-main"><span class="service-title">Develop</span><span class="service-desc">Have land? Let&rsquo;s look at what it can actually become — concept, feasibility, approvals and delivery.</span></span>
            <span class="service-arrow">${icon("arrow-up-right")}</span>
          </a>
        </div>
      </div>
      <div class="hover-preview" data-hover-preview aria-hidden="true"><img alt="" data-hover-preview-img></div>
    </section>

    <section class="section philosophy" id="philosophy">
      <div class="philosophy-media" aria-hidden="true">
        <img src="${images.philosophy}" alt="" loading="lazy" decoding="async" data-parallax="0.08">
      </div>
      <div class="philosophy-overlay" aria-hidden="true"></div>
      <div class="wrap philosophy-inner">
        <div class="philosophy-top">
          <p class="eyebrow eyebrow-light" data-reveal>03 — The question</p>
          <div class="seal" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs><path id="sealPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/></defs>
              <text><textPath href="#sealPath">LAND · IDEA · BUILD · PLACE · LAND · IDEA · BUILD · PLACE · </textPath></text>
            </svg>
            <span>SN</span>
          </div>
        </div>
        <h2 class="philosophy-title" data-reveal>
          <span class="word"><span>What</span></span>
          <span class="word"><span>can</span></span><br>
          <span class="word"><span><em>this</em></span></span>
          <span class="word"><span><em>land</em></span></span><br>
          <span class="word"><span>become?</span></span>
        </h2>

        <div class="philosophy-grid">
          <div class="philosophy-copy" data-reveal data-delay="120">
            <p class="lede">The asking price tells you what a property costs today. Understanding its potential tells you what it could become tomorrow.</p>
            <p>Before I look at the price, I look at the land. Its location, access, surroundings, planning potential and the market it actually serves. That is where a good property decision begins.</p>
            <a class="link-arrow link-arrow-light" href="/expertise/#approach">How I evaluate property ${icon("arrow-right")}</a>
          </div>
          <ul class="lens-list" data-reveal data-delay="200">
            ${[
              ["01", "Location"],
              ["02", "Access"],
              ["03", "Land character"],
              ["04", "Regulations"],
              ["05", "Development potential"],
              ["06", "Market demand"],
              ["07", "Construction economics"],
              ["08", "Exit &amp; end-user demand"],
            ]
              .map(
                ([num, label]) =>
                  `<li><span>${num}</span><span>${label}</span></li>`,
              )
              .join("")}
          </ul>
        </div>
      </div>
    </section>

    <section class="section work" id="work">
      <div class="wrap">
        <div class="section-head-row">
          ${sectionHead({
            eyebrow: "04 — Selected work",
            title: "A career measured in what got built.",
            intro:
              "A curated selection from 62+ projects — residential, commercial, industrial, land development and restoration. Not a catalogue. Proof.",
          })}
          <a class="btn btn-outline section-head-cta" href="/developments/">All developments ${icon("arrow-right")}</a>
        </div>

        <div class="work-grid">
          ${featured.map((project, i) => workCard(project, i)).join("")}
        </div>
      </div>
    </section>

    <section class="section memaar-section" id="memaar">
      <div class="wrap memaar-grid">
        <div class="memaar-panel" data-reveal="mask">
          <img src="${images.memaar}" alt="Contemporary architecture and development" loading="lazy" decoding="async" data-parallax="0.05">
          <div class="memaar-panel-overlay" aria-hidden="true"></div>
          <div class="memaar-panel-copy">
            <p class="eyebrow eyebrow-light">05 — The next chapter</p>
            <h2 class="memaar-title">From executing projects<br><em>to developing them.</em></h2>
            <p>Memaar is the development platform through which we identify land, test feasibility, create concepts and develop projects across Goa, Maharashtra, Karnataka and Kerala.</p>
            <a class="btn btn-light" href="/developments/#memaar">Explore Memaar ${icon("arrow-up-right")}</a>
          </div>
        </div>

        <div class="memaar-side">
          <div class="memaar-stat" data-reveal>
            <span class="memaar-stat-value">${site.stats.developments}</span>
            <span class="memaar-stat-label">Active developments across four states</span>
          </div>
          <div class="market-list" data-reveal data-delay="100">
            ${currentDevelopments
              .map(
                (group) => `
                <a class="market-row" href="/developments/#memaar">
                  <span class="market-name">${group.state}</span>
                  <span class="market-count">${String(group.items.length).padStart(2, "0")} project${group.items.length > 1 ? "s" : ""}</span>
                  <span class="market-stage">${group.items[0].stage}</span>
                  ${icon("arrow-up-right")}
                </a>`,
              )
              .join("")}
          </div>
          <p class="memaar-note" data-reveal data-delay="160">Current stages are indicative and may change as approvals and development progress.</p>
        </div>
      </div>
    </section>

    <section class="section notes" id="notes">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "06 — Notes from the field",
          title: "What construction taught me about property.",
          intro:
            "Short, practical notes on land, value and building in Goa — written from the site, not the brochure.",
        })}

        <div class="note-grid">
          ${notes
            .map(
              (note, i) => `
              <article class="note-card" data-reveal data-delay="${i * 90}">
                <div class="note-card-top">
                  <span class="note-cat">${note.category}</span>
                  <span class="note-read">${note.read}</span>
                </div>
                <h3 class="note-title">${note.title}</h3>
                <p class="note-excerpt">${note.excerpt}</p>
                <button class="link-arrow note-open" type="button" data-dialog-open="${note.id}">Read the note ${icon("arrow-right")}</button>
              </article>`,
            )
            .join("")}
        </div>
      </div>

      ${notes
        .map(
          (note) => `
          <dialog class="note-dialog" id="${note.id}" aria-labelledby="${note.id}-title">
            <div class="dialog-head">
              <p class="eyebrow">${note.category} · ${note.read}</p>
              <button class="dialog-close" type="button" data-dialog-close aria-label="Close note">${icon("close")}</button>
            </div>
            <h2 class="dialog-title" id="${note.id}-title">${note.title}</h2>
            <div class="dialog-body">${note.body}</div>
            <div class="dialog-foot">
              <p>Have a question about this? <a href="/contact/">Start a conversation with Suheb.</a></p>
              <a class="btn btn-dark" href="/contact/">Talk to Suheb ${icon("arrow-up-right")}</a>
            </div>
          </dialog>`,
        )
        .join("")}
    </section>

    <section class="quote-section">
      <div class="wrap quote-inner">
        <span class="quote-mark" aria-hidden="true">${icon("quote")}</span>
        <blockquote>
          <p>&ldquo;Failure? No. <em>We learned.</em> Every single time, we learned.&rdquo;</p>
          <footer><span>Suheb Naik</span> · Founder, Memaar Developers</footer>
        </blockquote>
      </div>
    </section>

    ${ctaBand()}
    ` +
    foot()
  );
}
