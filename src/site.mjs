export const site = {
  name: "Suheb Naik",
  fullName: "Suheb Naik",
  role: "Founder, Memaar Developers",
  eyebrow: "Real Estate · Development · Investment",
  tagline: "Building Opportunities.",
  domain: "https://suhebnaik.com",
  locale: "en_IN",
  phone: "+91 98220 12345",
  phoneHref: "tel:+919822012345",
  whatsapp: "919822012345",
  email: "suheb@memaar.in",
  address: {
    line1: "Memaar House, 2nd Floor",
    line2: "Patto Plaza, Panjim",
    city: "Goa",
    pincode: "403001",
    country: "India",
    full: "Memaar House, 2nd Floor, Patto Plaza, Panjim, Goa 403001",
  },
  hours: "Mon–Sat · 9:30 am – 7:00 pm IST",
  founded: 2017,
  memaarUrl: "https://memaar.in",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Patto+Plaza+Panjim+Goa+403001",
  socials: {
    instagram: "https://www.instagram.com/suhebnaik",
    linkedin: "https://www.linkedin.com/in/suhebnaik",
    youtube: "https://www.youtube.com/@suhebnaik",
  },
  nav: [
    { href: "/story/", label: "Story" },
    { href: "/expertise/", label: "Expertise" },
    { href: "/developments/", label: "Developments" },
    { href: "/contact/", label: "Contact" },
  ],
  stats: {
    years: "9+",
    projects: "62+",
    states: "4",
    developments: "8",
  },
};

export const images = {
  heroHome: "/assets/img/hero-home.webp",
  heroStory: "/assets/img/hero-story.webp",
  heroExpertise: "/assets/img/hero-expertise.webp",
  heroDevelopments: "/assets/img/hero-developments.webp",
  heroContact: "/assets/img/hero-contact.webp",
  manifesto: "/assets/img/manifesto.webp",
  philosophy: "/assets/img/philosophy.webp",
  memaar: "/assets/img/memaar.webp",
  projectEnia: "/assets/img/project-enia.webp",
  projectVarde: "/assets/img/project-varde.webp",
  projectCasa: "/assets/img/project-casa.webp",
  projectLand: "/assets/img/project-land.webp",
  projectIndustrial: "/assets/img/project-industrial.webp",
  projectRestoration: "/assets/img/project-restoration.webp",
  storyPanjim: "/assets/img/story-panjim.webp",
  expertiseInterior: "/assets/img/expertise-interior.webp",
  contactOffice: "/assets/img/contact-office.webp",
  og: "/assets/img/og.jpg",
};

export const projects = [
  {
    slug: "enia-mila-villa",
    name: "Enia & Mila Villa",
    location: "Aldona, Goa",
    category: "Residential",
    categoryKey: "residential",
    type: "Private villa",
    role: "Contractor",
    year: "2023–24",
    image: images.projectEnia,
    description:
      "A private residential villa executed in partnership with Hindustan Builders — from structure and services through to the finishes that make the house feel complete.",
    featured: true,
  },
  {
    slug: "villa-varde",
    name: "Villa Varde",
    location: "Assagao, Goa",
    category: "Residential",
    categoryKey: "residential",
    type: "Residential villa",
    role: "Developer",
    year: "2022–24",
    image: images.projectVarde,
    description:
      "A residential villa developed in one of North Goa's most considered villages — a project shaped around land, light, privacy and the way the house is actually lived in.",
    featured: true,
  },
  {
    slug: "casa-amora",
    name: "Casa Amora",
    location: "Pirlen, Goa",
    category: "Residential",
    categoryKey: "residential",
    type: "Apartment development",
    role: "Contractor",
    year: "2019–21",
    image: images.projectCasa,
    description:
      "A residential apartment project delivered through construction and execution — a study in planning, services, finishes and the practical details that hold a building together.",
    featured: false,
  },
  {
    slug: "merces-layout",
    name: "42-Plot Layout",
    location: "Merces, Goa",
    category: "Land development",
    categoryKey: "land",
    type: "Plotted development",
    role: "Land development",
    year: "2017",
    image: images.projectLand,
    description:
      "A 42-plot layout development involving the planning, organisation and development of land into a legible, saleable and buildable community.",
    featured: true,
  },
  {
    slug: "gataprabha-industrial",
    name: "Industrial Shed",
    location: "Gataprabha, Karnataka",
    category: "Industrial",
    categoryKey: "industrial",
    type: "Industrial structure",
    role: "Developer",
    year: "2023–24",
    image: images.projectIndustrial,
    description:
      "An industrial development for Seahath Canning — a project where function, access, structure and execution discipline matter more than surface finish.",
    featured: false,
  },
  {
    slug: "sanquelim-restoration",
    name: "Old House Restoration",
    location: "Sanquelim, Goa",
    category: "Restoration",
    categoryKey: "restoration",
    type: "Heritage restoration",
    role: "Restoration",
    year: "2019",
    image: images.projectRestoration,
    description:
      "The restoration of an existing traditional property — working with what is already there, respecting its character while making it useful for the life around it.",
    featured: false,
  },
  {
    slug: "talaulim-land",
    name: "3,500 sqm Land Development",
    location: "Talaulim, Goa",
    category: "Land development",
    categoryKey: "land",
    type: "Land development",
    role: "Land development",
    year: "2022",
    image: images.projectLand,
    description:
      "A land development exercise on a 3,500 sqm property — understanding access, levels, planning potential and the right way to bring the land to market.",
    featured: false,
  },
];

