/* Page renderers — each HTML page sets <body data-page="..."> and this fills <main>. */
(function () {
  const P = window.PORTFOLIO;
  const me = P.profile;
  const { esc, t, isTodo, img, ballSVG, logo, avatar, star, pinSVG } = window.LANES;
  const main = document.getElementById("main");
  const page = document.body.dataset.page;
  const plain = (s) => String(s ?? "").replace(/^TODO:?\s*/, "");

  const FRAMES = [
    { key: "problem", label: "Problem" },
    { key: "research", label: "Research" },
    { key: "define", label: "Define" },
    { key: "ideate", label: "Ideate" },
    { key: "iterate", label: "Iterate" },
    { key: "execution", label: "Execution" },
    { key: "outcome", label: "Outcome" }
  ];

  /* ---------- Scoreboard (home) ---------- */
  function scoreboard() {
    return `
      <div class="scoreboard" role="table" aria-label="Projects scoreboard">
        <div class="sb-head" role="row">
          <span class="sb-lane" role="columnheader">Lane</span>
          <span class="sb-player" role="columnheader">Project</span>
          ${FRAMES.map((f, i) => `<span class="sb-frame" role="columnheader" title="${f.label}"><b>${i + 1}</b><small>${f.label}</small></span>`).join("")}
          <span class="sb-total" role="columnheader">Total</span>
        </div>
        ${P.projects
          .map(
            (p, i) => `
          <a class="sb-row" role="row" href="project.html?p=${esc(p.id)}" data-roll="${esc(p.id)}" style="--ball:${esc(p.ballColor)}">
            <span class="sb-lane" role="cell">${ballSVG(p.ballColor, "sb-ball")}<b>${i + 1}</b></span>
            <span class="sb-player" role="cell"><strong>${t(p.title)}</strong><small>${t(p.subtitle)}</small></span>
            ${FRAMES.map(() => `<span class="sb-frame" role="cell" aria-hidden="true"><i class="strike"></i></span>`).join("")}
            <span class="sb-total" role="cell"><strong>${isTodo(p.score) ? '<span class="todo" title="Placeholder — edit js/data.js">—</span>' : esc(p.score)}</strong><small>${esc(p.scoreLabel || "")}</small></span>
            <span class="sb-go" aria-hidden="true">Bowl ▸</span>
          </a>`
          )
          .join("")}
        <div class="sb-foot"><span class="sb-pins">${"▼".repeat(10)}</span><span>Every project is scored frame-by-frame: problem → research → iteration → final design.</span></div>
      </div>`;
  }

  function homeLane() {
    const rows = [[0], [-1, 1], [-2, 0, 2], [-3, -1, 1, 3]];
    return `<div class="hero-lane" aria-hidden="true">
      <div class="hero-lane-plane">
        <div class="gutter gutter--l"></div><div class="gutter gutter--r"></div>
        <div class="arrows">${"<i></i>".repeat(7)}</div>
        <div class="pins">${rows.map((row, r) => row.map((x) => `<span class="pin-wrap" style="--x:${x};--r:${r}">${pinSVG()}</span>`).join("")).join("")}</div>
      </div>
    </div>`;
  }

  /* ---------- Pages ---------- */
  const pages = {
    home() {
      const first = P.projects[0];
      return `
        <section class="hero">
          <div class="hero-stats" aria-hidden="true"><span>Ball speed: Fast learner</span><span>Ball spin: Player-first</span></div>
          ${star("#27d9f5", "star-a")}${star("#ff2fb4", "star-b")}
          <div class="hero-copy">
            ${logo("logo--xl")}
            <p class="hero-tagline">${esc(me.tagline)}</p>
            <div class="hero-ctas">
              <a class="btn btn--pink" href="#scoreboard">Pick a project</a>
              <a class="btn btn--ghost" href="about.html">Meet the player</a>
            </div>
          </div>
          <div class="hero-scene">
            ${homeLane()}
            ${avatar({ ballColor: first?.ballColor, cls: "avatar--hero" })}
          </div>
        </section>

        <section id="scoreboard" class="section">
          <header class="section-head">
            <p class="eyebrow">Scoreboard</p>
            <h2>Choose a lane</h2>
            <p class="lede">Click a project to bowl it down the lane and open the full case study.</p>
          </header>
          ${scoreboard()}
        </section>

        <section class="section">
          <div class="tablet-row">
            <a class="tablet" href="about.html"><span class="tablet-k">Player</span><strong>About Me</strong><span>Who I am &amp; how I design</span></a>
            <a class="tablet" href="work.html"><span class="tablet-k">Ball rack</span><strong>My Work</strong><span>All case studies</span></a>
            <a class="tablet" href="resume.html"><span class="tablet-k">Stats</span><strong>Resume</strong><span>Experience &amp; skills</span></a>
            <a class="tablet" href="contact.html"><span class="tablet-k">Lane ${P.projects.length + 1}</span><strong>Contact</strong><span>Let's bowl a round</span></a>
          </div>
        </section>`;
    },

    about() {
      const A = P.about;
      return `
        <section class="page-head page-head--split">
          <div>
            <p class="eyebrow">About Me</p>
            <h1>Hi, I'm ${esc(me.firstName)} <span aria-hidden="true">👋</span></h1>
            <p class="lede">${t(A.intro)}</p>
          </div>
          ${avatar({ pose: "wave", ballColor: "#27d9f5", cls: "avatar--about" })}
        </section>
        <section class="section prose"><div class="narrow">
          ${A.paragraphs.map((p) => `<p>${t(p)}</p>`).join("")}
        </div></section>
        <section class="section">
          <h2 class="h-sm">Player stats</h2>
          <div class="stat-grid">
            ${A.stats.map((s) => `<div class="stat"><span>${esc(s.label)}</span><strong>${t(s.value)}</strong></div>`).join("")}
          </div>
        </section>
        <section class="section">
          <h2 class="h-sm">How I play</h2>
          <div class="card-grid">
            ${A.values
              .map((v, i) => `<article class="card"><span class="card-num">0${i + 1}</span><h3>${t(v.title)}</h3><p>${t(v.text)}</p></article>`)
              .join("")}
          </div>
        </section>
        <section class="section cta-band">
          <p>Want to see the process in action?</p>
          <a class="btn btn--pink" href="work.html">See my work</a>
        </section>`;
    },

    work() {
      return `
        <section class="page-head">
          <p class="eyebrow">My Work</p>
          <h1>The ball rack</h1>
          <p class="lede">Pick a ball. Each case study walks frame by frame through the problem, the research, the iterations and the final design decisions.</p>
        </section>
        <section class="section">
          <div class="rack">
            ${P.projects
              .map(
                (p, i) => `
              <a class="rack-card" href="project.html?p=${esc(p.id)}" data-roll="${esc(p.id)}" style="--ball:${esc(p.ballColor)}">
                <div class="rack-media">${p.hero?.src ? `<img src="${esc(p.hero.src)}" alt="" loading="lazy">` : ""}${ballSVG(p.ballColor, "rack-ball")}</div>
                <div class="rack-body">
                  <p class="rack-lane">Lane ${i + 1} · ${esc(p.year)}</p>
                  <h2>${t(p.title)}</h2>
                  <p>${t(p.subtitle)}</p>
                  <ul class="tags">${p.tags.map((tg) => `<li>${esc(tg)}</li>`).join("")}</ul>
                  <dl class="rack-meta"><div><dt>Role</dt><dd>${t(p.role)}</dd></div><div><dt>Timeline</dt><dd>${t(p.timeline)}</dd></div></dl>
                  <span class="rack-go">Bowl this case study ▸</span>
                </div>
              </a>`
              )
              .join("")}
          </div>
        </section>`;
    },

    resume() {
      const R = P.resume;
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
            <h2 class="h-sm">Experience</h2>
            <ol class="timeline">
              ${R.experience
                .map(
                  (x) => `<li>
                  <div class="tl-head"><h3>${t(x.role)}</h3><span class="tl-dates">${t(x.dates)}</span></div>
                  <p class="tl-org">${t(x.org)}</p>
                  <ul>${x.points.map((pt) => `<li>${t(pt)}</li>`).join("")}</ul>
                </li>`
                )
                .join("")}
            </ol>
            <h2 class="h-sm">Education</h2>
            <ol class="timeline">
              ${R.education
                .map((e) => `<li><div class="tl-head"><h3>${t(e.degree)}</h3><span class="tl-dates">${t(e.dates)}</span></div><p class="tl-org">${t(e.school)}</p></li>`)
                .join("")}
            </ol>
          </div>
          <aside class="skills">
            <h2 class="h-sm">Skills</h2>
            ${Object.entries(R.skills)
              .map(([k, list]) => `<div class="skill-block"><h3>${esc(k)}</h3><ul class="tags">${list.map((s) => `<li>${t(s)}</li>`).join("")}</ul></div>`)
              .join("")}
          </aside>
        </section>`;
    },

    contact() {
      const email = isTodo(me.email) ? "" : me.email;
      return `
        <section class="page-head page-head--split">
          <div>
            <p class="eyebrow">Contact</p>
            <h1>Let's bowl a round</h1>
            <p class="lede">I'd love to talk about design, games and how I can help build experiences players love.</p>
            <ul class="contact-list">
              <li><span>Email</span>${email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : t(me.email)}</li>
              <li><span>LinkedIn</span>${/TODO/.test(me.linkedin) ? t("TODO: add your LinkedIn URL") : `<a href="${esc(me.linkedin)}" target="_blank" rel="noopener">${esc(me.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</a>`}</li>
              <li><span>Location</span>${esc(me.location)}</li>
            </ul>
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

      const frameHead = (n, key, title) =>
        `<header class="frame-head"><span class="frame-no">Frame ${n}</span><h2>${title}</h2></header>`;

      return `
        <article class="case" style="--ball:${esc(p.ballColor)}">
          <header class="case-hero">
            <a class="back" href="work.html">◂ All projects</a>
            <div class="case-title">
              ${ballSVG(p.ballColor, "case-ball")}
              <div>
                <p class="eyebrow">Lane ${idx + 1} · ${esc(p.year)}</p>
                <h1>${t(p.title)}</h1>
                <p class="lede">${t(p.subtitle)}</p>
              </div>
            </div>
            <dl class="case-meta">
              <div><dt>Role</dt><dd>${t(p.role)}</dd></div>
              <div><dt>Team</dt><dd>${t(p.team)}</dd></div>
              <div><dt>Timeline</dt><dd>${t(p.timeline)}</dd></div>
              <div><dt>Tools</dt><dd>${t(p.tools)}</dd></div>
            </dl>
            ${img(p.hero, "shot--hero")}
          </header>

          <div class="case-layout">
            <nav class="frame-nav" aria-label="Case study frames">
              <p>Scorecard</p>
              <ol>${FRAMES.map((f, i) => `<li><a href="#${f.key}" data-frame="${f.key}"><b>${i + 1}</b>${f.label}</a></li>`).join("")}</ol>
            </nav>

            <div class="case-body">
              <section id="problem" class="frame">
                ${frameHead(1, "problem", "The problem")}
                <p class="callout">${t(p.problem.statement)}</p>
                <h3>How I identified it</h3><p>${t(p.problem.context)}</p>
                <h3>Goal</h3><p>${t(p.problem.goal)}</p>
              </section>

              <section id="research" class="frame">
                ${frameHead(2, "research", "Research")}
                <p>${t(p.research.summary)}</p>
                <div class="method-grid">${p.research.methods
                  .map((m) => `<div class="method"><h3>${t(m.name)}</h3><p>${t(m.detail)}</p></div>`)
                  .join("")}</div>
                <h3>Key insights</h3>
                <ol class="insights">${p.research.insights.map((x) => `<li>${t(x)}</li>`).join("")}</ol>
                ${img(p.research.image)}
              </section>

              <section id="define" class="frame">
                ${frameHead(3, "define", "Define")}
                <div class="two-col"><div><h3>Who we're designing for</h3><p>${t(p.define.persona)}</p></div><div><h3>Where it breaks down</h3><p>${t(p.define.journey)}</p></div></div>
                ${img(p.define.image)}
              </section>

              <section id="ideate" class="frame">
                ${frameHead(4, "ideate", "Ideate")}
                <p>${t(p.ideate.summary)}</p>
                ${img(p.ideate.image)}
              </section>

              <section id="iterate" class="frame">
                ${frameHead(5, "iterate", "Iterate")}
                <ol class="iterations">${p.iterations
                  .map(
                    (it) => `<li class="iteration">
                      <div class="iteration-text"><h3>${t(it.version)}</h3>
                        <p><b>What changed:</b> ${t(it.change)}</p>
                        <p><b>What testing showed:</b> ${t(it.feedback)}</p></div>
                      ${img(it.image)}
                    </li>`
                  )
                  .join("")}</ol>
              </section>

              <section id="execution" class="frame">
                ${frameHead(6, "execution", "Design execution")}
                <p>${t(p.execution.summary)}</p>
                <div class="shots">${p.execution.images.map((im) => img(im)).join("")}</div>
                <h3>Why it looks &amp; works this way</h3>
                <div class="decision-grid">${p.execution.decisions
                  .map((d, i) => `<div class="decision"><span class="card-num">0${i + 1}</span><h4>${t(d.title)}</h4><p>${t(d.why)}</p></div>`)
                  .join("")}</div>
                ${p.execution.prototypeUrl ? `<p><a class="btn btn--ghost" href="${esc(p.execution.prototypeUrl)}" target="_blank" rel="noopener">Open prototype ↗</a></p>` : ""}
              </section>

              <section id="outcome" class="frame">
                ${frameHead(7, "outcome", "Outcome &amp; reflection")}
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
            links.forEach((l) => l.classList.toggle("is-current", l.dataset.frame === e.target.id));
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
      const to = isTodo(me.email) ? "" : me.email;
      const subject = encodeURIComponent(`Portfolio inquiry from ${f.get("name")}`);
      const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
