/* Shared UI: HUD nav, neon logo, avatar, footer and the "bowl it" lane transition. */
(function () {
  const P = window.PORTFOLIO;
  const me = P.profile;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Renders text; anything still starting with "TODO:" gets a visible dashed outline.
  const t = (s) => {
    const str = String(s ?? "");
    if (/^TODO\b/.test(str)) {
      const clean = str.replace(/^TODO:?\s*/, "");
      return `<span class="todo" title="Placeholder — edit js/data.js">${esc(clean || "Add content")}</span>`;
    }
    return esc(str);
  };
  const isTodo = (s) => /^TODO\b/.test(String(s ?? ""));

  const img = (im, cls = "") => {
    if (im && im.src) {
      return `<figure class="shot ${cls}"><img src="${esc(im.src)}" alt="${esc(im.caption || "")}" loading="lazy">${
        im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ""
      }</figure>`;
    }
    return `<figure class="shot shot--empty ${cls}"><div class="shot-ph"><span>Add image</span><small>${esc(
      im?.caption || ""
    )}</small></div>${im?.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ""}</figure>`;
  };

  /* ---------- SVG pieces ---------- */
  const PIN_PATH =
    "M12 0C6.5 0 5.6 6 6.4 12c.7 5 1.8 8-.6 14C2.2 35 .4 45 1.8 55 3 64 6.4 70 12 70s9-6 10.2-15c1.4-10-.4-20-4-29-2.4-6-1.3-9-.6-14C18.4 6 17.5 0 12 0Z";

  const pinSVG = (cls = "") =>
    `<svg class="pin ${cls}" viewBox="-2 -2 28 74" aria-hidden="true"><path d="${PIN_PATH}" fill="#f7f4fb" stroke="#1a1426" stroke-width="2"/><path d="M6.3 15.5h11.4M6.6 19h10.8" stroke="#e8304f" stroke-width="2.2"/></svg>`;

  const ballSVG = (color = "#ff2fb4", cls = "") =>
    `<svg class="ball ${cls}" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="g${color.slice(1)}" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".25" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity=".55"/></radialGradient></defs><circle cx="50" cy="50" r="46" fill="${color}"/><circle cx="50" cy="50" r="46" fill="url(#g${color.slice(1)})"/><g class="ball-holes" fill="#1a1426"><circle cx="40" cy="38" r="6"/><circle cx="58" cy="36" r="6"/><circle cx="50" cy="56" r="7"/></g></svg>`;

  const logoMark = () =>
    `<svg class="logo-mark" viewBox="0 0 120 90" aria-hidden="true">
      <g transform="translate(18 4) rotate(-14 12 35)"><path d="${PIN_PATH}" fill="#14101c" stroke="#fff" stroke-width="3"/></g>
      <g transform="translate(44 0) rotate(6 12 35)"><path d="${PIN_PATH}" fill="#14101c" stroke="#fff" stroke-width="3"/></g>
      <circle cx="88" cy="60" r="24" fill="#14101c" stroke="#ff2fb4" stroke-width="4"/>
      <g fill="none" stroke="#ff2fb4" stroke-width="3" stroke-linecap="round"><path d="M80 52a3 3 0 1 0 0 .1M90 49a3 3 0 1 0 0 .1M86 60a3 3 0 1 0 0 .1"/></g>
      <path d="M72 18l6 8 4-10 4 10 6-8 2 12" fill="none" stroke="#27d9f5" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;

  const logo = (size = "") =>
    `<a class="logo ${size}" href="index.html" aria-label="${esc(me.firstName)} ${esc(me.lastName)} — home">
      <span class="logo-script"><span class="logo-first">${esc(me.firstName)}</span><span class="logo-last">${esc(me.lastName)}</span></span>
      ${logoMark()}
      <span class="logo-title">${esc(me.title)}</span>
    </a>`;

  // Blocky, Roblox-style avatar holding a bowling ball, with an in-game name tag.
  const avatar = (opts = {}) => {
    const a = me.avatar;
    const ball = opts.ballColor || "#27d9f5";
    const pose = opts.pose || "hold"; // hold | wave
    return `<div class="avatar ${opts.cls || ""}" role="img" aria-label="${esc(me.firstName)}'s avatar holding a bowling ball">
      <div class="nametag"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="#fff"/><circle cx="6" cy="6" r="1.4" fill="#222"/><circle cx="10" cy="6" r="1.4" fill="#222"/><circle cx="8" cy="10" r="1.6" fill="#222"/></svg>${esc(me.firstName)}</div>
      <svg class="avatar-svg" viewBox="0 0 200 300" aria-hidden="true">
        <ellipse cx="100" cy="292" rx="70" ry="8" fill="#000" opacity=".35"/>
        <!-- legs -->
        <rect x="62" y="190" width="36" height="88" rx="6" fill="${a.pants}"/>
        <rect x="102" y="190" width="36" height="88" rx="6" fill="${a.pants}"/>
        <rect x="58" y="272" width="42" height="16" rx="6" fill="${a.shoes}"/>
        <rect x="100" y="272" width="42" height="16" rx="6" fill="${a.shoes}"/>
        <!-- torso -->
        <rect x="58" y="104" width="84" height="92" rx="10" fill="${a.shirt}"/>
        <path d="M86 104l14 16 14-16" fill="none" stroke="#14101c" stroke-width="4" opacity=".35"/>
        <text x="100" y="168" text-anchor="middle" font-family="Yellowtail, cursive" font-size="26" fill="#fff" opacity=".9">${esc(
          (me.firstName[0] || "") + (me.lastName[0] || "")
        )}</text>
        <!-- arms -->
        ${
          pose === "wave"
            ? `<g class="wave-arm"><rect x="142" y="40" width="30" height="80" rx="8" fill="${a.shirt}" transform="rotate(20 157 112)"/><rect x="152" y="26" width="28" height="26" rx="8" fill="${a.skin}" transform="rotate(20 157 112)"/></g>`
            : `<rect x="142" y="108" width="30" height="84" rx="8" fill="${a.shirt}"/><rect x="143" y="184" width="28" height="22" rx="8" fill="${a.skin}"/>`
        }
        <rect x="28" y="108" width="30" height="62" rx="8" fill="${a.shirt}"/>
        <rect x="30" y="160" width="40" height="22" rx="8" fill="${a.skin}" transform="rotate(-30 50 170)"/>
        <!-- ball in hand -->
        <g transform="translate(42 158)"><circle r="24" fill="${ball}"/><circle r="24" fill="#fff" opacity=".18" transform="translate(-7 -8) scale(.5)"/><circle cx="-6" cy="-7" r="3.2" fill="#14101c"/><circle cx="5" cy="-8" r="3.2" fill="#14101c"/><circle cx="0" cy="4" r="3.8" fill="#14101c"/></g>
        <!-- head -->
        <rect x="68" y="34" width="64" height="66" rx="16" fill="${a.skin}"/>
        <rect x="90" y="96" width="20" height="10" fill="${a.skin}"/>
        <!-- hair: top + long sides -->
        <path d="M62 62c-4-26 12-40 38-40s44 12 38 40l-6 2c0-12-6-22-14-24-10 8-26 12-46 12l-4 12z" fill="${a.hair}"/>
        <path d="M62 56h12v70c-8 0-14-4-14-10z" fill="${a.hair}"/>
        <path d="M126 56h12v60c0 6-6 10-12 10z" fill="${a.hair}"/>
        <!-- face -->
        <ellipse cx="88" cy="68" rx="4" ry="5.5" fill="#14101c"/>
        <ellipse cx="112" cy="68" rx="4" ry="5.5" fill="#14101c"/>
        <circle cx="89.5" cy="66" r="1.4" fill="#fff"/><circle cx="113.5" cy="66" r="1.4" fill="#fff"/>
        <path d="M88 82q12 10 24 0" fill="none" stroke="#14101c" stroke-width="3.5" stroke-linecap="round"/>
        <ellipse cx="80" cy="80" rx="5" ry="3" fill="#ff7ab8" opacity=".45"/><ellipse cx="120" cy="80" rx="5" ry="3" fill="#ff7ab8" opacity=".45"/>
      </svg>
    </div>`;
  };

  const star = (color, cls = "") =>
    `<svg class="neon-star ${cls}" viewBox="0 0 100 100" aria-hidden="true" style="--c:${color}"><path d="M50 6l12.6 28.4 30.9 3.2-23.1 20.8 6.6 30.4L50 73.2 23 88.8l6.6-30.4L6.5 37.6l30.9-3.2z" fill="none" stroke="${color}" stroke-width="5" stroke-linejoin="round"/></svg>`;

  /* ---------- HUD header + footer ---------- */
  const NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "about.html", label: "About Me", key: "about" },
    { href: "work.html", label: "My Work", key: "work" },
    { href: "resume.html", label: "Resume", key: "resume" },
    { href: "contact.html", label: "Contact", key: "contact" }
  ];

  function renderChrome() {
    const page = document.body.dataset.page;
    const header = document.getElementById("hud");
    if (header) {
      header.innerHTML = `
        <a class="skip" href="#main">Skip to content</a>
        <nav class="hud-bar" aria-label="Main">
          <a class="hud-home" href="index.html" aria-label="Home">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" transform="rotate(15 12 12)" fill="none" stroke="currentColor" stroke-width="2.4"/><rect x="10" y="10" width="4" height="4" transform="rotate(15 12 12)" fill="currentColor"/></svg>
          </a>
          <ul class="hud-links">
            ${NAV.filter((n) => n.key !== "home")
              .map(
                (n) =>
                  `<li><a href="${n.href}" class="hud-pill${page === n.key || (page === "project" && n.key === "work") ? " is-active" : ""}"${
                    page === n.key ? ' aria-current="page"' : ""
                  }>${n.label}</a></li>`
              )
              .join("")}
          </ul>
          <span class="hud-status"><span class="dot" aria-hidden="true"></span>${esc(me.status)}</span>
        </nav>`;
    }
    const footer = document.getElementById("footer");
    if (footer) {
      footer.innerHTML = `
        <div class="footer-inner">
          ${logo("logo--sm")}
          <p>Designed &amp; built by ${esc(me.firstName)} ${esc(me.lastName)} · Inspired by <em>The Lanes</em> on Roblox</p>
          <p class="footer-links">
            ${isTodo(me.email) ? "" : `<a href="mailto:${esc(me.email)}">Email</a>`}
            ${/TODO/.test(me.linkedin) ? "" : `<a href="${esc(me.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`}
            <a href="resume.html">Resume</a>
          </p>
        </div>`;
    }
  }

  /* ---------- Lane cam: ball rolls down the lane, pins fall, page opens ---------- */
  let rolling = false;
  function bowl(href, project) {
    if (rolling) return;
    if (reduceMotion) {
      window.location.href = href;
      return;
    }
    rolling = true;
    const color = project?.ballColor || "#ff2fb4";
    const laneNo = project ? P.projects.indexOf(project) + 1 : 1;
    const ov = document.createElement("div");
    ov.className = "lanecam";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-label", `Opening ${project ? project.title.replace(/^TODO:?\s*/, "") : "project"}`);
    const pinRows = [
      [0],
      [-1, 1],
      [-2, 0, 2],
      [-3, -1, 1, 3]
    ];
    ov.innerHTML = `
      <div class="lanecam-hud">
        <div class="lanecam-stats"><span>Ball speed: 16.0 MPH</span><span>Ball spin: -0.7</span></div>
        <div class="hud-pill is-active">Lane ${laneNo} — ${esc(project ? project.title.replace(/^TODO:?\s*/, "") : "")}</div>
      </div>
      <div class="lanecam-stage">
        <div class="lanecam-lane">
          <div class="gutter gutter--l"></div><div class="gutter gutter--r"></div>
          <div class="arrows">${"<i></i>".repeat(7)}</div>
          <div class="pins">${pinRows
            .map((row, r) => row.map((x) => `<span class="pin-wrap" style="--x:${x};--r:${r}">${pinSVG()}</span>`).join(""))
            .join("")}</div>
          <div class="roll-ball" style="--ball:${color}"><span>${ballSVG(color)}</span></div>
        </div>
      </div>
      <div class="lanecam-strike" aria-hidden="true">STRIKE!</div>
      <button class="lanecam-skip" type="button">Skip ▸</button>`;
    document.body.appendChild(ov);
    const go = () => (window.location.href = href);
    ov.querySelector(".lanecam-skip").addEventListener("click", go);
    ov.querySelector(".lanecam-skip").focus({ preventScroll: true });
    document.addEventListener("keydown", (e) => e.key === "Escape" && go(), { once: true });
    requestAnimationFrame(() => ov.classList.add("is-open"));
    setTimeout(() => ov.classList.add("is-rolling"), 250);
    setTimeout(() => ov.classList.add("is-hit"), 1500);
    setTimeout(go, 2500);
  }

  // Any link with data-roll bowls a ball before navigating.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-roll]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    const project = P.projects.find((p) => p.id === a.dataset.roll);
    bowl(a.getAttribute("href"), project);
  });

  // Restore state when returning via the back button (bfcache).
  window.addEventListener("pageshow", () => {
    rolling = false;
    document.querySelectorAll(".lanecam").forEach((n) => n.remove());
  });

  window.LANES = { esc, t, isTodo, img, pinSVG, ballSVG, logo, avatar, star, bowl };
  renderChrome();
})();
