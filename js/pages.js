/* Page renderers — each HTML page sets <body data-page="..."> and this fills <main>. */
(function () {
  const P = window.PORTFOLIO;
  const me = P.profile;
  const { esc, t, isTodo, plain, img, ballSVG, logo, portrait, pinSVG } = window.LANES;
  const main = document.getElementById("main");
  const page = document.body.dataset.page;

  const FRAMES = [
    { key: "problem", label: "Problem" },
    { key: "research", label: "Research" },
    { key: "define", label: "Define" },
    { key: "ideate", label: "Ideate" },
    { key: "iterate", label: "Iterate" },
    { key: "execution", label: "Execution" },
    { key: "outcome", label: "Outcome" }
  ];

  // A frame can hold one image or a list of images
  const imgs = (x, cls = "") => (!x ? "" : Array.isArray(x) ? x.map((i) => img(i, cls)).join("") : img(x, cls));

  // relative luminance, used to pick readable text on a color swatch
  const lum = (hex) => {
    const c = hex.replace("#", "").match(/../g).map((h) => parseInt(h, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  };

  const brandBlock = (palette, typefaces) =>
    `<ul class="swatches" aria-label="Brand colors">${(palette || [])
      .map((c) => `<li style="--sw:${esc(c.hex)};--on:${(lum(c.hex) + 0.05) / 0.054 > 1.05 / (lum(c.hex) + 0.05) ? "#0d0a14" : "#fff"}"><b>${esc(c.name)}</b><span>${esc(c.hex)}</span></li>`)
      .join("")}</ul>${(typefaces || []).length ? `<ul class="typefaces">${typefaces.map((f) => `<li><span>${esc(f.role)}</span><strong>${esc(f.name)}</strong></li>`).join("")}</ul>` : ""}`;

  const ext = (href, label) =>
    `<a href="${esc(href)}" target="_blank" rel="noopener">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;

  /* ---------- Scoreboard (home): Focus / Approach / Case study ---------- */
  const pad = (n) => String(n).padStart(2, "0");
  function scoreboard() {
    return `
      <div class="scoreboard">
        <div class="sb-head" aria-hidden="true">
          <span class="sb-h-project">Lane / Project</span>
          <span class="sb-h"><b>1</b><small>Focus</small></span>
          <span class="sb-h"><b>2</b><small>Approach</small></span>
          <span class="sb-h"><b>3</b><small>Case study</small></span>
        </div>
        <ol class="sb-list">
        ${P.projects
          .map(
            (p, i) => `
          <li><a class="sb-row" href="project.html?p=${esc(p.id)}" data-roll="${esc(p.id)}" style="--ball:${esc(p.ballColor)}">
            <span class="sb-project">${ballSVG(p.ballColor, "sb-ball")}<b class="sb-num"><span class="sr-only">Lane </span>${pad(i + 1)}</b><span class="sb-title"><strong>${t(p.title)}</strong><small>${t(p.subtitle)}</small></span></span>
            <span class="sb-cell" data-label="Focus">${t(p.focus)}</span>
            <span class="sb-cell" data-label="Approach">${t(p.approach)}</span>
            <span class="sb-go"><span class="sb-btn">View case study <span aria-hidden="true">→</span></span></span>
          </a></li>`
          )
          .join("")}
        </ol>
        <div class="sb-foot"><span class="sb-pins" aria-hidden="true">${"▼".repeat(10)}</span><span>Each case study is scored frame by frame: problem, research, iteration, final design.</span></div>
      </div>`;
  }

  function homeLane() {
    const rows = [[0], [-1, 1], [-2, 0, 2], [-3, -1, 1, 3]];
    return `<div class="hero-lane">
      <div class="hero-lane-plane">
        <div class="gutter gutter--l"></div><div class="gutter gutter--r"></div>
        <div class="arrows">${"<i></i>".repeat(7)}</div>
        <div class="pin-spots">${rows.map((row, r) => row.map((x) => `<span class="pin-spot" style="--x:${x};--r:${r}"></span>`).join("")).join("")}</div>
        <div class="pins">${rows.map((row, r) => row.map((x) => `<span class="pin-wrap" style="--x:${x};--r:${r}">${pinSVG()}</span>`).join("")).join("")}</div>
      </div>
    </div>`;
  }

  /* ---------- Pages ---------- */
  const pages = {
    home() {
      return `
        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-bg" aria-hidden="true">${homeLane()}</div>
          <div class="hero-copy">
            <div class="hero-stats"><span>Location: ${esc(me.location)}</span><span>Final frame: M.S., May 2027</span></div>
            ${logo("logo--xl")}
            <h1 id="hero-title" class="hero-title"><span class="sr-only">${esc(me.firstName)} ${esc(me.lastName)}: </span>${esc(me.heroTitle)}</h1>
            <p class="hero-tagline">${esc(me.headline)}</p>
            <div class="hero-ctas">
              <a class="btn btn--pink" href="#scoreboard">Pick a project</a>
              <a class="btn btn--ghost" href="about.html">Meet the player</a>
            </div>
          </div>
          <div class="hero-scene">
            ${portrait({ ballColor: "#ff2fb4", cls: "player-card--hero" })}
          </div>
        </section>

        <section id="scoreboard" class="section" aria-labelledby="sb-title">
          <header class="section-head">
            <p class="eyebrow">Scoreboard</p>
            <h2 id="sb-title">Choose a lane</h2>
            <p class="lede">Explore my UX research and design case studies. Click a lane to bowl it down and open the case study.</p>
          </header>
          ${scoreboard()}
        </section>

        <section class="section" aria-label="More pages">
          <div class="tablet-row">
            <a class="tablet" href="about.html"><span class="tablet-k">Player</span><strong>About Me</strong><span>Who I am &amp; how I work</span></a>
            <a class="tablet" href="work.html"><span class="tablet-k">Ball rack</span><strong>My Work</strong><span>All case studies</span></a>
            <a class="tablet" href="resume.html"><span class="tablet-k">Stats</span><strong>Resume</strong><span>Experience &amp; skills</span></a>
            <a class="tablet" href="contact.html"><span class="tablet-k">Lane ${P.projects.length + 1}</span><strong>Contact</strong><span>Let's bowl a round</span></a>
          </div>
        </section>`;
    },

    about() {
      const A = P.about;
      const pill = (t) => `<span class="frame-pill">${t}</span>`;
      return `
        <section class="page-head page-head--split">
          <div>
            <p class="eyebrow">About Me · ${esc(A.kicker)}</p>
            <h1>${esc(A.title)} <span class="h1-sub">(${esc(A.pronunciation)})</span></h1>
            <p class="lede lede--big">${esc(A.lede)}</p>
            <ol class="trio" aria-label="My story in three moves">
              ${A.story.map((x, i) => `<li><b>${i + 1}</b><span><strong>${esc(x.title)}</strong>${esc(x.text)}</span></li>`).join("")}
            </ol>
          </div>
          ${portrait({ cls: "player-card--about", header: A.card.header, title: A.card.title, lines: A.card.lines, photo: A.card.photo, alt: A.card.photoAlt })}
        </section>

        <section class="section narrow-wide" aria-labelledby="path-title">
          ${pill("Frame 1")}
          <h2 id="path-title" class="h-md">${esc(A.path.heading)}</h2>
          <p class="path-lead">${esc(A.path.lead)}</p>
          <blockquote class="path-quote"><p>${esc(A.path.quote)}</p></blockquote>
          <p class="path-bridge">${esc(A.path.bridge)}</p>
          <ol class="path-steps">
            ${A.path.steps
              .map((st, i) => `<li class="path-step"><b aria-hidden="true">${i + 1}</b><div><h3>${esc(st.label)}</h3><p class="path-meta">${esc(st.meta)}</p><p>${esc(st.text)}</p></div></li>`)
              .join("")}
          </ol>
          <p class="path-turn">${esc(A.path.turn)}</p>
          <p class="path-extra">${esc(A.path.extra)}</p>
        </section>

        <section class="section" aria-labelledby="how-title">
          ${pill("Frame 2")}
          <h2 id="how-title" class="h-md">${esc(A.toolsHeading)}</h2>
          <ul class="tool-row" aria-label="Tools I use">${A.tools.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="cap-grid">
            ${A.capabilities.map((c) => `<article class="cap"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join("")}
          </div>
        </section>

        <section class="section" aria-labelledby="edu-title">
          ${pill("Frame 3")}
          <h2 id="edu-title" class="h-md">${esc(A.educationHeading)}</h2>
          <div class="edu-grid">
            ${A.education
              .map((e) => `<article class="edu"><h3>${esc(e.school)}</h3><p class="edu-program">${esc(e.program)}</p><p>${esc(e.text)}</p></article>`)
              .join("")}
          </div>
        </section>

        <section class="section" aria-labelledby="more-title">
          ${pill("Bonus frame")}
          <h2 id="more-title" class="h-md">${esc(A.moreHeading)}</h2>
          <div class="more-grid">
            ${A.more
              .map((m) => `<article class="more"><p class="more-v">${esc(m.value)}</p><h3>${esc(m.title)}</h3><p>${esc(m.text)}</p></article>`)
              .join("")}
          </div>
          <article class="league">
            <figure class="league-photo"><img src="${esc(A.league.image.src)}" alt="${esc(A.league.image.alt)}" width="536" height="524" loading="lazy"></figure>
            <div class="league-body">
              ${ballSVG("#ff2fb4", "league-ball")}
              <h3>${esc(A.league.title)}</h3>
              <p>${esc(A.league.text)}</p>
              <p class="league-tie">${esc(A.league.tie)}</p>
            </div>
          </article>
        </section>

        <section class="section cta-band">
          <p>Care to join me for a game?</p>
          <div class="cta-actions">
            <a class="btn btn--ghost" href="contact.html">Get in touch</a>
            <a class="btn btn--pink" href="work.html">See my work</a>
          </div>
        </section>`;
    },

    work() {
      return `
        <section class="page-head">
          <p class="eyebrow">My Work</p>
          <h1>The ball rack</h1>
          <p class="lede">Pick a ball. Each case study walks frame by frame through the problem, the research, the iterations and the final design decisions.</p>
        </section>
        <section class="section" aria-label="Case studies">
          <div class="rack">
            ${P.projects
              .map(
                (p, i) => `
              <a class="rack-card" href="project.html?p=${esc(p.id)}" data-roll="${esc(p.id)}" style="--ball:${esc(p.ballColor)}">
                <div class="rack-media" aria-hidden="true">${p.hero?.src ? `<img src="${esc(p.hero.src)}" alt="" loading="lazy">` : ""}${ballSVG(p.ballColor, "rack-ball")}</div>
                <div class="rack-body">
                  <p class="rack-lane">Lane ${i + 1}${p.year ? " · " + esc(p.year) : ""}</p>
                  <h2>${t(p.title)}</h2>
                  <p>${t(p.summary || p.subtitle)}</p>
                  <ul class="tags">${p.tags.map((tg) => `<li>${esc(tg)}</li>`).join("")}</ul>
                  <dl class="rack-meta"><div><dt>Role</dt><dd>${t(p.role)}</dd></div><div><dt>Timeline</dt><dd>${t(p.timeline)}</dd></div></dl>
                  <span class="rack-go">Bowl this case study <span aria-hidden="true">▸</span></span>
                </div>
              </a>`
              )
              .join("")}
          </div>
        </section>`;
    },

    resume() {
      const R = P.resume;
      const item = (x) => `<li>
          <div class="tl-head"><h3>${t(x.role)}</h3><span class="tl-dates">${t(x.dates)}</span></div>
          <p class="tl-org">${t(x.org)}</p>
          <ul>${x.points.map((pt) => `<li>${t(pt)}</li>`).join("")}</ul>
        </li>`;
      return `
        <section class="page-head page-head--row">
          <div>
            <p class="eyebrow">Resume</p>
            <h1>Career scorecard</h1>
            <p class="lede">${t(R.summary)}</p>
          </div>
          <a class="btn btn--pink" href="${esc(me.resumePdf)}" download>Download PDF</a>
        </section>
        <section class="section resume-grid">
          <div>
            ${R.sections.map((s) => `<h2 class="h-sm">${esc(s.title)}</h2><ol class="timeline">${s.items.map(item).join("")}</ol>`).join("")}
            <h2 class="h-sm">Education</h2>
            <ol class="timeline">
              ${R.education
                .map(
                  (e) => `<li><div class="tl-head"><h3>${t(e.degree)}</h3><span class="tl-dates">${t(e.dates)}</span></div><p class="tl-org">${t(e.school)}${e.detail ? ` · ${esc(e.detail)}` : ""}</p></li>`
                )
                .join("")}
            </ol>
          </div>
          <aside class="skills" aria-label="Skills and coursework">
            <h2 class="h-sm">Skills &amp; tools</h2>
            ${Object.entries(R.skills)
              .map(([k, list]) => `<div class="skill-block"><h3>${esc(k)}</h3><ul class="tags">${list.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`)
              .join("")}
            <h2 class="h-sm h-sm--gap">Coursework</h2>
            <ul class="tags">${R.coursework.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
          </aside>
        </section>`;
    },

    contact() {
      const rows = [
        me.email && ["Email", `<a href="mailto:${esc(me.email)}">${esc(me.email)}</a>`],
        me.phone && ["Phone", `<a href="tel:+1${esc(me.phone.replace(/\D/g, ""))}">${esc(me.phone)}</a>`],
        me.linkedin && ["LinkedIn", ext(me.linkedin, esc(me.linkedin.replace(/^https?:\/\/(www\.)?/, "")))],
        me.uxfolio && ["Portfolio", ext(me.uxfolio, esc(me.uxfolio.replace(/^https?:\/\//, "")))],
        me.location && ["Location", esc(me.location)]
      ].filter(Boolean);
      return `
        <section class="page-head page-head--split">
          <div>
            <p class="eyebrow">Contact</p>
            <h1>Let's bowl a round</h1>
            <p class="lede">I'd love to talk about research, design and how I can help build experiences people love.</p>
            <dl class="contact-list">
              ${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
            </dl>
          </div>
          <form class="lane-tablet" id="contact-form">
            <div class="lane-tablet-head">${logo("logo--sm")}<span>Lane ${P.projects.length + 1}</span></div>
            <label>Your name<input name="name" required autocomplete="name"></label>
            <label>Your email<input name="email" type="email" required autocomplete="email"></label>
            <label>Message<textarea name="message" rows="4" required></textarea></label>
            <button class="btn btn--pink" type="submit">Send message</button>
            <p class="form-note">Opens your email app with the message ready to send.</p>
          </form>
        </section>`;
    },

    project() {
      const id = new URLSearchParams(location.search).get("p");
      const idx = Math.max(0, P.projects.findIndex((p) => p.id === id));
      const p = P.projects[idx];
      const next = P.projects[(idx + 1) % P.projects.length];
      document.title = `${plain(p.title)} — ${me.firstName} ${me.lastName}`;

      const frameHead = (n, title) =>
        `<header class="frame-head"><span class="frame-no">Frame ${n}</span><h2>${title}</h2></header>`;

      return `
        <article class="case" style="--ball:${esc(p.ballColor)}">
          <header class="case-hero">
            <a class="back" href="work.html"><span aria-hidden="true">◂</span> All projects</a>
            <div class="case-title">
              ${ballSVG(p.ballColor, "case-ball")}
              <div>
                <p class="eyebrow">Lane ${idx + 1}${p.year ? " · " + esc(p.year) : ""}</p>
                <h1>${t(p.title)}</h1>
                <p class="lede">${t(p.subtitle)}</p>
              </div>
            </div>
            <dl class="case-meta">
              <div><dt>Role</dt><dd>${t(p.role)}</dd></div>
              <div><dt>Team</dt><dd>${t(p.team)}</dd></div>
              <div><dt>Timeline</dt><dd>${t(p.timeline)}</dd></div>
              <div><dt>Tools &amp; methods</dt><dd>${t(p.tools)}</dd></div>
            </dl>
            ${img(p.hero, "shot--hero" + (p.hero && p.hero.fit === "phone" ? " shot--phone" : ""))}
          </header>

          <div class="case-layout">
            <nav class="frame-nav" aria-label="Case study frames">
              <p>Scorecard</p>
              <ol>${FRAMES.map((f, i) => `<li><a href="#${f.key}" data-frame="${f.key}"><b>${i + 1}</b>${f.label}</a></li>`).join("")}</ol>
            </nav>

            <div class="case-body">
              <section id="problem" class="frame">
                ${frameHead(1, "The problem")}
                <p class="callout">${t(p.problem.statement)}</p>
                <h3>How I identified it</h3><p>${t(p.problem.context)}</p>
                <h3>Goal</h3><p>${t(p.problem.goal)}</p>
              </section>

              <section id="research" class="frame">
                ${frameHead(2, "Research")}
                <p>${t(p.research.summary)}</p>
                <div class="method-grid">${p.research.methods
                  .map((m) => `<div class="method"><h3>${t(m.name)}</h3><p>${t(m.detail)}</p></div>`)
                  .join("")}</div>
                <h3>Key insights</h3>
                <ol class="insights">${p.research.insights.map((x) => `<li>${t(x)}</li>`).join("")}</ol>
                ${imgs(p.research.image)}
              </section>

              <section id="define" class="frame">
                ${frameHead(3, "Define")}
                ${p.define.callout ? `<p class="callout">${t(p.define.callout)}</p>` : ""}
                ${
                  p.define.persona || p.define.journey
                    ? `<div class="two-col"><div><h3>Who we're designing for</h3><p>${t(p.define.persona)}</p></div><div><h3>Where it breaks down</h3><p>${t(p.define.journey)}</p></div></div>`
                    : ""
                }
                ${
                  p.define.painPoints
                    ? `<h3>${esc(p.define.painPointsHeading || "Common pain points")}</h3><ol class="insights">${p.define.painPoints.map((x) => `<li>${t(x)}</li>`).join("")}</ol>`
                    : ""
                }
                ${(p.define.lists || [])
                  .map((l) => `<h3>${esc(l.heading)}</h3><ol class="insights">${l.items.map((x) => `<li>${t(x)}</li>`).join("")}</ol>`)
                  .join("")}
                ${
                  p.define.map
                    ? `<h3>${esc(p.define.map.heading)}</h3><div class="goal-map">${p.define.map.rows
                        .map((r) => `<div class="gm-row"><b>${esc(r.tag)}</b><div><p class="gm-need">${t(r.need)}</p><p class="gm-do">${t(r.design)}</p></div><span class="gm-where">${esc(r.where)}</span></div>`)
                        .join("")}</div>`
                    : ""
                }
                ${imgs(p.define.image)}
              </section>

              <section id="ideate" class="frame">
                ${frameHead(4, "Ideate")}
                <p>${t(p.ideate.summary)}</p>
                ${imgs(p.ideate.image)}
              </section>

              <section id="iterate" class="frame">
                ${frameHead(5, "Iterate")}
                <ol class="iterations">${p.iterations
                  .map(
                    (it) => `<li class="iteration">
                      <div class="iteration-text"><h3>${t(it.version)}</h3>
                        <p><b>What changed:</b> ${t(it.change)}</p>
                        <p><b>What testing showed:</b> ${t(it.feedback)}</p></div>
                      ${it.palette ? `<div class="iteration-wide iteration-brand"><div><h4>Brand system</h4>${brandBlock(it.palette, it.typefaces)}</div></div>` : ""}
                      ${Array.isArray(it.image) && it.image.length > 1 ? `<div class="iteration-wide">${imgs(it.image)}</div>` : imgs(it.image)}
                    </li>`
                  )
                  .join("")}</ol>
              </section>

              <section id="execution" class="frame">
                ${frameHead(6, "Design execution")}
                <p>${t(p.execution.summary)}</p>
${(p.execution.goals || [])
                  .map(
                    (g) => `<article class="goal-card">
                      <header class="goal-head"><span class="frame-no">${esc(g.tag)}</span><p class="goal-statement">${esc(g.title || g.statement)}</p></header>
                      <p class="goal-why">${t(g.why)}</p>
                      ${g.before && g.after ? `<div class="compare-pair"><div class="cmp-col"><p class="cmp-tag">Before</p>${img(g.before)}</div><div class="cmp-col"><p class="cmp-tag cmp-tag--after">After</p>${img(g.after)}</div></div>` : ""}
                      ${g.images ? `<div class="goal-shots">${imgs(g.images)}</div>` : ""}
                    </article>`
                  )
                  .join("")}
                <div class="shots">${p.execution.images.map((im) => img(im)).join("")}</div>
                ${
                  p.execution.compare
                    ? `<h3>Before and after</h3>${p.execution.compare
                        .map((c) => `<div class="compare"><p class="compare-label">${esc(c.label)}</p><div class="compare-pair">${img(c.before)}${img(c.after)}</div></div>`)
                        .join("")}`
                    : ""
                }
                ${p.execution.palette ? `<h3>Brand system</h3>${brandBlock(p.execution.palette, p.execution.typefaces)}` : ""}
                <h3>Why it looks &amp; works this way</h3>
                <div class="decision-grid">${p.execution.decisions
                  .map((d, i) => `<div class="decision"><span class="card-num">0${i + 1}</span><h4>${t(d.title)}</h4><p>${t(d.why)}</p></div>`)
                  .join("")}</div>
                ${p.execution.prototypeUrl ? `<p>${ext(p.execution.prototypeUrl, "Open prototype ↗").replace("<a ", '<a class="btn btn--ghost" ')}</p>` : ""}
              </section>

              <section id="outcome" class="frame">
                ${frameHead(7, "Outcome &amp; reflection")}
                ${
                  p.outcome.compare
                    ? `<h3>Before and after, page by page</h3>${p.outcome.compare
                        .map(
                          (c) => `<div class="compare compare--page">
                            <p class="compare-label">${c.goal ? `<span class="frame-no">${esc(c.goal)}</span> ` : ""}${esc(c.label)}</p>
                            <div class="compare-pair${c.before ? "" : " compare-pair--single"}">
                              ${c.before ? `<div class="cmp-col"><p class="cmp-tag">Before</p>${img(c.before)}</div>` : ""}
                              <div class="cmp-col"><p class="cmp-tag cmp-tag--after">After</p><div class="cmp-after${Array.isArray(c.after) ? " cmp-after--multi" : ""}">${imgs(c.after)}</div></div>
                            </div>
                          </div>`
                        )
                        .join("")}`
                    : ""
                }
                <div class="results">${p.outcome.results
                  .map((r) => `<div class="result"><strong>${t(r.value)}</strong><span>${esc(r.label)}</span></div>`)
                  .join("")}</div>
                <p>${t(p.outcome.reflection)}</p>
              </section>

              ${
                P.projects.length > 1
                  ? `<a class="next-lane" href="project.html?p=${esc(next.id)}" data-roll="${esc(next.id)}" style="--ball:${esc(next.ballColor)}">
                <span>Next lane</span><strong>${t(next.title)}</strong>${ballSVG(next.ballColor, "next-ball")}</a>`
                  : ""
              }
            </div>
          </div>
        </article>`;
    }
  };

  if (pages[page]) main.innerHTML = pages[page]();

  /* ---------- Page behaviours ---------- */
  if (page === "project") {
    const links = [...document.querySelectorAll(".frame-nav a")];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => {
              const on = l.dataset.frame === e.target.id;
              l.classList.toggle("is-current", on);
              if (on) l.setAttribute("aria-current", "true");
              else l.removeAttribute("aria-current");
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll(".frame").forEach((s) => io.observe(s));
  }

  if (page === "contact") {
    document.getElementById("contact-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      const subject = encodeURIComponent(`Portfolio inquiry from ${f.get("name")}`);
      const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
      window.location.href = `mailto:${me.email}?subject=${subject}&body=${body}`;
    });
  }
})();
