/* Shared UI: HUD nav, neon logo, portrait, footer and the "bowl it" lane transition. */
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
  const plain = (s) => String(s ?? "").replace(/^TODO:?\s*/, "");

  const img = (im, cls = "") => {
    if (im && im.src) {
      return `<figure class="shot ${cls}"><img src="${esc(im.src)}" alt="${esc(plain(im.caption))}" loading="lazy">${
        im.caption ? `<figcaption>${esc(plain(im.caption))}</figcaption>` : ""
      }</figure>`;
    }
    return `<figure class="shot shot--empty ${cls}"><div class="shot-ph" role="img" aria-label="Image placeholder"><span>Add image</span><small>${esc(
      plain(im?.caption || "")
    )}</small></div></figure>`;
  };

  /* ---------- SVG pieces ---------- */
  const PIN_PATH =
    "M12 0C6.5 0 5.6 6 6.4 12c.7 5 1.8 8-.6 14C2.2 35 .4 45 1.8 55 3 64 6.4 70 12 70s9-6 10.2-15c1.4-10-.4-20-4-29-2.4-6-1.3-9-.6-14C18.4 6 17.5 0 12 0Z";

  const pinSVG = (cls = "") =>
    `<svg class="pin ${cls}" viewBox="-2 -2 28 74" aria-hidden="true"><path d="${PIN_PATH}" fill="#f7f4fb" stroke="#1a1426" stroke-width="2"/><path d="M6.3 15.5h11.4M6.6 19h10.8" stroke="#e8304f" stroke-width="2.2"/></svg>`;

  // Static ball with three finger holes (used for icons and hover-roll).
  const ballSVG = (color = "#ff2fb4", cls = "") =>
    `<svg class="ball ${cls}" viewBox="0 0 100 100" aria-hidden="true"><defs><radialGradient id="g${color.slice(1)}" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".25" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity=".55"/></radialGradient></defs><circle cx="50" cy="50" r="46" fill="${color}"/><circle cx="50" cy="50" r="46" fill="url(#g${color.slice(1)})"/><g class="ball-holes" fill="#1a1426"><circle cx="40" cy="38" r="6"/><circle cx="58" cy="36" r="6"/><circle cx="50" cy="56" r="7"/></g></svg>`;

  /* A ball whose surface markings are projected from a 3D sphere, so it rolls
     the way a real ball does: the face toward the camera sweeps up and over
     the top as the ball travels away. update(theta, phi) = forward roll, hook tilt. */
  let ballUid = 0;
  function rollingBall(color) {
    const id = `rb${++ballUid}`;
    const sph = (lat, lon) => {
      const la = (lat * Math.PI) / 180, lo = (lon * Math.PI) / 180;
      return { x: Math.cos(la) * Math.sin(lo), y: Math.sin(la), z: Math.cos(la) * Math.cos(lo) };
    };
    const marks = [
      // finger holes + thumb hole (the grip), then pearl-like specks so the spin reads
      { p: sph(24, -11), r: 5.6, fill: "#14101c" },
      { p: sph(26, 11), r: 5.6, fill: "#14101c" },
      { p: sph(2, 0), r: 6.4, fill: "#14101c" }
    ];
    const speckLat = [60, 38, -40, -62, 14, -18, 72, -8, 44, -52, 8, -30];
    speckLat.forEach((lat, i) => marks.push({ p: sph(lat, i * 83 + 20), r: 2.6 + (i % 3), fill: "#ffffff", op: 0.5 }));
    const els = marks.map((m) => `<ellipse class="mk" fill="${m.fill}" opacity="${m.op || 1}" rx="${m.r}" ry="${m.r}"/>`).join("");
    const wrap = document.createElement("div");
    wrap.innerHTML = `<svg class="ball" viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <radialGradient id="${id}s" cx="34%" cy="28%" r="80%"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".22" stop-color="#fff" stop-opacity="0"/><stop offset=".7" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient>
        <clipPath id="${id}c"><circle cx="50" cy="50" r="46"/></clipPath>
      </defs>
      <circle cx="50" cy="50" r="46" fill="${color}"/>
      <g clip-path="url(#${id}c)">${els}</g>
      <circle cx="50" cy="50" r="46" fill="url(#${id}s)"/>
    </svg>`;
    const svg = wrap.firstElementChild;
    const nodes = [...svg.querySelectorAll(".mk")];
    const R = 46;
    function update(theta, phi) {
      const ct = Math.cos(theta), st = Math.sin(theta), cp = Math.cos(phi), sp = Math.sin(phi);
      marks.forEach((m, i) => {
        // forward roll about the x axis (top of the ball moves away from the camera)…
        const y = m.p.y * ct + m.p.z * st;
        const z = -m.p.y * st + m.p.z * ct;
        // …then the hook tilt about the vertical axis
        const x = m.p.x * cp + z * sp;
        const z2 = -m.p.x * sp + z * cp;
        const n = nodes[i];
        if (z2 <= 0.04) {
          n.setAttribute("visibility", "hidden");
          return;
        }
        const cx = 50 + R * x, cy = 50 - R * y;
        const ang = (Math.atan2(-y, x) * 180) / Math.PI;
        n.setAttribute("visibility", "visible");
        n.setAttribute("cx", cx.toFixed(2));
        n.setAttribute("cy", cy.toFixed(2));
        n.setAttribute("rx", (m.r * z2).toFixed(2)); // squashed along the radial direction
        n.setAttribute("ry", m.r.toFixed(2));
        n.setAttribute("transform", `rotate(${ang.toFixed(1)} ${cx.toFixed(2)} ${cy.toFixed(2)})`);
      });
    }
    update(0, 0);
    return { el: svg, update };
  }

  const logoMark = () =>
    `<svg class="logo-mark" viewBox="0 0 120 90" aria-hidden="true">
      <g transform="translate(18 4) rotate(-14 12 35)"><path d="${PIN_PATH}" fill="#14101c" stroke="#fff" stroke-width="3"/></g>
      <g transform="translate(44 0) rotate(6 12 35)"><path d="${PIN_PATH}" fill="#14101c" stroke="#fff" stroke-width="3"/></g>
      <circle cx="88" cy="60" r="24" fill="#14101c" stroke="#ff2fb4" stroke-width="4"/>
      <g fill="none" stroke="#ff2fb4" stroke-width="3" stroke-linecap="round"><path d="M80 52a3 3 0 1 0 0 .1M90 49a3 3 0 1 0 0 .1M86 60a3 3 0 1 0 0 .1"/></g>
      <path d="M72 18l6 8 4-10 4 10 6-8 2 12" fill="none" stroke="#27d9f5" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;

  const logo = (size = "") =>
    `<a class="logo ${size}" href="index.html" aria-label="${esc(me.firstName)} ${esc(me.lastName)}, ${esc(me.title)} — home">
      <span class="logo-script" aria-hidden="true"><span class="logo-first">${esc(me.firstName)}</span><span class="logo-last">${esc(me.lastName)}</span></span>
      ${logoMark()}
      <span class="logo-title" aria-hidden="true">${esc(me.title)}</span>
    </a>`;

  // Player card: your photo with the school above and your program below, like a Roblox/Lanes player screen.
  const portrait = (opts = {}) =>
    `<figure class="player-card ${opts.cls || ""}">
      <p class="pc-school"><span>${esc(me.school)}</span></p>
      <div class="pc-photo"><img src="${esc(me.photo)}" alt="${esc(me.photoAlt)}" width="900" height="900" decoding="async"></div>
      <figcaption class="pc-info">
        <strong>${esc(me.title)}</strong>
        <span>${esc(me.degreeLine)}</span>
        <span>${esc(me.gradLine)}</span>
      </figcaption>
      ${ballSVG(opts.ballColor || "#ff2fb4", "pc-ball")}
    </figure>`;

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
          <a class="hud-home" href="index.html" aria-label="Home"${page === "home" ? ' aria-current="page"' : ""}>
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
          <p>Designed &amp; built by ${esc(me.firstName)} ${esc(me.lastName)}. Inspired by <em>The Lanes</em> on Roblox.</p>
          <p class="footer-links">
            ${me.email ? `<a href="mailto:${esc(me.email)}">Email</a>` : ""}
            ${me.linkedin ? `<a href="${esc(me.linkedin)}" target="_blank" rel="noopener">LinkedIn<span class="sr-only"> (opens in a new tab)</span></a>` : ""}
            ${me.uxfolio ? `<a href="${esc(me.uxfolio)}" target="_blank" rel="noopener">UXfolio<span class="sr-only"> (opens in a new tab)</span></a>` : ""}
            <a href="resume.html">Resume</a>
          </p>
        </div>`;
    }
  }

  /* ---------- Lane cam: a real ball roll, then the page opens ----------
     Release: the ball drops onto the lane and bounces once.
     Skid → hook → roll: it starts out wide, curves back toward the pocket, and
     its spin catches up to its speed (a skidding ball spins slower than it travels).
     It slows slightly with friction, then smashes the pins. */
  let rolling = false;
  let cancelRoll = null;
  const smooth = (x) => { x = Math.min(1, Math.max(0, x)); return x * x * (3 - 2 * x); };

  function bowl(href, project) {
    if (rolling) return;
    if (reduceMotion) {
      window.location.href = href;
      return;
    }
    rolling = true;
    const color = project?.ballColor || "#ff2fb4";
    const laneNo = project ? P.projects.indexOf(project) + 1 : 1;
    const title = project ? plain(project.title) : "";
    const ov = document.createElement("div");
    ov.className = "lanecam";
    ov.setAttribute("role", "dialog");
    ov.setAttribute("aria-modal", "true");
    ov.setAttribute("aria-label", `Opening ${title || "project"}`);
    const pinRows = [[0], [-1, 1], [-2, 0, 2], [-3, -1, 1, 3]];
    ov.innerHTML = `
      <div class="lanecam-hud">
        <div class="lanecam-stats" aria-hidden="true"><span>Ball speed: 16.0 MPH</span><span>Ball spin: -0.7</span></div>
        <div class="hud-pill is-active">Lane ${laneNo}${title ? " — " + esc(title) : ""}</div>
      </div>
      <div class="lanecam-stage" aria-hidden="true">
        <div class="lanecam-lane">
          <div class="gutter gutter--l"></div><div class="gutter gutter--r"></div>
          <div class="arrows">${"<i></i>".repeat(7)}</div>
          <div class="pins">${pinRows
            .map((row, r) => row.map((x) => `<span class="pin-wrap" style="--x:${x};--r:${r}">${pinSVG()}</span>`).join(""))
            .join("")}</div>
          <div class="roll-shadow"></div>
          <div class="roll-ball" style="--ball:${color}"></div>
        </div>
      </div>
      <div class="lanecam-strike" aria-hidden="true">STRIKE!</div>
      <button class="lanecam-skip" type="button">Skip ▸</button>`;
    document.body.appendChild(ov);

    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      window.location.href = href;
    };
    ov.querySelector(".lanecam-skip").addEventListener("click", go);
    ov.querySelector(".lanecam-skip").focus({ preventScroll: true });
    const onKey = (e) => e.key === "Escape" && go();
    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => ov.classList.add("is-open"));

    /* --- ball physics, driven per frame --- */
    const lane = ov.querySelector(".lanecam-lane");
    const ballEl = ov.querySelector(".roll-ball");
    const shadow = ov.querySelector(".roll-shadow");
    const ball = rollingBall(color);
    ballEl.appendChild(ball.el);
    const H = lane.offsetHeight;
    const BALL_R = 48; // px, radius of the ball in lane space
    const y0 = 40, y1 = H - 190; // foul line → head pin
    const x0 = 62, xc = 81.6, x1 = 53; // % of lane width: release, hook apex (control), pocket
    const D = 1350, PIT = 320, START = 280;
    let theta = 0, lastY = y0, hit = false, raf = 0, t0 = null;

    function frame(ts) {
      if (done) return;
      if (t0 === null) t0 = ts + START;
      const el = ts - t0;
      if (el < 0) { raf = requestAnimationFrame(frame); return; }

      const tau = Math.min(el / D, 1);
      const s = (tau - 0.075 * tau * tau) / (1 - 0.075); // friction slows the ball a little
      let y = y0 + (y1 - y0) * s;
      let xPct = (1 - s) * (1 - s) * x0 + 2 * (1 - s) * s * xc + s * s * x1; // skid out, hook back in
      let alpha = 1, scale = 1;

      // release: drop and one small bounce (seconds since release)
      const sec = el / 1000;
      let lift = 0;
      if (sec < 0.16) lift = 30 * (1 - (sec / 0.16) ** 2);
      else if (sec < 0.27) lift = 8 * (1 - (2 * ((sec - 0.16) / 0.11) - 1) ** 2);

      if (el > D) { // into the pit after impact
        const u = Math.min((el - D) / PIT, 1);
        y = y1 + 90 * u;
        alpha = 1 - u;
        scale = 1 - 0.25 * u;
      }

      // forward roll: spin lags travel at first (skid), then grips (rolling without slipping)
      const slip = 0.35 + 0.65 * smooth((s - 0.08) / 0.5);
      theta += ((y - lastY) / BALL_R) * slip;
      lastY = y;
      const phi = 0.55 * s * s; // axis tilt grows as the ball hooks
      ball.update(theta, phi);

      const left = xPct + "%";
      ballEl.style.left = left;
      ballEl.style.bottom = y + "px";
      ballEl.style.opacity = alpha;
      ballEl.style.transform = `rotateX(-74deg) translateY(${(-lift).toFixed(1)}px) scale(${scale})`;
      shadow.style.left = left;
      shadow.style.bottom = y - 14 + "px";
      shadow.style.opacity = (alpha * (0.75 - lift / 60)).toFixed(2);

      if (!hit && tau >= 0.985) {
        hit = true;
        ov.classList.add("is-hit");
        setTimeout(go, 950);
      }
      if (el < D + PIT) raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    cancelRoll = () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
    };
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
    if (cancelRoll) cancelRoll();
    document.querySelectorAll(".lanecam").forEach((n) => n.remove());
  });

  window.LANES = { esc, t, isTodo, plain, img, pinSVG, ballSVG, logo, portrait, star, bowl };
  renderChrome();
})();