export const currentDevelopments = [
  {
    state: "Goa",
    items: [
      {
        name: "Memaar Mapusa",
        location: "Mapusa",
        scale: "8-storey residential & commercial",
        stage: "Construction",
        progress: 58,
      },
      {
        name: "Oxel",
        location: "Oxel",
        scale: "4 villas",
        stage: "Approval",
        progress: 36,
      },
      {
        name: "Nerul — North",
        location: "Nerul",
        scale: "12,800 sqm land development",
        stage: "Legal",
        progress: 22,
      },
      {
        name: "Nerul — South",
        location: "Nerul",
        scale: "1,350 sqm land development",
        stage: "Legal",
        progress: 22,
      },
      {
        name: "Siolim",
        location: "Siolim",
        scale: "950 sqm heritage-led residence",
        stage: "Development planning",
        progress: 30,
      },
    ],
  },
  {
    state: "Maharashtra",
    items: [
      {
        name: "Satarda",
        location: "Satarda",
        scale: "Senior citizens & special children living centre",
        stage: "Design",
        progress: 34,
      },
      {
        name: "Maneri",
        location: "Maneri",
        scale: "16-acre resort development",
        stage: "Design",
        progress: 28,
      },
      {
        name: "Talekhol",
        location: "Talekhol",
        scale: "10-acre resort development",
        stage: "Design",
        progress: 28,
      },
    ],
  },
  {
    state: "Karnataka",
    items: [
      {
        name: "Belgaum",
        location: "Belgaum",
        scale: "7-acre development",
        stage: "Development",
        progress: 42,
      },
    ],
  },
  {
    state: "Kerala",
    items: [
      {
        name: "Calicut",
        location: "Calicut",
        scale: "72-apartment development",
        stage: "Foundation",
        progress: 24,
      },
    ],
  },
];

