(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  var S = C.shared;
  var LANGS = ["en", "he"];
  var STORAGE_KEY = "portfolio-lang";
  var activeFilter = null;

  // ---- helpers -------------------------------------------------------------

  function get(obj, path) {
    return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  function readStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function storeLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    var stored = readStoredLang();
    if (LANGS.indexOf(stored) !== -1) return stored;
    return /^he|^iw/i.test(navigator.language || "") ? "he" : "en";
  }

  // ---- rendering -----------------------------------------------------------

  // "plain *highlighted* plain" -> text nodes plus <span class="highlight">
  function setHighlighted(node, text) {
    node.textContent = "";
    text.split("*").forEach(function (part, i) {
      if (!part) return;
      node.appendChild(i % 2 ? el("span", "highlight", part) : document.createTextNode(part));
    });
  }

  function renderStatic(T) {
    each("[data-t]", function (node) {
      var value = get(T, node.getAttribute("data-t"));
      if (typeof value !== "string") return;
      if (node.hasAttribute("data-highlight")) setHighlighted(node, value);
      else node.textContent = value;
    });
  }

  function renderLinks(T) {
    var wa = "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(T.whatsappMessage);
    each(".js-whatsapp", function (a) { a.href = wa; });
    each(".js-email", function (a) { a.href = "mailto:" + S.email; });
    each(".js-linkedin", function (a) { a.href = S.linkedin; });
    each(".js-cv", function (a) {
      a.href = S.cvUrl;
      a.hidden = !S.cvUrl || S.cvUrl === "#";
    });
    var img = document.querySelector(".js-portrait");
    img.src = S.portrait;
    img.alt = T.name;
    document.querySelector(".js-year").textContent = new Date().getFullYear();
  }

  function renderClients() {
    var track = document.querySelector(".js-clients");
    track.textContent = "";
    // Two copies so the marquee loops seamlessly; the second is hidden from screen readers.
    [false, true].forEach(function (isCopy) {
      var list = el("ul", "client-list");
      if (isCopy) list.setAttribute("aria-hidden", "true");
      S.clients.forEach(function (c) {
        var li = el("li", "client");
        if (c.logo) {
          var img = el("img");
          img.src = c.logo;
          img.alt = isCopy ? "" : c.name;
          img.loading = "lazy";
          li.appendChild(img);
        } else {
          li.textContent = c.name;
        }
        list.appendChild(li);
      });
      track.appendChild(list);
    });
  }

  function renderProjects(T) {
    var P = T.projects;
    var categories = [];
    P.items.forEach(function (p) {
      if (categories.indexOf(p.category) === -1) categories.push(p.category);
    });
    if (categories.indexOf(activeFilter) === -1) activeFilter = null;

    var filters = document.querySelector(".js-filters");
    filters.textContent = "";
    [null].concat(categories).forEach(function (cat) {
      var b = el("button", "filter", cat || P.all);
      b.type = "button";
      b.setAttribute("aria-pressed", String(cat === activeFilter));
      b.addEventListener("click", function () {
        activeFilter = cat;
        renderProjects(T);
      });
      filters.appendChild(b);
    });

    var grid = document.querySelector(".js-projects");
    grid.textContent = "";
    P.items.forEach(function (p, i) {
      if (activeFilter && p.category !== activeFilter) return;
      var card = el(p.link ? "a" : "article", "project-card");
      if (p.link) { card.href = p.link; card.target = "_blank"; card.rel = "noopener"; }

      var media = el("div", "project-media tone-" + (i % 4));
      if (p.image) {
        var img = el("img");
        img.src = p.image;
        img.alt = "";
        img.loading = "lazy";
        media.appendChild(img);
      } else {
        media.appendChild(el("span", "project-initial", p.category.charAt(0)));
      }
      card.appendChild(media);

      var body = el("div", "project-body");
      body.appendChild(el("span", "tag", p.category));
      body.appendChild(el("h3", null, p.title));
      body.appendChild(el("p", null, p.summary));
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function renderAbout(T) {
    var box = document.querySelector(".js-about");
    box.textContent = "";
    T.about.paragraphs.forEach(function (text) { box.appendChild(el("p", null, text)); });
  }

  function renderExperience(T) {
    var list = document.querySelector(".js-experience");
    list.textContent = "";
    T.experience.items.forEach(function (x) {
      var li = el("li", "timeline-item reveal");
      li.appendChild(el("span", "timeline-period", x.period));
      var h = el("h3", null, x.role);
      h.appendChild(el("span", "timeline-org", " · " + x.org));
      li.appendChild(h);
      li.appendChild(el("p", null, x.text));
      list.appendChild(li);
    });
  }

  function render(lang) {
    var T = C[lang];
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "he" ? "rtl" : "ltr";
    document.title = T.meta.title;
    document.querySelector('meta[name="description"]').content = T.meta.description;

    var toggle = document.querySelector(".lang-toggle");
    toggle.lang = lang === "he" ? "en" : "he";
    toggle.setAttribute("aria-label", T.langToggleLabel);
    toggle.onclick = function () { setLang(lang === "he" ? "en" : "he"); };

    renderStatic(T);
    renderLinks(T);
    renderClients();
    renderProjects(T);
    renderAbout(T);
    renderExperience(T);
    observeReveals();
  }

  function setLang(lang) {
    storeLang(lang);
    render(lang);
  }

  // ---- behaviour -----------------------------------------------------------

  var observer = "IntersectionObserver" in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -10% 0px" })
    : null;

  function observeReveals() {
    each(".reveal:not(.is-visible)", function (node) {
      if (observer) observer.observe(node); else node.classList.add("is-visible");
    });
  }

  function initMenu() {
    var btn = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    function close() {
      btn.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  // Drives the intro -> About panel transition (--intro-p, 0..1) and keeps the
  // header hidden while only the name is on screen.
  function initScroll() {
    var root = document.documentElement;
    var header = document.querySelector(".site-header");
    var intro = document.querySelector(".intro");
    var queued = false;

    function update() {
      queued = false;
      var h = intro.offsetHeight || window.innerHeight;
      var y = window.scrollY;
      root.style.setProperty("--intro-p", Math.min(1, Math.max(0, y / h)).toFixed(3));
      header.classList.toggle("is-hidden", y < h * 0.5);
      header.classList.toggle("is-scrolled", y > h * 0.5);
    }
    function queue() {
      if (!queued) { queued = true; window.requestAnimationFrame(update); }
    }
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    update();
  }

  document.documentElement.classList.add("js");
  initMenu();
  initScroll();
  render(initialLang());
})();
