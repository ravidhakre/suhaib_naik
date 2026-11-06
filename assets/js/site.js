/* ==========================================================================
   Suheb Naik — interaction layer
   Progressive enhancement: works without JS, richer with it.
   ========================================================================== */
(() => {
  "use strict";

  const html = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  /* ------------------------------------------------------------------------
     Preloader
     ------------------------------------------------------------------------ */
  const preloader = $("#preloader");
  let pageReady = false;

  const showPage = () => {
    if (pageReady) return;
    pageReady = true;
    body.classList.remove("is-loading");
    body.classList.add("is-ready");
    if (preloader) {
      preloader.classList.add("is-done");
      window.setTimeout(() => preloader.remove(), 1200);
    }
  };

  if (preloader) body.classList.add("is-loading");

  window.addEventListener("load", () => window.setTimeout(showPage, 420));
  window.setTimeout(showPage, 2200);

  if (document.readyState === "complete") {
    window.setTimeout(showPage, 420);
  }

  /* ------------------------------------------------------------------------
     Header state + scroll progress
     ------------------------------------------------------------------------ */
  const header = $("[data-header]");
  const progress = $("[data-scroll-progress]");
  let lastScroll = window.scrollY;
  let scrollTicking = false;

  function onScroll() {
    const y = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
      if (
        y > lastScroll + 6 &&
        y > 420 &&
        !body.classList.contains("menu-open") &&
        !body.classList.contains("dialog-open")
      ) {
        header.classList.add("is-hidden");
      } else if (y < lastScroll - 6 || y < 160) {
        header.classList.remove("is-hidden");
      }
    }

    if (progress) {
      const ratio = docHeight > 0 ? Math.min(y / docHeight, 1) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }

    updateParallax();
    lastScroll = y;
    scrollTicking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(onScroll);
      }
    },
    { passive: true },
  );

  /* ------------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------------ */
  const menu = $("[data-mobile-menu]");
  const menuToggle = $("[data-menu-toggle]");
  let lastFocused = null;

  function openMenu() {
    if (!menu || !menuToggle) return;
    lastFocused = document.activeElement;
    body.classList.add("menu-open");
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    header?.classList.remove("is-hidden");
    const firstLink = $(".mobile-link", menu);
    window.setTimeout(() => firstLink?.focus({ preventScroll: true }), 240);
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (!menu || !menuToggle) return;
    body.classList.remove("menu-open");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    if (restoreFocus && lastFocused instanceof HTMLElement) {
      lastFocused.focus({ preventScroll: true });
    }
  }

  menuToggle?.addEventListener("click", () => {
    if (menu?.classList.contains("is-open")) closeMenu();
    else openMenu();
  });

  $$("a", menu || document.createElement("div")).forEach((link) => {
    link.addEventListener("click", () => closeMenu({ restoreFocus: false }));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080 && body.classList.contains("menu-open")) {
      closeMenu({ restoreFocus: false });
    }
  });

  /* ------------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------------ */
  const revealItems = $$("[data-reveal]");

  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number.parseInt(el.dataset.delay || "0", 10);
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    revealItems.forEach((el) => revealObserver.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }

  // Failsafe for throttled/background tabs where IntersectionObserver callbacks
  // can be delayed: never leave above-the-fold content invisible.
  const revealInViewport = () => {
    revealItems.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.02 && rect.bottom > -60) {
        el.classList.add("is-visible");
      }
    });
  };

  window.setTimeout(revealInViewport, 1500);
  window.addEventListener("load", () => window.setTimeout(revealInViewport, 700));

  /* ------------------------------------------------------------------------
     Parallax
     ------------------------------------------------------------------------ */
  const parallaxItems = $$("[data-parallax]");
  let parallaxActive = !reduceMotion && window.innerWidth > 900;

  function updateParallax() {
    if (!parallaxActive || !parallaxItems.length) return;
    const viewport = window.innerHeight;

    parallaxItems.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.bottom < -160 || rect.top > viewport + 160) return;
      const speed = Number.parseFloat(img.dataset.parallax) || 0.05;
      const offset = (rect.top + rect.height / 2 - viewport / 2) * speed;
      img.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.08)`;
    });
  }

  window.addEventListener("resize", () => {
    parallaxActive = !reduceMotion && window.innerWidth > 900;
    if (!parallaxActive) {
      parallaxItems.forEach((img) => {
        img.style.transform = "";
      });
    }
  });

  /* ------------------------------------------------------------------------
     Service hover preview
     ------------------------------------------------------------------------ */
  const previewContainer = $("[data-preview-container]");
  const preview = $("[data-hover-preview]");
  const previewImage = $("[data-hover-preview-img]");

  if (previewContainer && preview && previewImage && finePointer && !reduceMotion) {
    const rows = $$("[data-preview]", previewContainer);

    rows.forEach((row) => {
      row.addEventListener("mouseenter", () => {
        previewImage.src = row.dataset.preview || "";
        previewImage.alt = "";
        preview.classList.add("is-active");
      });
    });

    previewContainer.addEventListener("mousemove", (event) => {
      preview.style.left = `${event.clientX}px`;
      preview.style.top = `${event.clientY}px`;
    });

    previewContainer.addEventListener("mouseleave", () => {
      preview.classList.remove("is-active");
    });

    window.addEventListener("scroll", () => preview.classList.remove("is-active"), {
      passive: true,
    });
  }

  /* ------------------------------------------------------------------------
     Article dialogs
     ------------------------------------------------------------------------ */
  $$("[data-dialog-open]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.dialogOpen);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
        body.classList.add("dialog-open");
      }
    });
  });

  $$(".note-dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      body.classList.remove("dialog-open");
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  $$("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest("dialog")?.close();
      body.classList.remove("dialog-open");
    });
  });

  /* ------------------------------------------------------------------------
     FAQ accordion
     ------------------------------------------------------------------------ */
  $$("[data-accordion]").forEach((accordion) => {
    const items = $$(".faq-item", accordion);

    items.forEach((item) => {
      const button = $(".faq-q", item);
      const panel = $(".faq-a", item);
      if (!button || !panel) return;

      button.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        items.forEach((other) => {
          if (other === item) return;
          other.classList.remove("is-open");
          $(".faq-q", other)?.setAttribute("aria-expanded", "false");
          const otherPanel = $(".faq-a", other);
          if (otherPanel) otherPanel.style.maxHeight = "";
        });

        item.classList.toggle("is-open", !isOpen);
        button.setAttribute("aria-expanded", String(!isOpen));
        panel.style.maxHeight = isOpen ? "" : `${panel.scrollHeight}px`;
      });
    });

    window.addEventListener("resize", () => {
      items.forEach((item) => {
        if (!item.classList.contains("is-open")) return;
        const panel = $(".faq-a", item);
        if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
      });
    });
  });

  /* ------------------------------------------------------------------------
     Project filters
     ------------------------------------------------------------------------ */
  const filterBar = $(".filter-bar");
  const projectGrid = $("[data-project-grid]");

  if (filterBar && projectGrid) {
    const buttons = $$("[data-filter]", filterBar);
    const cards = $$(".project-card", projectGrid);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        buttons.forEach((other) => {
          const active = other === button;
          other.classList.toggle("is-active", active);
          other.setAttribute("aria-selected", String(active));
        });

        cards.forEach((card) => {
          const show = filter === "all" || card.dataset.category === filter;
          card.classList.toggle("is-filtered", !show);
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     Contact form → WhatsApp
     ------------------------------------------------------------------------ */
  const form = $("[data-whatsapp-form]");

  if (form) {
    const status = $("[data-form-status]", form);
    const phoneNumber = form.dataset.whatsapp || "";
    const emailAddress = form.dataset.email || "";
    const params = new URLSearchParams(window.location.search);

    const intentMap = {
      buy: "buy",
      sell: "sell",
      invest: "invest",
      develop: "develop",
      jv: "jv",
      partner: "jv",
    };

    const intentKey = (params.get("intent") || "").toLowerCase();
    if (intentMap[intentKey]) {
      const wanted = intentMap[intentKey];
      const radio = $$('input[name="intent"]', form).find((input) =>
        wanted === "jv"
          ? input.value.toLowerCase().includes("jv")
          : input.value.toLowerCase().startsWith(wanted),
      );
      if (radio) radio.checked = true;
    }

    const project = params.get("project");
    const messageField = form.elements.namedItem("message");
    if (project && messageField instanceof HTMLTextAreaElement && !messageField.value) {
      const readable = project.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
      messageField.value = `I would like to discuss a project similar to ${readable}.`;
    }

    const setStatus = (text, type = "") => {
      if (!status) return;
      status.textContent = text;
      status.classList.remove("is-error", "is-success");
      if (type) status.classList.add(`is-${type}`);
    };

    const markInvalid = (field, invalid) => {
      field?.closest(".field")?.classList.toggle("is-invalid", invalid);
    };

    form.addEventListener("input", (event) => {
      const field = event.target;
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.closest(".field")?.classList.remove("is-invalid");
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const email = String(data.get("email") || "").trim();
      const location = String(data.get("location") || "").trim();
      const budget = String(data.get("budget") || "").trim();
      const message = String(data.get("message") || "").trim();
      const intent = String(data.get("intent") || "General enquiry").trim();

      const nameField = form.elements.namedItem("name");
      const phoneField = form.elements.namedItem("phone");

      const nameInvalid = name.length < 2;
      const phoneInvalid = phone.replace(/\D/g, "").length < 7;

      markInvalid(nameField, nameInvalid);
      markInvalid(phoneField, phoneInvalid);

      if (nameInvalid || phoneInvalid) {
        setStatus("Please add your name and a phone number so Suheb can reply.", "error");
        const target = nameInvalid ? nameField : phoneField;
        if (target instanceof HTMLElement) target.focus();
        return;
      }

      const lines = [
        "Hello Suheb,",
        "",
        `I would like to discuss: ${intent}`,
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
      ];

      if (email) lines.push(`Email: ${email}`);
      if (location) lines.push(`Location: ${location}`);
      if (budget) lines.push(`Budget / land size: ${budget}`);
      if (message) lines.push("", "Details:", message);

      lines.push("", "Sent from suhebnaik.com");

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        lines.join("\n"),
      )}`;

      setStatus("Opening WhatsApp with your enquiry ready to send…", "success");
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      body.dataset.lastEnquiry = new Date().toISOString();
      if (emailAddress) {
        const mailLink = $("[data-mailto-link]", form);
        if (mailLink) {
          const subject = `Property enquiry — ${intent}`;
          const bodyText = lines.slice(2).join("\n");
          mailLink.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
            subject,
          )}&body=${encodeURIComponent(bodyText)}`;
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     Page transition veil
     ------------------------------------------------------------------------ */
  const veil = $("[data-route-veil]") || $("#routeVeil");
  let navigating = false;

  if (veil && !reduceMotion) {
    document.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest("a[href]");
      if (!link) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.protocol !== "http:" && url.protocol !== "https:") return;

      const samePage =
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        !!url.hash;
      if (samePage) return;

      if (navigating) {
        event.preventDefault();
        return;
      }

      navigating = true;
      veil.classList.add("is-active");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 470);
    });

    window.addEventListener("pageshow", () => {
      navigating = false;
      veil.classList.remove("is-active");
    });
  }

  /* ------------------------------------------------------------------------
     Custom cursor
     ------------------------------------------------------------------------ */
  if (finePointer && !reduceMotion && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const dot = $("[data-cursor-dot]");
    const ring = $("[data-cursor-ring]");

    if (dot && ring) {
      html.classList.add("has-cursor");

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let ringX = mouseX;
      let ringY = mouseY;

      window.addEventListener(
        "mousemove",
        (event) => {
          mouseX = event.clientX;
          mouseY = event.clientY;
          dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        },
        { passive: true },
      );

      const renderCursor = () => {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        window.requestAnimationFrame(renderCursor);
      };
      window.requestAnimationFrame(renderCursor);

      document.addEventListener("mouseover", (event) => {
        const target = event.target.closest("a, button, [data-cursor]");
        if (!target) {
          ring.classList.remove("is-hover", "is-view");
          return;
        }
        ring.classList.add("is-hover");
        const isView = target.matches(".work-card, .project-card, .timeline-media, .cta-band");
        ring.classList.toggle("is-view", isView);
      });

      document.addEventListener("mouseleave", () => html.classList.add("is-leaving"));
      document.addEventListener("mouseenter", () => html.classList.remove("is-leaving"));
    }
  }

  /* ------------------------------------------------------------------------
     Back to top
     ------------------------------------------------------------------------ */
  $("[data-back-to-top]")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ------------------------------------------------------------------------
     Initial paint
     ------------------------------------------------------------------------ */
  onScroll();
  updateParallax();
})();