export const notes = [
  {
    id: "note-land",
    category: "Land",
    read: "5 min read",
    title: "Five things to check before buying land in Goa",
    excerpt:
      "The photograph shows a view. The documents show whether you can build. Start with the less romantic part.",
    body: `
      <p>Land is the most consequential purchase in a development. It is also the one where buyers most often rely on a brochure, a Google pin and a conversation.</p>
      <p>Before I look at the price, I look at five things.</p>
      <h3>01 — Title and chain of ownership</h3>
      <p>A clean title is not a formality. Ask for the chain of ownership, survey records, mutation entries and encumbrances. A thirty-year search is a reasonable starting point, and a local lawyer should review what you find.</p>
      <h3>02 — Zone, conversion and permitted use</h3>
      <p>The land may be beautiful and still not be buildable for the use you have in mind. Check the zoning, conversion status, setback rules and any restrictions that apply. A plot that cannot be used for your intended purpose is not a bargain at any price.</p>
      <h3>03 — Access</h3>
      <p>Legal access is different from physical access. Is there a registered right of way? Is the approach road wide enough for construction vehicles, emergency services and everyday use? Access problems become expensive later.</p>
      <h3>04 — CRZ, heritage and environmental overlays</h3>
      <p>Goa has coastal regulation zones, heritage precincts, forest edges and other overlays. These are not minor details. They can determine what can be built, where, and at what cost. Verify before you commit.</p>
      <h3>05 — Levels, water and what is actually under the ground</h3>
      <p>Walk the land in the monsoon if you can. Look at slope, drainage, waterlogging, rock, and the cost of getting services to the site. The ground conditions will show up in your construction budget.</p>
      <p class="note-close">The asking price tells you what the land costs today. These checks tell you what it will really take to make it useful. This note is a starting point, not legal advice.</p>
    `,
  },
  {
    id: "note-value",
    category: "Value",
    read: "4 min read",
    title: "Why two plots in the same village can have very different values",
    excerpt:
      "Location is not a pin on a map. Two properties a few hundred metres apart can behave like different markets.",
    body: `
      <p>Buyers often compare land by the square metre and the village name. The market is more specific than that.</p>
      <p>Two plots in the same village can differ in value because of factors that do not appear in the rate card.</p>
      <h3>Access and approach</h3>
      <p>A plot on a narrow, shared approach is not the same as one on a properly registered road. The difference affects construction logistics, privacy and future resale.</p>
      <h3>Shape, levels and orientation</h3>
      <p>A rectangular, level plot is easier to plan than an irregular plot with a steep fall. Retaining walls, cut and fill, and drainage all cost money. Orientation affects light, heat and how the house can be arranged.</p>
      <h3>What surrounds it</h3>
      <p>A quiet edge, a protected view, a neighbouring commercial use, a future road reservation — these change the experience of living there and the pool of future buyers.</p>
      <h3>Approvals and clearances</h3>
      <p>A plot that is ready to build carries a different risk profile from one that still needs conversion, access or environmental clearance. Time and uncertainty have a cost.</p>
      <h3>The market it actually serves</h3>
      <p>Is this a local end-user plot, a holiday-home plot, or a development parcel? Each has a different buyer, ticket size and exit. The right comparison is the one that matches the use.</p>
      <p class="note-close">The best way to value land is not a single rate. It is a short list of what can and cannot be done with it.</p>
    `,
  },
  {
    id: "note-construction",
    category: "Construction",
    read: "4 min read",
    title: "What construction taught me about real-estate investment",
    excerpt:
      "A building is not an image. It is a set of decisions, costs and details that keep arriving after the brochure is printed.",
    body: `
      <p>When you have spent years on site, you stop looking at property the way a brochure presents it.</p>
      <p>You start looking at the things that will determine whether the asset performs.</p>
      <h3>The cost is not the price</h3>
      <p>The purchase price is the entry ticket. Construction, approvals, services, interiors, landscaping, maintenance and time all sit on top of it. A project can look expensive on paper and still be efficient; another can look cheap and absorb the difference in execution.</p>
      <h3>Waterproofing is an investment decision</h3>
      <p>In Goa, the monsoon is not a season you design around later. It is a design condition. Roofs, terraces, windows, drainage and ventilation are not finishing items. They are the difference between a home that ages well and one that keeps asking for money.</p>
      <h3>Services are part of the product</h3>
      <p>Electrical load, plumbing, water storage, sewage, lifts, parking and backup are not glamorous. They are also the first things a tenant or buyer notices when they fail.</p>
      <h3>Maintenance changes the yield</h3>
      <p>A second home that is empty for months needs someone to open it, check it and repair it. If the asset is rented, the operating model matters as much as the location. Factor in the people and systems that keep it working.</p>
      <h3>The exit is designed early</h3>
      <p>The best time to think about resale is before you build. Who will want this property next? What will they compare it with? What will make it easy to say yes? Those questions shape the product, not the other way around.</p>
      <p class="note-close">Construction teaches you to look past the image. That is the lens I bring to an investment conversation.</p>
    `,
  },
];

