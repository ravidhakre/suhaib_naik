import { site, images, faqs } from "../site.mjs";
import { head, foot, pageHero, sectionHead, ctaBand, icon, abs } from "../layout.mjs";

const jsonLd = [
  {
    "@context": "https://schema.org",
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
      "Suheb Naik is a Goa-based real-estate developer and the founder of Memaar Developers, working across buying, selling, investment and land development.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.domain}/expertise/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
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
        name: "Expertise",
        item: `${site.domain}/expertise/`,
      },
    ],
  },
];

const services = [
  {
    id: "buy",
    number: "01",
    label: "Buy",
    title: "Find the right property, not just <em>the available one.</em>",
    intro:
      "Looking for a home, villa, plot or investment property in Goa? The market is full of options. The work is to find the one that fits the life you are actually planning — and the numbers that make sense.",
    bullets: [
      "A shortlist built around your brief, not a sales target",
      "Location, title, access and approvals checked before recommendation",
      "Honest notes on what each property can and cannot become",
      "Support through negotiation, diligence and closing",
    ],
    cta: "Start a buying conversation",
    href: "/contact/?intent=buy",
    image: images.projectEnia,
    alt: "A private villa in Goa",
    note: "The right property is rarely the first one you see. It is the one that still makes sense after the questions.",
  },
  {
    id: "sell",
    number: "02",
    label: "Sell",
    title: "Understand the value before <em>you decide the price.</em>",
    intro:
      "Thinking about selling land or property? The asking price is only one part of the story. The right buyer, the right positioning and a realistic view of potential matter more.",
    bullets: [
      "Land and property evaluation",
      "Positioning and buyer fit",
      "Development potential as part of value",
      "A straight view on timing and market",
    ],
    cta: "Discuss a sale",
    href: "/contact/?intent=sell",
    image: images.projectVarde,
    alt: "A residential villa in Assagao, Goa",
    note: "A property is worth what the right buyer can do with it — not only what the last transaction says.",
  },
  {
    id: "invest",
    number: "03",
    label: "Invest",
    title: "Evaluate the fundamentals <em>before the opportunity.</em>",
    intro:
      "Goa real estate can be a strong long-term asset, but the difference between a good investment and an expensive one is usually in the details: location, access, approvals, construction economics and exit.",
    bullets: [
      "Opportunity screening",
      "Feasibility and risk review",
      "Rental and end-use assessment",
      "A long-term value lens",
    ],
    cta: "Evaluate an opportunity",
    href: "/contact/?intent=invest",
    image: images.projectCasa,
    alt: "A residential apartment interior in Goa",
    note: "The best investment conversation starts with the downside, not the upside.",
  },
  {
    id: "develop",
    number: "04",
    label: "Develop",
    title: "Have land? Let&rsquo;s look at <em>what it can become.</em>",
    intro:
      "From a single plot to a larger land parcel, development begins with understanding what is possible. We can explore the right model — self-development, a joint venture, or a partnership — before committing to a plan.",
    bullets: [
      "Land potential and feasibility",
      "Concept and development strategy",
      "Approvals and construction planning",
      "JV and development partnerships",
    ],
    cta: "Explore a development",
    href: "/contact/?intent=develop",
    image: images.projectLand,
    alt: "Open land with development potential",
    note: "The land and the opportunity determine the product. Not the other way around.",
  },
];

const process = [
  {
    number: "01",
    title: "Listen",
    text: "Start with the objective, not the property. What are you trying to achieve, and by when?",
  },
  {
    number: "02",
    title: "Understand the land",
    text: "Location, access, title, regulations and surroundings. The less romantic part comes first.",
  },
  {
    number: "03",
    title: "Test the numbers",
    text: "Construction cost, market demand and the exit. A good story still has to work as a project.",
  },
  {
    number: "04",
    title: "Shape the product",
    text: "What should actually be created here? The site, the buyer and the numbers decide.",
  },
  {
    number: "05",
    title: "Execute",
    text: "Design, approvals, construction and delivery — with the site realities kept in view.",
  },
  {
    number: "06",
    title: "Stay involved",
    text: "The details after the decision are where a project and a reputation are actually made.",
  },
];

