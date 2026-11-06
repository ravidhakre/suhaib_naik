import { site, images, projects, currentDevelopments } from "../site.mjs";
import { head, foot, pageHero, sectionHead, ctaBand, icon, abs } from "../layout.mjs";

const featured = projects[0];
const categories = [
  { key: "all", label: "All work", count: projects.length },
  {
    key: "residential",
    label: "Residential",
    count: projects.filter((p) => p.categoryKey === "residential").length,
  },
  {
    key: "land",
    label: "Land development",
    count: projects.filter((p) => p.categoryKey === "land").length,
  },
  {
    key: "industrial",
    label: "Industrial",
    count: projects.filter((p) => p.categoryKey === "industrial").length,
  },
  {
    key: "restoration",
    label: "Restoration",
    count: projects.filter((p) => p.categoryKey === "restoration").length,
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.domain}/developments/#collection`,
    url: `${site.domain}/developments/`,
    name: "Selected Projects & Current Developments — Suheb Naik",
    description:
      "Selected projects from Suheb Naik's career and the current development portfolio of Memaar across Goa, Maharashtra, Karnataka and Kerala.",
    about: {
      "@type": "Person",
      "@id": `${site.domain}/#suheb-naik`,
      name: "Suheb Naik",
      jobTitle: "Founder",
      worksFor: {
        "@type": "Organization",
        name: "Memaar Developers",
        url: site.memaarUrl,
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          locationCreated: project.location,
          creator: {
            "@type": "Person",
            name: "Suheb Naik",
          },
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${site.domain}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Developments",
        item: `${site.domain}/developments/`,
      },
    ],
  },
];

function projectCard(project, index) {
  return `
    <article class="project-card" data-category="${project.categoryKey}" id="${project.slug}" data-reveal data-delay="${(index % 3) * 80}">
      <div class="project-media">
        <img src="${project.image}" alt="${project.name}, ${project.location}" loading="lazy" decoding="async">
        <span class="project-cat">${project.category}</span>
      </div>
      <div class="project-body">
        <div class="project-top">
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-year">${project.year}</span>
        </div>
        <h3>${project.name}</h3>
        <p class="project-location">${project.location}</p>
        <p class="project-desc">${project.description}</p>
        <div class="project-meta">
          <span><strong>Type</strong>${project.type}</span>
          <span><strong>Role</strong>${project.role}</span>
        </div>
        <a class="project-link" href="/contact/?project=${project.slug}">Discuss a similar project ${icon("arrow-up-right")}</a>
      </div>
    </article>`;
}