export const faqs = [
  {
    q: "Who is Suheb Naik?",
    a: "Suheb Naik is a Goa-based construction professional, real-estate entrepreneur and developer. He is the founder of Memaar Developers and has been active in the construction and real-estate sector since 2017, with involvement in 62+ projects across residential, commercial, industrial, restoration, infrastructure and land development.",
  },
  {
    q: "Is Suheb Naik the founder of Memaar Developers?",
    a: "Yes. Suheb Naik is the founder of Memaar Developers, the real-estate development platform through which he works on land opportunities, feasibility, concepts and projects across Goa, Maharashtra, Karnataka and Kerala.",
  },
  {
    q: "What does Suheb Naik help with?",
    a: "He works across four broad conversations: buying property, selling land or property, evaluating real-estate investment, and developing land. The common thread is understanding the opportunity before making the decision.",
  },
  {
    q: "Which locations does he work in?",
    a: "The home market is Goa. Current development interests extend across selected markets in Maharashtra, Karnataka and Kerala. Advisory conversations can begin wherever the property or the opportunity is.",
  },
  {
    q: "How do I start a conversation?",
    a: "Use the contact form or WhatsApp with a short note about what you are looking to do — buy, sell, invest or develop — along with the location and an approximate budget or land size. You will get a straight response, usually within one working day.",
  },
  {
    q: "Does he only work on Memaar projects?",
    a: "No. Memaar is the development platform, but the work also includes advisory conversations with buyers, landowners, investors and development partners. The first step is to understand the property and the objective, not to push a particular project.",
  },
];

export const milestones = [
  {
    year: "2013–15",
    chapter: "Chapter 01",
    title: "The student leader",
    text: "At Government Polytechnic, Panjim, Suheb was elected General Secretary in 2015. He organised a national-level technical paper presentation and expo, brought industry to the campus, and invited the Chief Minister to visit the college for the first time. The early lesson was simple: a vision becomes real through organisation, people and follow-through.",
    image: images.heroStory,
    alt: "Construction site and project work in Goa",
  },
  {
    year: "2013–16",
    chapter: "Chapter 02",
    title: "Learning business the hard way",
    text: "Before construction, there were experiments: mobile and scrap dealing, goat farming, fish breeding, Meal Hunt, a biryani venture, Eagle Agro, Ganga Agro, coconut distribution and a campus canteen. Some worked for a while. Some did not. The lesson was never failure — it was what the market, the customer and the operation taught him next.",
    image: images.projectLand,
    alt: "Open land and early development work",
  },
  {
    year: "2017",
    chapter: "Chapter 03",
    title: "Interiors, then site",
    text: "The professional journey began with interiors through Workzplus. Working closely with homes and spaces built an early understanding of how design affects the way people live. From there, the work moved into contracting and project execution through ASN Associates — from drawings on a table to decisions on a live site.",
    image: images.expertiseInterior,
    alt: "Interior detail in a completed home",
  },
  {
    year: "2019–25",
    chapter: "Chapter 04",
    title: "62+ projects, one foundation",
    text: "Across residential, commercial, industrial, restoration, infrastructure and land development, the work added up to more than 62 projects. Villas, apartments, homes, roads, industrial sheds, old-house restorations and plotted layouts. Different scales, different challenges, the same foundation: practical experience.",
    image: images.heroExpertise,
    alt: "Construction and project execution",
  },
  {
    year: "Today",
    chapter: "Chapter 05",
    title: "From executing to developing",
    text: "Through Memaar, the next chapter is development: identifying land, testing feasibility, shaping concepts and bringing projects to life across Goa, Maharashtra, Karnataka and Kerala. The question has not changed. It has simply moved earlier in the process: what can this land become?",
    image: images.memaar,
    alt: "Contemporary architecture and development",
  },
];

export const values = [
  {
    number: "01",
    title: "Build first",
    text: "Understand what it takes to actually make the thing. The drawing, the cost, the site and the finish are connected. A decision that ignores any of them is incomplete.",
  },
  {
    number: "02",
    title: "Ask better questions",
    text: "The first question is rarely the most useful one. Before the price, ask about access, potential, risk and what the property could become.",
  },
  {
    number: "03",
    title: "Stay accountable",
    text: "A project does not end at the handover or the transaction. The details after the decision are where a reputation is actually built.",
  },
  {
    number: "04",
    title: "Keep learning",
    text: "Every project, every market and every conversation adds something. The work is to stay curious enough to use it.",
  },
];
