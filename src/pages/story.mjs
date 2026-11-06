import { site, images, milestones, values } from "../site.mjs";
import { head, foot, pageHero, sectionHead, ctaBand, icon, abs } from "../layout.mjs";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.domain}/story/#profile`,
    url: `${site.domain}/story/`,
    name: "The Story of Suheb Naik — Founder of Memaar Developers",
    description:
      "From student leader to builder to developer: the story of Suheb Naik, founder of Memaar Developers, and the experiences that shaped his approach to property in Goa.",
    mainEntity: {
      "@type": "Person",
      "@id": `${site.domain}/#suheb-naik`,
      name: "Suheb Naik",
      jobTitle: "Founder",
      worksFor: {
        "@type": "Organization",
        name: "Memaar Developers",
        url: site.memaarUrl,
      },
      url: `${site.domain}/`,
      image: abs(images.og),
      description:
        "Suheb Naik is a Goa-based construction professional, real-estate entrepreneur and developer, and the founder of Memaar Developers.",
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
        name: "Story",
        item: `${site.domain}/story/`,
      },
    ],
  },
];

export function render() {
  return (
    head({
      title: "The Story of Suheb Naik — Founder of Memaar Developers, Goa",
      description:
        "From student leader to builder to developer: the story of Suheb Naik, founder of Memaar Developers, and the experiences that shaped his approach to property in Goa.",
      path: "/story/",
      image: images.og,
      ogType: "profile",
      keywords:
        "Suheb Naik story, Suheb Naik founder Memaar, Goa real estate developer story, Workzplus, ASN Associates, Memaar Developers founder",
      jsonLd,
      bodyClass: "page-story dark-hero",
    }) +
    pageHero({
      eyebrow: "The story · Suheb Naik",
      title: `
        <span class="line-mask"><span>From the</span></span>
        <span class="line-mask"><span><em>ground up.</em></span></span>`,
      intro:
        "Student leader. Entrepreneur. Builder. Developer. The journey that shaped how Suheb Naik sees property — and why he starts with the land, not the listing.",
      image: images.heroStory,
      imageAlt: "Construction work and project execution in Goa",
      compact: true,
      stats: [
        { value: "2017", label: "The professional journey begins" },
        { value: site.stats.projects, label: "Projects across the career" },
        { value: site.stats.states, label: "States of development interest" },
        { value: "01", label: "Question at the centre of it all" },
      ],
    }) +
    `
    <section class="section story-intro" id="content">
      <div class="wrap story-intro-grid">
        <div class="story-intro-media" data-reveal="mask">
          <div class="media-frame media-portrait parallax-wrap">
            <img src="${images.storyPanjim}" alt="Panjim, Goa" loading="lazy" decoding="async" data-parallax="0.06">
          </div>
          <p class="media-caption">Panjim, Goa · The home market</p>
        </div>

        <div class="story-intro-copy">
          <p class="eyebrow" data-reveal>01 — Who is Suheb Naik?</p>
          <h2 class="section-title" data-reveal data-delay="80">A construction professional turned <em>real-estate developer.</em></h2>
          <div class="prose" data-reveal data-delay="160">
            <p class="lede">Suheb Naik is a Goa-based construction professional, real-estate entrepreneur and developer with over nine years of experience across the built environment.</p>
            <p>His journey began in 2017 with interiors through Workzplus, before moving into contracting and project execution through ASN Associates. Over the years, he has been involved in more than 62 projects across residential, commercial, industrial, restoration, infrastructure and land development.</p>
            <p>That experience has given him a practical understanding of property beyond buying and selling — from land and feasibility to design, construction, market requirements and development.</p>
            <p>Today, through <strong>Memaar</strong>, Suheb is focused on real-estate development and identifying opportunities across selected markets in Goa, Maharashtra, Karnataka and Kerala.</p>
          </div>
          <div class="story-facts" data-reveal data-delay="220">
            <div><span>Based in</span><strong>Goa, India</strong></div>
            <div><span>Founder of</span><strong>Memaar Developers</strong></div>
            <div><span>Experience</span><strong>9+ years</strong></div>
            <div><span>Projects</span><strong>62+</strong></div>
          </div>
          <div class="signature-block">
            <span class="signature">Suheb Naik</span>
            <span class="signature-role">Founder, Memaar Developers</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section timeline-section" id="journey">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "02 — The journey",
          title: "From leadership to land.<br><em>From construction to development.</em>",
          intro:
            "The route into real estate was not a straight line. It began with leadership, business experiments, interiors and site execution — and only then moved into development.",
        })}

        <div class="timeline">
          ${milestones
            .map(
              (item, i) => `
              <article class="timeline-row" data-reveal data-delay="${i * 40}">
                <div class="timeline-year">
                  <span class="timeline-chapter">${item.chapter}</span>
                  <span class="timeline-year-value">${item.year}</span>
                </div>
                <div class="timeline-copy">
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </div>
                <div class="timeline-media">
                  <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
                </div>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section venture-section">
      <div class="wrap venture-inner">
        <div>
          <p class="eyebrow" data-reveal>03 — Before the buildings</p>
          <h2 class="section-title" data-reveal data-delay="80">The businesses that taught me how markets <em>actually work.</em></h2>
        </div>
        <div class="venture-copy" data-reveal data-delay="140">
          <p>Mobile and scrap dealing. Goat farming. Fish breeding. Meal Hunt. A biryani venture. Eagle Agro. Ganga Agro. Coconut distribution. A campus canteen and catering.</p>
          <p>Some lasted longer than others. Each one taught something about customers, operations, timing and the difference between an idea and a business. The lesson was never failure. It was what came next.</p>
        </div>
        <div class="venture-tags" data-reveal data-delay="200">
          ${[
            "Mobile &amp; scrap",
            "Goat farming",
            "Fish breeding",
            "Meal Hunt",
            "Biryani",
            "Eagle Agro",
            "Ganga Agro",
            "Coconut distribution",
            "Campus canteen",
          ]
            .map((tag) => `<span>${tag}</span>`)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section values-section">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "04 — How I work",
          title: "Four principles that do not change.",
          intro:
            "They come from the site, not from a brand deck. They are the checks I run before a property decision is allowed to move forward.",
        })}
        <div class="value-grid">
          ${values
            .map(
              (value, i) => `
              <article class="value-card" data-reveal data-delay="${i * 80}">
                <span class="value-num">${value.number}</span>
                <h3>${value.title}</h3>
                <p>${value.text}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section leadership-section">
      <div class="wrap leadership-grid">
        <div class="leadership-media" data-reveal="mask">
          <div class="media-frame media-wide parallax-wrap">
            <img src="${images.storyPanjim}" alt="Panjim, Goa" loading="lazy" decoding="async" data-parallax="0.05">
          </div>
        </div>
        <div class="leadership-copy" data-reveal>
          <p class="eyebrow eyebrow-light">05 — Beyond the site</p>
          <h2 class="section-title section-title-light">Leadership did not stop at the campus.</h2>
          <p>Alongside the business, Suheb serves as State President of Rifah Goa, working with a community organisation on education, welfare and entrepreneurship initiatives across the state. He also mentors young people who are trying to find their own route into business.</p>
          <p>The thread is consistent: create the conditions for other people to build something. That is as true of a project team as it is of a student with an idea.</p>
          <div class="leadership-tags">
            <span>Rifah Goa</span>
            <span>State President</span>
            <span>Mentorship</span>
            <span>Community initiatives</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section collaborators-section">
      <div class="wrap">
        <p class="eyebrow" data-reveal>06 — Selected collaborations</p>
        <div class="collaborator-row" data-reveal data-delay="80">
          <span>Isprava</span>
          <span>Aamir Ali</span>
          <span>Seahath</span>
          <span>City Homes</span>
          <span>Hindustan Builders</span>
        </div>
        <p class="collaborator-note" data-reveal data-delay="140">Clients and collaborators from across the career. Project-specific references available on request.</p>
      </div>
    </section>

    <section class="quote-section quote-section-alt">
      <div class="wrap quote-inner">
        <span class="quote-mark" aria-hidden="true">${icon("quote")}</span>
        <blockquote>
          <p>&ldquo;In every venture I embarked on, my father was my <em>unwavering investor.</em> Not once did he discourage me from chasing the idea.&rdquo;</p>
          <footer><span>Suheb Naik</span> · Founder, Memaar Developers</footer>
        </blockquote>
      </div>
    </section>

    ${ctaBand({
      eyebrow: "The next chapter",
      title: "The story is still<br><em>being built.</em>",
      text: "If you are thinking about property in Goa — buying, selling, investing or developing — the best next step is a conversation.",
      image: images.heroDevelopments,
      imageAlt: "A contemporary home in Goa",
      primaryLabel: "Talk to Suheb",
      secondaryLabel: "Explore the work",
      secondaryHref: "/developments/",
    })}
    ` +
    foot()
  );
}
