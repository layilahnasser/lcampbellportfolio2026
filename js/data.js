/* ==========================================================================
   PORTFOLIO CONTENT — edit this one file to update the whole site.

   • Any text that starts with "TODO:" shows up on the site with a dashed
     pink outline so you can spot what still needs your real content.
     Replace the whole string (including "TODO:") with your own words.
   • Images: drop files into  assets/img/  and put the path in "src",
     e.g.  src: "assets/img/project1-hero.png". Empty src = placeholder box.
   ========================================================================== */

window.PORTFOLIO = {
  /* ---------- Your player profile ---------- */
  profile: {
    firstName: "Layilah",
    lastName: "Campbell",
    title: "UX / Product Designer", // shows under your name in the neon logo
    tagline:
      "I design playful, player-first experiences — grounded in research and polished through iteration.",
    location: "Michigan, USA",
    status: "Open to opportunities", // HUD pill on the home page
    email: "TODO:your.email@example.com",
    linkedin: "https://www.linkedin.com/in/TODO",
    uxfolio: "https://uxfol.io/", // TODO: your public UXfolio link
    resumePdf: "assets/resume.pdf", // drop your PDF here with this name

    /* Your in-game avatar colours (the character standing at the lane) */
    avatar: {
      skin: "#8d5a3b",
      hair: "#1b1220",
      shirt: "#ff2fb4",
      pants: "#17141f",
      shoes: "#f4f4f8"
    }
  },

  /* ---------- About Me ---------- */
  about: {
    intro:
      "TODO: 2–3 sentences in your own voice. Who are you, what kind of designer are you, and why games / Roblox?",
    paragraphs: [
      "TODO: Your story — how you got into design, and what drives you.",
      "TODO: Why The Lanes is your favourite game, and what it taught you about social, player-first design (great place to connect with Roblox!)."
    ],
    // Short "player stats" shown as cards
    stats: [
      { label: "Focus", value: "UX · UI · Research" },
      { label: "Toolkit", value: "Figma · FigJam" },
      { label: "Based in", value: "Michigan" },
      { label: "Favourite game", value: "The Lanes" }
    ],
    values: [
      { title: "Players first", text: "Every decision starts with a real person, a real need and real evidence." },
      { title: "Iterate in the open", text: "Ship rough, test early, and let feedback shape the next roll." },
      { title: "Clarity over clutter", text: "Fun interfaces still need to be fast to read and easy to use." }
    ]
  },

  /* ---------- Projects (shown on the scoreboard + Work page) ----------
     Each project becomes its own case study page: project.html?p=<id>
     The case study is split into "frames", like a bowling game:
       overview → problem → research → define → ideate → iterate → execution → outcome
  ---------------------------------------------------------------------- */
  projects: [
    {
      id: "project-one",
      title: "TODO: Project One",
      subtitle: "TODO: One-line summary of the product",
      ballColor: "#ff2fb4", // colour of the ball that rolls down the lane
      year: "2025",
      score: "TODO", // short headline result for the scoreboard TOTAL, e.g. "+32%"
      scoreLabel: "impact",
      tags: ["UX Research", "Mobile", "Prototyping"],
      role: "TODO: e.g. Lead UX Designer",
      team: "TODO: e.g. 2 designers, 1 PM, 3 engineers",
      timeline: "TODO: e.g. 10 weeks",
      tools: "TODO: e.g. Figma, Maze, Miro",
      hero: { src: "", caption: "Hero image — final design in context" },

      problem: {
        statement: "TODO: The problem in one or two sentences. Who is struggling, and with what?",
        context: "TODO: Background — how did you identify this problem? What signals (data, complaints, observations) pointed to it?",
        goal: "TODO: How might we… ? What does success look like?"
      },
      research: {
        summary: "TODO: What did you need to learn, and how did you find out?",
        methods: [
          { name: "TODO: e.g. User interviews (8)", detail: "TODO: Who you talked to and why." },
          { name: "TODO: e.g. Competitive analysis", detail: "TODO: What you compared and what stood out." },
          { name: "TODO: e.g. Survey (54 responses)", detail: "TODO: What you asked." }
        ],
        insights: [
          "TODO: Key insight #1 — a surprising finding, ideally with a quote or number.",
          "TODO: Key insight #2",
          "TODO: Key insight #3"
        ],
        image: { src: "", caption: "Affinity map / research synthesis" }
      },
      define: {
        persona: "TODO: Primary persona or player archetype — name, goals, frustrations.",
        journey: "TODO: The moment in their journey where things break down.",
        image: { src: "", caption: "Persona + journey map" }
      },
      ideate: {
        summary: "TODO: How you explored solutions — sketches, crazy 8s, flows, and how you narrowed down.",
        image: { src: "", caption: "Early sketches & user flow" }
      },
      iterations: [
        {
          version: "V1 — Low-fi",
          change: "TODO: What you built first.",
          feedback: "TODO: What testing revealed (e.g. 4 of 6 users missed the CTA).",
          image: { src: "", caption: "Low-fidelity wireframes" }
        },
        {
          version: "V2 — Mid-fi",
          change: "TODO: What you changed and why.",
          feedback: "TODO: What improved, what still needed work.",
          image: { src: "", caption: "Mid-fidelity prototype" }
        },
        {
          version: "V3 — High-fi",
          change: "TODO: Final refinements.",
          feedback: "TODO: Final validation results.",
          image: { src: "", caption: "High-fidelity screens" }
        }
      ],
      execution: {
        summary: "TODO: Walk through the final design.",
        decisions: [
          { title: "TODO: Design decision #1", why: "TODO: The justification — tie it back to research or testing." },
          { title: "TODO: Design decision #2", why: "TODO: Why this layout / colour / interaction?" },
          { title: "TODO: Design decision #3", why: "TODO: Accessibility, consistency, technical constraints…" }
        ],
        images: [
          { src: "", caption: "Final screen 1" },
          { src: "", caption: "Final screen 2" }
        ],
        prototypeUrl: "" // optional Figma prototype link
      },
      outcome: {
        results: [
          { value: "TODO", label: "e.g. task success rate" },
          { value: "TODO", label: "e.g. time on task" },
          { value: "TODO", label: "e.g. SUS score" }
        ],
        reflection: "TODO: What you learned, what you'd do differently, and what's next."
      }
    },

    {
      id: "project-two",
      title: "TODO: Project Two",
      subtitle: "TODO: One-line summary of the product",
      ballColor: "#27d9f5",
      year: "2025",
      score: "TODO",
      scoreLabel: "impact",
      tags: ["Game UX", "Systems", "UI"],
      role: "TODO",
      team: "TODO",
      timeline: "TODO",
      tools: "TODO",
      hero: { src: "", caption: "Hero image" },
      problem: {
        statement: "TODO: Problem statement.",
        context: "TODO: How you identified it.",
        goal: "TODO: How might we… ?"
      },
      research: {
        summary: "TODO: Research approach.",
        methods: [
          { name: "TODO: Method", detail: "TODO: Detail." },
          { name: "TODO: Method", detail: "TODO: Detail." }
        ],
        insights: ["TODO: Insight #1", "TODO: Insight #2", "TODO: Insight #3"],
        image: { src: "", caption: "Research synthesis" }
      },
      define: {
        persona: "TODO: Persona.",
        journey: "TODO: Journey pain point.",
        image: { src: "", caption: "Persona" }
      },
      ideate: {
        summary: "TODO: Ideation.",
        image: { src: "", caption: "Sketches" }
      },
      iterations: [
        { version: "V1", change: "TODO", feedback: "TODO", image: { src: "", caption: "V1" } },
        { version: "V2", change: "TODO", feedback: "TODO", image: { src: "", caption: "V2" } }
      ],
      execution: {
        summary: "TODO: Final design walkthrough.",
        decisions: [
          { title: "TODO: Decision", why: "TODO: Why." },
          { title: "TODO: Decision", why: "TODO: Why." }
        ],
        images: [{ src: "", caption: "Final design" }],
        prototypeUrl: ""
      },
      outcome: {
        results: [
          { value: "TODO", label: "metric" },
          { value: "TODO", label: "metric" }
        ],
        reflection: "TODO: Reflection."
      }
    },

    {
      id: "project-three",
      title: "TODO: Project Three",
      subtitle: "TODO: One-line summary of the product",
      ballColor: "#ffb020",
      year: "2024",
      score: "TODO",
      scoreLabel: "impact",
      tags: ["Web", "Accessibility", "Design System"],
      role: "TODO",
      team: "TODO",
      timeline: "TODO",
      tools: "TODO",
      hero: { src: "", caption: "Hero image" },
      problem: {
        statement: "TODO: Problem statement.",
        context: "TODO: How you identified it.",
        goal: "TODO: How might we… ?"
      },
      research: {
        summary: "TODO: Research approach.",
        methods: [
          { name: "TODO: Method", detail: "TODO: Detail." },
          { name: "TODO: Method", detail: "TODO: Detail." }
        ],
        insights: ["TODO: Insight #1", "TODO: Insight #2"],
        image: { src: "", caption: "Research synthesis" }
      },
      define: {
        persona: "TODO: Persona.",
        journey: "TODO: Journey pain point.",
        image: { src: "", caption: "Persona" }
      },
      ideate: {
        summary: "TODO: Ideation.",
        image: { src: "", caption: "Sketches" }
      },
      iterations: [
        { version: "V1", change: "TODO", feedback: "TODO", image: { src: "", caption: "V1" } },
        { version: "V2", change: "TODO", feedback: "TODO", image: { src: "", caption: "V2" } }
      ],
      execution: {
        summary: "TODO: Final design walkthrough.",
        decisions: [
          { title: "TODO: Decision", why: "TODO: Why." },
          { title: "TODO: Decision", why: "TODO: Why." }
        ],
        images: [{ src: "", caption: "Final design" }],
        prototypeUrl: ""
      },
      outcome: {
        results: [
          { value: "TODO", label: "metric" },
          { value: "TODO", label: "metric" }
        ],
        reflection: "TODO: Reflection."
      }
    }
  ],

  /* ---------- Resume ---------- */
  resume: {
    summary:
      "TODO: 2–3 line professional summary tailored to the Roblox role.",
    experience: [
      {
        role: "TODO: Job title",
        org: "TODO: Company",
        dates: "TODO: 2024 – Present",
        points: [
          "TODO: Impact-focused bullet (verb + what + result).",
          "TODO: Another bullet."
        ]
      },
      {
        role: "TODO: Job title",
        org: "TODO: Company",
        dates: "TODO: 2022 – 2024",
        points: ["TODO: Bullet.", "TODO: Bullet."]
      }
    ],
    education: [
      {
        degree: "TODO: Degree, e.g. Master of Science in Information (UX)",
        school: "TODO: University of Michigan",
        dates: "TODO: 2026"
      }
    ],
    skills: {
      Design: ["Interaction design", "Visual / UI design", "Prototyping", "Design systems"],
      Research: ["User interviews", "Usability testing", "Surveys", "Synthesis"],
      Tools: ["Figma", "FigJam", "Adobe CC", "TODO: add your tools"]
    }
  }
};