const lenses = [
  ["map-pin", "Location", "Where is it, and what surrounds it?"],
  ["compass", "Access", "How easily can people and services reach it?"],
  ["layers", "Land character", "Shape, levels, soil, water and orientation."],
  ["shield", "Regulations", "Zone, conversion, CRZ, heritage and approvals."],
  ["spark", "Potential", "What can realistically be developed here?"],
  ["chart", "Market demand", "Who will use, rent or buy the finished product?"],
  ["hammer", "Construction economics", "What will it cost to build, and what can go wrong?"],
  ["home", "Exit &amp; end user", "What will make this easy to sell or lease later?"],
];

export function render() {
  return (
    head({
      title: "Buy, Sell, Invest & Develop Property in Goa | Suheb Naik",
      description:
        "Buying, selling, investing or developing property in Goa? Suheb Naik brings 9+ years of construction and real-estate experience to every decision. Founder of Memaar Developers.",
      path: "/expertise/",
      image: images.og,
      keywords:
        "buy property in Goa, sell property Goa, invest in Goa real estate, develop land Goa, Suheb Naik property consultant, Memaar founder",
      jsonLd,
      bodyClass: "page-expertise dark-hero",
    }) +
    pageHero({
      eyebrow: "Expertise · Buy · Sell · Invest · Develop",
      title: `
        <span class="line-mask"><span>Property is</span></span>
        <span class="line-mask"><span>more than land.</span></span>`,
      intro:
        "It is location, access, regulations, design, construction, market and people. The work is to understand how they fit together — before the decision is made.",
      image: images.heroExpertise,
      imageAlt: "Construction and project execution",
      compact: true,
      stats: [
        { value: "Buy", label: "Find the right property" },
        { value: "Sell", label: "Understand the value" },
        { value: "Invest", label: "Evaluate the fundamentals" },
        { value: "Develop", label: "Create what comes next" },
      ],
    }) +
    `
    <section class="section expertise-intro" id="content">
      <div class="wrap expertise-intro-grid">
        <div data-reveal>
          <p class="eyebrow">01 — The approach</p>
          <h2 class="section-title section-title-lg">A property decision should begin with questions, <em>not assumptions.</em></h2>
        </div>
        <div class="prose" data-reveal data-delay="100">
          <p class="lede">Real estate is rarely about one factor. A property can look attractive on paper and still have challenges that only become visible when land, planning, construction and market are examined together.</p>
          <p>That is the lens I bring: practical experience from the ground up, applied early enough to change the decision. Whether you are buying your first home, selling family land, evaluating an investment or planning a development, the first step is the same — understand the opportunity.</p>
          <a class="link-arrow" href="#approach">See how I evaluate a property ${icon("arrow-down")}</a>
        </div>
        <div class="expertise-intro-media" data-reveal="mask">
          <div class="media-frame media-wide parallax-wrap">
            <img src="${images.expertiseInterior}" alt="Interior detail in a completed home" loading="lazy" decoding="async" data-parallax="0.05">
          </div>
        </div>
      </div>
    </section>

    <section class="expertise-services" id="services">
      ${services
        .map(
          (service, i) => `
          <article class="expertise-block${i % 2 === 1 ? " is-reverse" : ""}" id="${service.id}">
            <div class="wrap expertise-block-grid">
              <div class="expertise-block-media" data-reveal="mask">
                <div class="media-frame media-portrait parallax-wrap">
                  <img src="${service.image}" alt="${service.alt}" loading="lazy" decoding="async" data-parallax="0.05">
                </div>
                <p class="expertise-note">${service.note}</p>
              </div>
              <div class="expertise-block-copy">
                <p class="eyebrow" data-reveal>${service.number} — ${service.label}</p>
                <h2 class="section-title" data-reveal data-delay="80">${service.title}</h2>
                <p class="lede" data-reveal data-delay="140">${service.intro}</p>
                <ul class="check-list" data-reveal data-delay="200">
                  ${service.bullets.map((bullet) => `<li>${icon("check")}<span>${bullet}</span></li>`).join("")}
                </ul>
                <a class="btn btn-outline" href="${service.href}" data-reveal data-delay="260">${service.cta} ${icon("arrow-up-right")}</a>
              </div>
            </div>
          </article>`,
        )
        .join("")}
    </section>

    <section class="section process-section" id="approach">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "02 — How I evaluate",
          title: "Before the price, <em>the questions.</em>",
          intro:
            "A simple sequence that keeps the decision anchored to the land, the numbers and the end user. It is not a formula. It is a discipline.",
        })}

        <div class="process-grid">
          ${process
            .map(
              (step, i) => `
              <article class="process-step" data-reveal data-delay="${i * 70}">
                <span class="process-num">${step.number}</span>
                <span class="process-line" aria-hidden="true"></span>
                <h3>${step.title}</h3>
                <p>${step.text}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section lenses-section">
      <div class="wrap lenses-grid">
        <div class="lenses-copy">
          <p class="eyebrow eyebrow-light" data-reveal>03 — What I look at</p>
          <h2 class="section-title section-title-light" data-reveal data-delay="80">The property, <em>in full.</em></h2>
          <p class="lede" data-reveal data-delay="140">The asking price is one number. These are the lenses that tell you what the property really is — and what it could become.</p>
          <a class="link-arrow link-arrow-light" href="/contact/" data-reveal data-delay="200">Talk through a property ${icon("arrow-right")}</a>
        </div>
        <div class="lens-grid" data-reveal data-delay="120">
          ${lenses
            .map(
              ([iconName, title, text], i) => `
              <article class="lens-card">
                <span class="lens-icon">${icon(iconName)}</span>
                <span class="lens-index">0${i + 1}</span>
                <h3>${title}</h3>
                <p>${text}</p>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section who-section">
      <div class="wrap">
        ${sectionHead({
          eyebrow: "04 — Who I work with",
          title: "Property is about people as much as it is about land.",
          intro:
            "Different people arrive with different questions. The common ground is a decision that deserves a proper look before it is made.",
        })}
        <div class="who-grid">
          ${[
            ["home", "Buyers", "Looking for a home, investment property or the right opportunity.", "A shortlist with honest notes, and a view beyond the photographs."],
            ["layers", "Landowners", "Owners who want to understand the potential of their land.", "Sell, develop or partner — explored before the price is fixed."],
            ["chart", "Investors", "Individuals and partners evaluating real-estate opportunities.", "The fundamentals first: location, access, numbers and exit."],
            ["compass", "Development partners", "Landowners, investors and professionals interested in building together.", "The right combination of land, capital and execution."],
          ]
            .map(
              ([iconName, title, text, note], i) => `
              <article class="who-card" data-reveal data-delay="${i * 80}">
                <span class="who-icon">${icon(iconName)}</span>
                <span class="who-num">0${i + 1}</span>
                <h3>${title}</h3>
                <p>${text}</p>
                <span class="who-note">${note}</span>
              </article>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section faq-section" id="faq">
      <div class="wrap faq-grid">
        <div class="faq-intro">
          <p class="eyebrow" data-reveal>05 — Questions</p>
          <h2 class="section-title" data-reveal data-delay="80">A few things people <em>ask first.</em></h2>
          <p data-reveal data-delay="140">Still unsure where to start? Send a short note about what you are looking to do. The first conversation is simply a conversation.</p>
          <a class="link-arrow" href="/contact/" data-reveal data-delay="200">Ask Suheb ${icon("arrow-right")}</a>
        </div>
        <div class="faq-list" data-accordion data-reveal>
          ${faqs
            .map(
              (faq, i) => `
              <div class="faq-item">
                <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-panel-${i}" id="faq-button-${i}">
                  <span>${faq.q}</span>
                  <span class="faq-icon" aria-hidden="true">${icon("plus")}</span>
                </button>
                <div class="faq-a" id="faq-panel-${i}" role="region" aria-labelledby="faq-button-${i}">
                  <div class="faq-a-inner"><p>${faq.a}</p></div>
                </div>
              </div>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    ${ctaBand({
      eyebrow: "Start here",
      title: "Have a property<br><em>decision to make?</em>",
      text: "Buying. Selling. Investing. Developing. The first step is a conversation about what you are actually trying to achieve.",
      image: images.heroExpertise,
      imageAlt: "Construction and development in Goa",
      primaryLabel: "Book a consultation",
      secondaryLabel: "WhatsApp Suheb",
    })}
    ` +
    foot()
  );
}
