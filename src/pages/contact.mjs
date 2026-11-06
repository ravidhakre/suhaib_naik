import { site, images } from "../site.mjs";
import { head, foot, pageHero, ctaBand, icon, abs } from "../layout.mjs";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${site.domain}/contact/#contact`,
    url: `${site.domain}/contact/`,
    name: "Contact Suheb Naik — Property Consultation in Goa",
    description:
      "Start a conversation with Suheb Naik, founder of Memaar Developers, about buying, selling, investing or developing property in Goa.",
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
      telephone: site.phone,
      email: site.email,
      url: `${site.domain}/`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Memaar House, 2nd Floor, Patto Plaza",
        addressLocality: "Panjim",
        addressRegion: "Goa",
        postalCode: "403001",
        addressCountry: "IN",
      },
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
        name: "Contact",
        item: `${site.domain}/contact/`,
      },
    ],
  },
];

const intents = [
  { value: "Buy property", label: "Buy" },
  { value: "Sell property", label: "Sell" },
  { value: "Invest", label: "Invest" },
  { value: "Develop land", label: "Develop" },
  { value: "JV / Partnership", label: "JV / Partner" },
  { value: "Something else", label: "Other" },
];

export function render() {
  return (
    head({
      title: "Contact Suheb Naik — Property Consultation in Goa",
      description:
        "Start a conversation with Suheb Naik, founder of Memaar Developers, about buying, selling, investing or developing property in Goa. Call, WhatsApp or send an enquiry.",
      path: "/contact/",
      image: images.og,
      keywords:
        "contact Suheb Naik, Suheb Naik WhatsApp, Memaar founder contact, Goa property consultation, real estate consultation Goa",
      jsonLd,
      bodyClass: "page-contact dark-hero",
    }) +
    pageHero({
      eyebrow: "Contact · Start a conversation",
      title: `
        <span class="line-mask"><span>Start with</span></span>
        <span class="line-mask"><span><em>a conversation.</em></span></span>`,
      intro:
        "A property decision deserves more than a brochure. Tell me what you are trying to do, and we will start with the questions that matter.",
      image: images.heroContact,
      imageAlt: "Panjim, Goa",
      compact: true,
    }) +
    `
    <section class="contact-quick" aria-label="Contact details">
      <div class="wrap contact-quick-grid">
        <a class="quick-item" href="${site.phoneHref}">
          <span class="quick-icon">${icon("phone")}</span>
          <span><span class="quick-label">Direct line</span><strong>${site.phone}</strong></span>
        </a>
        <a class="quick-item" href="mailto:${site.email}">
          <span class="quick-icon">${icon("mail")}</span>
          <span><span class="quick-label">Email</span><strong>${site.email}</strong></span>
        </a>
        <a class="quick-item" href="${site.mapsUrl}" target="_blank" rel="noopener">
          <span class="quick-icon">${icon("map-pin")}</span>
          <span><span class="quick-label">Office</span><strong>Panjim, Goa</strong></span>
        </a>
        <div class="quick-item">
          <span class="quick-icon">${icon("clock")}</span>
          <span><span class="quick-label">Response</span><strong>Within 1 working day</strong></span>
        </div>
      </div>
    </section>

    <section class="section contact-section" id="content">
      <div class="wrap contact-grid">
        <div class="contact-form-wrap" data-reveal>
          <p class="eyebrow">01 — Your enquiry</p>
          <h2 class="section-title">What are you looking to do?</h2>
          <p class="contact-form-intro">Share a little context. The more specific the note, the more useful the first conversation.</p>

          <form class="contact-form" data-whatsapp-form data-whatsapp="${site.whatsapp}" data-email="${site.email}" novalidate>
            <fieldset class="intent-group">
              <legend class="form-label">Choose one</legend>
              <div class="intent-chips">
                ${intents
                  .map(
                    (intent, i) => `
                    <label class="chip">
                      <input type="radio" name="intent" value="${intent.value}"${i === 0 ? " checked" : ""}>
                      <span>${intent.label}</span>
                    </label>`,
                  )
                  .join("")}
              </div>
            </fieldset>

            <div class="form-grid">
              <label class="field">
                <span>Your name <em>*</em></span>
                <input type="text" name="name" required autocomplete="name" placeholder="Full name">
              </label>
              <label class="field">
                <span>Phone / WhatsApp <em>*</em></span>
                <input type="tel" name="phone" required autocomplete="tel" placeholder="+91">
              </label>
              <label class="field">
                <span>Email</span>
                <input type="email" name="email" autocomplete="email" placeholder="you@example.com">
              </label>
              <label class="field">
                <span>Location</span>
                <input type="text" name="location" placeholder="Area, city or state">
              </label>
              <label class="field field-full">
                <span>Approximate budget / land size</span>
                <input type="text" name="budget" placeholder="e.g. ₹1.5–2.5 Cr, or 1,000 sqm">
              </label>
              <label class="field field-full">
                <span>What would you like to discuss?</span>
                <textarea name="message" rows="4" placeholder="A short note about the property, the opportunity or the decision..."></textarea>
              </label>
            </div>

            <div class="form-foot">
              <button class="btn btn-dark" type="submit">Send via WhatsApp ${icon("whatsapp")}</button>
              <p class="form-note">This opens WhatsApp with your enquiry ready to send. Prefer email? <a href="mailto:${site.email}" data-mailto-link>Write to Suheb</a>.</p>
            </div>
            <div class="form-status" role="status" aria-live="polite" data-form-status></div>
          </form>
        </div>

        <aside class="contact-aside">
          <div class="contact-card" data-reveal data-delay="100">
            <p class="eyebrow">02 — Direct</p>
            <h3>Speak to Suheb.</h3>
            <p>The first conversation is a straightforward discussion about what you are trying to achieve, what the property is, and whether it makes sense.</p>
            <div class="contact-lines">
              <a href="${site.phoneHref}">${icon("phone")}<span>${site.phone}</span></a>
              <a href="mailto:${site.email}">${icon("mail")}<span>${site.email}</span></a>
              <a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")}<span>WhatsApp</span></a>
            </div>
          </div>

          <div class="contact-card contact-card-dark" data-reveal data-delay="160">
            <p class="eyebrow eyebrow-light">03 — What happens next</p>
            <ol class="next-steps">
              <li><span>01</span><div><strong>You share the context.</strong><p>What you are looking to do, where, and roughly what scale.</p></div></li>
              <li><span>02</span><div><strong>We have a first conversation.</strong><p>A call or meeting to understand the property and the objective.</p></div></li>
              <li><span>03</span><div><strong>You get a straight view.</strong><p>What is possible, what to check, and what the next sensible step is.</p></div></li>
            </ol>
          </div>

          <div class="contact-card" data-reveal data-delay="220">
            <p class="eyebrow">04 — The office</p>
            <p class="contact-address">${site.address.line1}<br>${site.address.line2}, ${site.address.city} ${site.address.pincode}</p>
            <p class="contact-hours">${site.hours}</p>
            <a class="link-arrow" href="${site.mapsUrl}" target="_blank" rel="noopener">Open in Google Maps ${icon("arrow-up-right")}</a>
          </div>
        </aside>
      </div>
    </section>

    <section class="contact-map-section">
      <div class="wrap">
        <div class="contact-map-head" data-reveal>
          <p class="eyebrow">05 — Find us</p>
          <p>Memaar House, Patto Plaza, Panjim. Visits by appointment.</p>
        </div>
        <div class="contact-map" data-reveal>
          <iframe
            title="Map showing Patto Plaza, Panjim, Goa"
            src="https://www.google.com/maps?q=Patto+Plaza,+Panjim,+Goa+403001&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="contact-note-section">
      <div class="wrap contact-note-inner">
        <span class="contact-note-mark" aria-hidden="true">SN</span>
        <p class="contact-note" data-reveal>&ldquo;Every enquiry is read personally. If it is relevant, you will hear back from me or the team — not from an automated sequence.&rdquo;</p>
        <p class="contact-note-role" data-reveal>Suheb Naik · Founder, Memaar Developers</p>
      </div>
    </section>

    ${ctaBand({
      eyebrow: "Prefer a direct conversation?",
      title: "Call or WhatsApp.<br><em>Either works.</em>",
      text: "If it is easier to talk it through, use the phone. A short conversation often saves a long search.",
      image: images.heroContact,
      imageAlt: "Panjim, Goa",
      primaryLabel: "Call Suheb",
      primaryHref: site.phoneHref,
      secondaryLabel: "WhatsApp Suheb",
      secondaryHref: `https://wa.me/${site.whatsapp}`,
    })}
    ` +
    foot()
  );
}