export function render() {
  return (
    head({
      title: "Selected Projects & Current Developments | Suheb Naik, Memaar",
      description:
        "Explore selected projects from Suheb Naik's career and the current development portfolio of Memaar across Goa, Maharashtra, Karnataka and Kerala.",
      path: "/developments/",
      image: images.og,
      keywords:
        "Suheb Naik projects, Memaar developments, Goa real estate projects, Memaar Mapusa, Oxel villas, Nerul land development, Enia Mila Villa",
      jsonLd,
      bodyClass: "page-developments dark-hero",
    }) +
    pageHero({
      eyebrow: "Selected work · Current developments",
      title: `
        <span class="line-mask"><span>What got built.</span></span>
        <span class="line-mask"><span><em>What comes next.</em></span></span>`,
      intro:
        "A career measured in projects, and a development portfolio still taking shape. Selected experience from 62+ projects, plus the current work through Memaar.",
      image: images.heroDevelopments,
      imageAlt: "A contemporary home in Goa",
      compact: true,
      stats: [
        { value: site.stats.projects, label: "Projects across the career" },
        { value: "26", label: "Projects in the working record" },
        { value: site.stats.developments, label: "Active developments" },
        { value: site.stats.states, label: "States of development interest" },
      ],
    }) +
    `
    <section class="section featured-project" id="content">
      <div class="wrap">
        <div class="featured-label-row" data-reveal>
          <p class="eyebrow">01 — Selected experience</p>
          <p class="featured-label-note">A curated portfolio, not a catalogue.</p>
        </div>

        <div class="featured-grid">
          <div class="featured-media" data-reveal="mask">
            <div class="media-frame media-landscape parallax-wrap">
              <img src="${featured.image}" alt="${featured.name}, ${featured.location}" loading="lazy" decoding="async" data-parallax="0.05">
            </div>
          </div>
          <div class="featured-copy" data-reveal data-delay="100">
            <p class="eyebrow">${featured.location}</p>
            <h2 class="featured-title">${featured.name}</h2>
            <p class="lede">${featured.description}</p>
            <div class="featured-details">
              <div><span>Type</span><strong>${featured.type}</strong></div>
              <div><span>Role</span><strong>${featured.role}</strong></div>
              <div><span>Year</span><strong>${featured.year}</strong></div>
              <div><span>Partners</span><strong>Hindustan Builders</strong></div>
            </div>
            <a class="btn btn-outline" href="/contact/?project=${featured.slug}">Discuss this project ${icon("arrow-up-right")}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section portfolio-section" id="portfolio">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "02 — The portfolio",
          title: "Different scales. Different challenges. <em>One foundation.</em>",
          intro:
            "Villas, apartments, industrial structures, land development and restoration. The range is deliberate — each category adds a different kind of understanding.",
        })}

        <div class="filter-bar" role="tablist" aria-label="Filter projects" data-reveal>
          ${categories
            .map(
              (category, i) => `
              <button class="filter-btn${i === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${i === 0}" data-filter="${category.key}">
                <span>${category.label}</span>
                <span class="filter-count">${String(category.count).padStart(2, "0")}</span>
              </button>`,
            )
            .join("")}
        </div>

        <div class="project-grid" data-project-grid>
          ${projects.map((project, i) => projectCard(project, i)).join("")}
        </div>
        <p class="portfolio-note" data-reveal>Selected projects from a working record of 26 projects, drawn from 62+ across the career. Project details are indicative and can be verified on request.</p>
      </div>
    </section>

    <section class="section memaar-portfolio" id="memaar">
      <div class="wrap">
        <div class="memaar-portfolio-head">
          <div>
            <p class="eyebrow eyebrow-light" data-reveal>03 — Current developments</p>
            <h2 class="section-title section-title-light" data-reveal data-delay="80">The Memaar <em>portfolio.</em></h2>
          </div>
          <p class="memaar-portfolio-intro" data-reveal data-delay="140">Memaar is the development platform through which we identify land, test feasibility, create concepts and develop projects. The current interests extend across four states.</p>
        </div>

        <div class="state-groups">
          ${currentDevelopments
            .map(
              (group, groupIndex) => `
              <div class="state-group" data-reveal data-delay="${groupIndex * 60}">
                <div class="state-head">
                  <h3>${group.state}</h3>
                  <span>${String(group.items.length).padStart(2, "0")} project${group.items.length > 1 ? "s" : ""}</span>
                </div>
                <div class="development-list">
                  ${group.items
                    .map(
                      (item) => `
                      <article class="development-row">
                        <div class="development-main">
                          <h4>${item.name}</h4>
                          <p>${item.scale}</p>
                        </div>
                        <div class="development-stage">
                          <span class="stage-label">${item.stage}</span>
                          <span class="stage-bar" aria-hidden="true"><span style="--progress:${item.progress}%"></span></span>
                        </div>
                      </article>`,
                    )
                    .join("")}
                </div>
              </div>`,
            )
            .join("")}
        </div>
        <p class="memaar-disclaimer" data-reveal>Development names, scales and stages are indicative and may change as approvals and construction progress. Verify current status before relying on any detail.</p>

        <div class="memaar-founder" data-reveal>
          <div class="memaar-founder-mark">SN</div>
          <div>
            <p class="eyebrow eyebrow-light">Founder&rsquo;s note</p>
            <p class="memaar-founder-quote">&ldquo;We don&rsquo;t start with the building. We start with the opportunity.&rdquo;</p>
            <p class="memaar-founder-role">Suheb Naik · Founder, Memaar Developers</p>
          </div>
          <a class="btn btn-ghost-light" href="${site.memaarUrl}" target="_blank" rel="noopener">Visit Memaar ${icon("arrow-up-right")}</a>
        </div>
      </div>
    </section>

    ${ctaBand({
      eyebrow: "Work with Suheb",
      title: "Have land, capital or<br><em>a property decision?</em>",
      text: "Whether you are buying, selling, investing or planning a development, the first step is to understand the opportunity. Start with a conversation.",
      image: images.heroDevelopments,
      imageAlt: "A contemporary home in Goa",
      primaryLabel: "Start a conversation",
      secondaryLabel: "WhatsApp Suheb",
    })}
    ` +
    foot()
  );
}
